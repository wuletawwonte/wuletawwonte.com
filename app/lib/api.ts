import fs from 'fs'
import { join } from 'path'
import matter from 'gray-matter'
import { Post } from '../interfaces/post'

const postsDirectory = join(process.cwd(), '_posts')

export function getPostSlugs() {
  const files = fs.readdirSync(postsDirectory)
  const mdposts = files.filter(file => file.endsWith('.md'))
  const slugs = mdposts.map(mdpost => mdpost.replace(/\.md$/, ''))
  return slugs 
}

export function getPostBySlug(slug: string) {
  const fullPath = join(postsDirectory, `${slug}.md`)
  const fileContents = fs.readFileSync(fullPath, 'utf8')
  const { data, content } = matter(fileContents)

  const postItem: Post = {
    title: data.title,
    date: data.date,
    slug: slug,
    content: content,
    excerpt: data.excerpt,
    author: data.author
  }

  return postItem
}

export function getAllPosts() {
  const slugs = getPostSlugs()
  const posts = slugs
    .map((slug) => getPostBySlug(slug))
    .sort((post1, post2) => (post1.date > post2.date ? -1 : 1))
  return posts
}