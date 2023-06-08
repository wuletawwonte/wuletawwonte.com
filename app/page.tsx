import Link from 'next/link'
import React from 'react'

function HomePage() {
  return (
    <main>
      <div>HomePage</div>
      <ul>
        <li><Link href="/">Home</Link></li>
        <li><Link href="/about">About</Link></li>
      </ul>
    </main>
  )
}

export default HomePage