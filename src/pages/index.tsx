import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import Image from "gatsby-image"
import { motion } from "framer-motion"

import SEO from "../components/SEO"

import twitterCloneGIF from "../images/twitterclone.gif"
import kvstoreGIF from "../images/kvstore.gif"
import heiverGIF from "../images/heiver-process.gif"

type TWork = {
  title: string
  desc: string
  year: number
  type: string
  url: string
  image: any
  imageAlt: string
  fluid?: any
}

type WorkProps = { data: TWork; reverse: boolean; fluid: any }

const Work: React.FC<WorkProps> = ({ data, reverse, fluid }) => {
  const flexRowClass = reverse ? "md:flex-row-reverse" : "md:flex-row"

  return (
    <div
      className={`flex flex-wrap flex-col-reverse ${flexRowClass} md:justify-between`}
    >
      <div className="w-full md:w-2/3 mb-20 md:mb-36">
        {data.image && <img src={data.image} alt={data.imageAlt} />}
        {data.fluid && <Image fluid={fluid} />}
      </div>
      <div className="w-full md:w-1/3 px-12 mb-12 md:mb-36 self-end">
        <div className="py-4 md:py-6 self-start">—</div>
        <a
          href={data.url}
          target="_blank"
          rel="noreferrer"
          className="font-butler text-4xl md:text-8xl text-alt transition-colors duration-500 hover:text-primary"
        >
          <em>{data.title}</em>
        </a>
        <div className="text-gray-500 text-lg md:text-2xl uppercase">
          {data.desc}
        </div>
        <div className="py-4 md:py-6">—</div>
        <div className="text-xl md:text-2xl">
          <span className="font-axiforma">{data.year}</span>
          <span> · </span>
          <span className="font-axiforma">{data.type}</span>
        </div>
        <div className="pt-4 md:pt-6">—</div>
      </div>
    </div>
  )
}

export const Index: React.FC = () => {
  const {
    selfImage,
    mindzzleImage,
    stalyncImage,
    mernblogImage,
    covinfoImage,
  } = useStaticQuery(query)
  const works: TWork[] = [
    {
      title: "Twitter Clone",
      desc: "An experiment to recreate twitter",
      year: 2021,
      type: "Personal Project",
      image: twitterCloneGIF,
      imageAlt: "Twitter clone",
      url: "https://github.com/HotPotatoC/twitter-clone",
    },
    {
      title: "KVstore",
      desc: "An open-source in-memory database server",
      year: 2021,
      type: "Personal Project",
      image: kvstoreGIF,
      imageAlt: "kvstore",
      url: "https://github.com/HotPotatoC/kvstore",
    },
    {
      title: "Stalync",
      desc:
        "Powerful and consistent PaaS for creating state-of-the-art real time applications",
      year: 2021,
      type: "Open-source Project",
      image: null,
      imageAlt: "",
      fluid: stalyncImage.childImageSharp.fluid,
      url: "https://github.com/Stalync",
    },
    {
      title: "Mindzzle",
      desc: "Groundbreaking service provider all-in-one HCM tools",
      year: 2020,
      type: "Frontend Internship",
      image: null,
      imageAlt: "",
      fluid: mindzzleImage.childImageSharp.fluid,
      url: "https://www.instagram.com/mindzzle/?hl=en",
    },
    {
      title: "Heiver",
      desc: "Simple bi-directional file-sharing tool using a TCP socket",
      year: 2021,
      type: "Personal Project",
      image: heiverGIF,
      imageAlt: "heiver",
      url: "https://github.com/HotPotatoC/heiver",
    },
    {
      title: "MERN Blog",
      desc: "Markdown-based Blogging app created with the MERN Stack",
      year: 2020,
      type: "Personal Project",
      image: null,
      imageAlt: "",
      fluid: mernblogImage.childImageSharp.fluid,
      url: "https://github.com/HotPotatoC/mern-markdown-blog",
    },
    {
      title: "Covinfo",
      desc: "Simple COVID-19 Tracker website",
      year: 2020,
      type: "Personal Project",
      image: null,
      imageAlt: "",
      fluid: covinfoImage.childImageSharp.fluid,
      url: "https://covinfo-site.netlify.app",
    },
  ]

  return (
    <>
      <SEO
        keywords={[
          `juan`,
          `juan christian`,
          `juan's portfolio`,
          `portfolio`,
          `web developer`,
          `web programmer`,
        ]}
        title="Home"
        image={selfImage.childImageSharp.fluid}
      />

      <section className="container mx-auto w-full mt-32 md:mt-64 px-6">
        <section className="flex flex-wrap justify-between items-center font-monument-ultrabold">
          <div className="w-full overflow-hidden text-center">
            <motion.h1
              initial={{ opacity: 0, y: "2em" }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ width: "0%" }}
              transition={{
                duration: 3,
                ease: [0.19, 1.0, 0.22, 1.0],
                delay: 0.75,
              }}
              className="text-4xl sm:text-6xl lg:text-8xl"
            >
              <span className="font-butler italic">Hi </span>
              <div className="inline-block hover:transform hover:rotate-45 transition-transform duration-500">
                👋
              </div>
              <span className="font-butler italic"> My name is </span>
              <span className="expand-cursor transition-colors duration-500 hover:text-alt">
                JUAN CHRISTIAN{" "}
              </span>
              <Image
                className="inline-flex w-20 md:w-28 hover:transform hover:scale-125 transition-transform duration-200 expand-cursor"
                fluid={selfImage.childImageSharp.fluid}
              />
              <span className="font-butler italic"> I am a </span>
              <span className="expand-cursor transition-colors duration-500 hover:text-alt">
                SOFTWARE DEVELOPER
              </span>{" "}
              💻
              <span className="font-butler italic">based in </span>
              <span className="expand-cursor transition-colors duration-500 hover:text-alt">
                INDONESIA
              </span>
            </motion.h1>
          </div>
        </section>
      </section>
      <section className="mt-36">
        {works.map((work, idx) => (
          <Work
            key={idx}
            data={work}
            fluid={work.fluid}
            reverse={(idx + 1) % 2 === 0}
          />
        ))}
      </section>
    </>
  )
}

export default Index

const query = graphql`
  query HomeQuery {
    selfImage: file(relativePath: { eq: "me2.jpg" }) {
      id
      childImageSharp {
        fluid(maxWidth: 125, toFormat: PNG) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    mindzzleImage: file(relativePath: { eq: "mindzzlemockup.jpg" }) {
      id
      childImageSharp {
        fluid(toFormat: PNG) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    stalyncImage: file(relativePath: { eq: "stalyncmockup.jpg" }) {
      id
      childImageSharp {
        fluid(toFormat: PNG) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    mernblogImage: file(relativePath: { eq: "mernblogmockup.jpg" }) {
      id
      childImageSharp {
        fluid(toFormat: PNG) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    covinfoImage: file(relativePath: { eq: "covinfomockup.jpg" }) {
      id
      childImageSharp {
        fluid(toFormat: PNG) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`
