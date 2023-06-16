import React from 'react'
import Hero from './components/hero'
import { getAllPosts } from './lib/api'

function HomePage() {
  const posts = getAllPosts();
  return (
    <div>
      <Hero />
      <h2>Recent Posts</h2>
      <ul>
        {posts.map((post) => {
          return <li>
            {post.title}
            </li>
        })}
      </ul>      
    </div>
  )
}

export default HomePage