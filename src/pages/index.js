import React from "react"
import { Carousel, Container, Row, Col, Card } from 'react-bootstrap';
import Layout from "../components/layout";
import { Link, graphql } from "gatsby"

export default class IndexPage extends React.Component {
  render() {
    const { data } = this.props;
    const siteTitle = data.site.siteMetadata.title;
    const posts = data.allMarkdownRemark.edges;

    return (
        <Layout>
            <Carousel>
                <Carousel.Item>
                    <img
                    className="d-block w-100"
                    src="/static/img/member/whole.jpg"
                    alt="First slide"
                    />
                    {/* <Carousel.Caption>
                    <h3>{ 'First slide label' }</h3>
                    <p>{ 'Nulla vitae elit libero, a pharetra augue mollis interdum.'}</p>
                    </Carousel.Caption> */}
                </Carousel.Item>
            </Carousel>
            <Container style={{ marginTop: '80px', marginBottom: '80px' }}>
                <h2>Latest Blogs</h2>
                <Row>
                    {posts.map(({ node }) => {
                        return (
                          <Col sm={3} key={node.fields.slug}>
                              <Card>
                                <Card.Img variant="top" style={{width: '100%', height: '100%' }} src="/static/blog/sopu01.jpg" />
                                <Card.Body>
                                  <Card.Title>{ node.frontmatter.title || node.fields.slug }</Card.Title>
                                  <Card.Text>
                                    { node.frontmatter.description || node.excerpt }
                                  </Card.Text>
                                  <Link className="card-link" to={ node.fields.slug }>Read More</Link>
                                </Card.Body>
                              </Card>
                          </Col>
                        )
                    })}
                </Row>
            </Container>
        </Layout>
    );
  }
}

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      edges {
        node {
          excerpt
          fields {
            slug
          }
          frontmatter {
            date(formatString: "MMMM DD, YYYY")
            title
            description
          }
        }
      }
    }
  }
`