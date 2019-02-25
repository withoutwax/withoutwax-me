import React from 'react'
import PropTypes from 'prop-types'
import { Link, graphql, StaticQuery } from 'gatsby'

class LogRoll extends React.Component {

  render() {
    const { data } = this.props
    const { edges: posts } = data.allMarkdownRemark
    
    return (
      <div className="">
      {posts && (posts
          .map(({ node: post }) => (
            <div
              className=""
              key={post.id}
            >
            <article className="blog-roll-item">
              <p>
                <Link className="blog-roll-item-title" to={post.fields.slug}>
                {post.frontmatter.title}
                </Link>
                <span> &bull; </span>
                <span className="">{post.frontmatter.date}</span>
              </p>
              <p>
                {/* {post.excerpt} */}
                {post.frontmatter.description}
                <br />
                <br />
                {/* <Link className="button" to={post.fields.slug}>
                  Keep Reading →
                </Link> */}
              </p>
              </article>
            </div>
          )))}
          </div>
    );
  }
}

LogRoll.propTypes = {
  data: PropTypes.shape({
    allMarkdownRemark: PropTypes.shape({
      edges: PropTypes.array,
    }),
  }),
}

export default () => (
  <StaticQuery
    query={graphql`
    query LogRollQuery {
      allMarkdownRemark(
        sort: { order: DESC, fields: [frontmatter___date] },
        filter: { frontmatter: { templateKey: { eq: "blog-post" }, category: {eq: "Log"} }}
      ) {
        edges {
          node {
            excerpt(pruneLength: 200)
            id
            fields {
              slug
            }
            frontmatter {
              title
              templateKey
              date(formatString: "MMMM DD, YYYY")
              description
            }
          }
        }
      }
    }
    `}
    render={(data, count) => (
      <LogRoll data={data} count={count} />
    )}
  />
)
