import { getPostSlugs } from "../lib/api"
import './page.scss'

const BlogPage = () => {
  const cwd = getPostSlugs()

  return (    
    <div>
      <div className="topsection">
        <h2>Blogs page</h2>
        <p>This is where I write.</p>
      </div>
      <ul>
        {cwd.map((slug) => (
          <li key={slug}>
            {slug}
          </li>
        ))}
      </ul>
    </div>
  )
}

export default BlogPage