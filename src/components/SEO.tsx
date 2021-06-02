import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import { Helmet } from "react-helmet"

interface SEOProps {
  description?: string
  keywords?: string[]
  lang?: string
  meta?: []
  image?: any
  title: string
}

export const SEO: React.FC<SEOProps> = ({
  description,
  lang = "en",
  meta = [],
  keywords = [],
  image,
  title,
}) => {
  const { site } = useStaticQuery(query)
  const metaImage =
    image && image.src ? `${site.siteMetadata.siteUrl}${image.src}` : null

  const metaDescription = description || site.siteMetadata.description

  return (
    <Helmet
      htmlAttributes={{
        lang,
      }}
      meta={[
        {
          name: `description`,
          content: metaDescription,
        },
        {
          property: `og:title`,
          content: title,
        },
        {
          property: `og:description`,
          content: metaDescription,
        },
        {
          property: `og:type`,
          content: `website`,
        },
        {
          name: `twitter:creator`,
          content: site.siteMetadata.author,
        },
        {
          name: `twitter:title`,
          content: title,
        },
        {
          name: `twitter:description`,
          content: metaDescription,
        },
      ]
        .concat(
          metaImage
            ? [
                {
                  property: `og:image`,
                  content: metaImage,
                },
                {
                  property: `og:image:alt`,
                  content: title,
                },
                {
                  property: "og:image:width",
                  content: image.width,
                },
                {
                  property: "og:image:height",
                  content: image.height,
                },
                {
                  name: `twitter:card`,
                  content: `summary_large_image`,
                },
              ]
            : [
                {
                  name: `twitter:card`,
                  content: `summary`,
                },
              ]
        )
        .concat(
          keywords.length > 0
            ? {
                name: `keywords`,
                content: keywords.join(`, `),
              }
            : []
        )
        .concat(meta)}
      title={title}
      titleTemplate={site.siteMetadata.titleTemplate}
    />
  )
}

export default SEO

const query = graphql`
  query DefaultSEOQuery {
    site {
      siteMetadata {
        title
        titleTemplate
        description
        author
        siteUrl
      }
    }
  }
`
