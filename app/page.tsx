import React from 'react'
import Hero from './components/Hero'
import { getAllPosts } from './lib/api'
import { PostPreview } from './components/PostPreview';

function HomePage() {
  const posts = getAllPosts();
  return (
    <div>
      <Hero />
      <h2>Recent Posts</h2>
      <ul>
        {posts.map((post) => {
          return <PostPreview post={post} />
        })}
      </ul>      
    </div>
  )
}

export default HomePage