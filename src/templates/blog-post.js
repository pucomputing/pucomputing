import React from "react"
import { Container } from 'react-bootstrap';
import Layout from "../components/layout";
import { Link, graphql } from "gatsby"

export default class BlogPage extends React.Component {
    render() {
        const post = this.props.data.markdownRemark;
        const siteTitle = this.props.data.site.siteMetadata.title;
        const { previous, next } = this.props.pageContext;

        return (
            <Layout>
                <Container style={{ marginTop: '80px', marginBottom: '80px' }}>
                    <h2>{ post.frontmatter.title }</h2>
                    { post.frontmatter.date }
                    <section dangerouslySetInnerHTML={{ __html: post.html }} />
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
      }
    }
  }
`