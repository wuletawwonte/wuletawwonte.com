import React from 'react'
import Hero from './components/hero'
import { getAllPosts } from './lib/api'

function HomePage() {
  const posts = getAllPosts(['title', 'author', 'slug', 'date']);
  return (
    <div>
      <Hero />
      <div>HomePage</div>
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