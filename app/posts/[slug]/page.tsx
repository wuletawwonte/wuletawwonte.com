import { getPostBySlug } from '../../lib/api'
import Markdown from 'markdown-to-jsx'

const PostPage = (props: any) => {
  const slug = props.params.slug
  const post = getPostBySlug(slug)
  return (
    <>
    <h1>{post.title}</h1>
    <div className='markdown'>
        <Markdown>{post.content}</Markdown>
    </div>
    </>   
  )
}

export default PostPage