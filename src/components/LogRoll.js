import React from 'react'
import PropTypes from 'prop-types'
import { Link, graphql, StaticQuery } from 'gatsby'

class LogRoll extends React.Component {

  render() {
    const { data } = this.props
    const { edges: posts } = data.allMarkdownRemark
    
    return (
      <div className="columns is-multiline">
      {posts && (posts
          .map(({ node: post }) => (
            <div
              className="is-parent column is-6"
              key={post.id}
            >
            <article className="">
              <p>
                <Link className="" to={post.fields.slug}>
                {post.frontmatter.title}
                </Link>
                <span> &bull; </span>
                <span className="">{post.frontmatter.date}</span>
              </p>
              <p>
                {post.excerpt}
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
