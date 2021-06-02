import React, { useState, useEffect } from "react"
import { WindowLocation } from "@reach/router"
import useMousePosition from "../hooks/useMousePosition"

export const Cursor: React.FC<{ location: WindowLocation }> = ({
  location,
}) => {
  const [hovered, setHovered] = useState(false)
  const [clicked, setClicked] = useState(false)
  const [x, y] = useMousePosition()

  useEffect(() => {
    addEventListeners()
    hoverEventListeners()
    return () => removeEventListeners()
    // eslint-disable-next-line
  }, [location.pathname]) // Passed location.key as dependency to keep on registering handlers on page change

  const addEventListeners = () => {
    document.addEventListener("mousedown", onMouseDown)
    document.addEventListener("mouseup", onMouseUp)
  }

  const removeEventListeners = () => {
    document.removeEventListener("mousedown", onMouseDown)
    document.removeEventListener("mouseup", onMouseUp)
  }

  const hoverEventListeners = () => {
    document.querySelectorAll("a").forEach((el) => {
      el.addEventListener("mouseenter", () => setHovered(true))
      el.addEventListener("mouseleave", () => setHovered(false))
    })
    document.querySelectorAll("button").forEach((el) => {
      el.addEventListener("mouseenter", () => setHovered(true))
      el.addEventListener("mouseleave", () => setHovered(false))
    })
    document.querySelectorAll(".expand-cursor").forEach((el) => {
      el.addEventListener("mouseenter", () => setHovered(true))
      el.addEventListener("mouseleave", () => setHovered(false))
    })
  }

  const onMouseUp = () => {
    setClicked(false)
  }

  const onMouseDown = () => {
    setClicked(true)
  }

  const inner: React.CSSProperties = {
    transition: "opacity 0.3s, transform 0.3s ease",
    zIndex: 100,
    left: `${x}px`,
    top: `${y}px`,
  }

  const outer: React.CSSProperties = {
    transition: "0.1s ease",
    zIndex: 100,
    left: `${x}px`,
    top: `${y}px`,
  }

  if (hovered) {
    Object.assign(inner, {
      transform: "translate(-50%, -50%) scale(3)",
    })
    Object.assign(outer, {
      opacity: 0,
    })
  }

  if (clicked) {
    Object.assign(inner, {
      transform: "translate(-50%, -50%) scale(-0.5)",
    })
    Object.assign(outer, {
      transform: "translate(-50%, -50%) scale(-0.45)",
    })
  }

  return (
    <>
      <div
        className="pointer-events-none fixed transform -translate-x-1/2 -translate-y-1/2 p-8 hidden sm:block border-2 border-white rounded-full mix-blend-difference"
        style={outer}
      ></div>
      <div
        className="pointer-events-none fixed transform -translate-x-1/2 -translate-y-1/2 p-2 hidden sm:block bg-white rounded-full mix-blend-difference"
        style={inner}
      ></div>
    </>
  )
}

export default Cursor
