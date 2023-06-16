import React from 'react'
import Hero from './components/Hero'
import { getAllPosts } from './lib/api'
import { PostPreview } from './components/PostPreview'
import './homepage.scss'

function HomePage() {
  const posts = getAllPosts();
  return (
    <div className='homepage'>
      <Hero />
      <h2 className='homepage__posts'>RECENT POSTS</h2>
      <ul>
        {posts.slice(0,3).map((post) => {
          return <PostPreview post={post} />
        })}
      </ul>      
    </div>
  )
}

export default HomePage