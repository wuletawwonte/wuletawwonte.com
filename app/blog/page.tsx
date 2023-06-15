import { getPostSlugs } from "../lib/api"

const BlogPage = () => {
  const cwd = getPostSlugs()

  return (    
    <div>Blog page {cwd}</div>
  )
}

export default BlogPage