import React from 'react'
import Hero from './components/Hero'
import { getAllPosts } from './lib/api'
import { PostPreview } from './components/PostPreview'
import './homepage.scss'
import Link from 'next/link'
import { faArrowRightLong } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

function HomePage() {
  const posts = getAllPosts();
  return (
    <div className='homepage'>
      <Hero />
      <h2 className='homepage__posts'>RECENT POSTS</h2>
      <ul>
        {posts.slice(0,3).map((post) => {
          return <PostPreview post={post} key={post.slug} />
        })}
      </ul>   
      <Link href='/posts' className="homepage__more">Read More Posts <FontAwesomeIcon icon={faArrowRightLong} size='xs'></FontAwesomeIcon></Link>   
    </div>
  )
}

export default HomePage