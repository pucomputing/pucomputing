import React from "react"
import { Container } from 'react-bootstrap';
import Layout from "../components/layout";
import { Link, graphql } from "gatsby"
import Img from "gatsby-image";
import { InlineShareButtons } from 'sharethis-reactjs';

export default class BlogPage extends React.Component {
    render() {
        const post = this.props.data.markdownRemark;
        const siteTitle = this.props.data.site.siteMetadata.title;
        const { previous, next } = this.props.pageContext;

        return (
            <Layout>
              <Container style={{
                marginTop: '80px',
                marginBottom: '80px',
                backgroundColor: '#fff',
                backgroundClip: 'border-box',
                border: '1.5px solid rgba(0,0,0,.125)',
                borderRadius: '.25rem',
                padding: '50px 25px'
              }}>
                <section style={{
                  marginBottom: '30px',
                }}>
                  <Img sizes={ post.frontmatter.thumbnail.childImageSharp.sizes } />
                  <h1>{ post.frontmatter.title }</h1>
                  <time>{ post.frontmatter.date }</time>
                </section>
                <section
                  style={{

                  }}
                  dangerouslySetInnerHTML={{ __html: post.html }}
                />
                <InlineShareButtons
                config={{
                  alignment: 'center',  // alignment of buttons (left, center, right)
                  color: 'social',      // set the color of buttons (social, white)
                  enabled: true,        // show/hide buttons (true, false)
                  font_size: 16,        // font size for the buttons
                  labels: 'null',        // button labels (cta, counts, null)
                  language: 'en',       // which language to use (see LANGUAGES)
                  networks: [           // which networks to include (see SHARING NETWORKS)
                    'whatsapp',
                    'line',
                    'facebook',
                    'twitter'
                  ],
                  padding: 12,          // padding within buttons (INTEGER)
                  radius: 4,            // the corner radius on each button (INTEGER)
                  show_total: true,
                  size: 40,
                }}
                />
              </Container>
            </Layout>
        );
    }
}

export const pageQuery = graphql`
  query BlogPostBySlug($slug: String!) {
    site {
      siteMetadata {
        title
      }
    }
    markdownRemark(fields: { slug: { eq: $slug } }) {
      id
      excerpt(pruneLength: 160)
      html
      frontmatter {
        title
        date(formatString: "DD MMMM YYYY")
        description
        thumbnail {
          childImageSharp {
            sizes(maxWidth: 630) {
              ...GatsbyImageSharpSizes
            }
          }
        }
      }
    }
  }
`