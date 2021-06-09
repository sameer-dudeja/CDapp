import React from 'react'
import Loader from 'react-loader-spinner'
import PropTypes from 'prop-types'
import InfiniteScroll from 'react-infinite-scroll-component'
import { useFetch } from '../customHooks/useFetch'
const url = 'http://jsonplaceholder.typicode.com/posts/?_limit=10'

const Posts = () => {
  const { posts } = useFetch(url)
  return (
    <>
      <article className='posts'>
        <h2>Posts</h2>
        <br />

        <InfiniteScroll
          dataLength={posts.length}
          hasMore={true}
          loader={
            <div className='loader'>
              <Loader
                type='Oval'
                color='#FF5A43'
                height={80}
                width={80}
                timeout={3000}
              />
            </div>
          }
          endMessage={
            <p style={{ textAlign: 'center' }}>
              <b>Yay! You have seen it all</b>
            </p>
          }
        >
          <ul>
            {posts.map((posts) => {
              const { id, title, body } = posts
              return (
                <li key={id}>
                  <div>
                    <h4>{title}</h4>
                    <p>{body}</p>
                  </div>
                </li>
              )
            })}
          </ul>
        </InfiniteScroll>
      </article>
    </>
  )
}
Posts.propTypes = {
  title: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
}
export default Posts
