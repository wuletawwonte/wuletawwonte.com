import { getPostBySlug } from '../../lib/api'

const PostPage = (props: any) => {
  const slug = props.params.slug
  const post = getPostBySlug(slug, ['title', 'content'])
  return (
    <>
    <h2>PostPage</h2>
    <p>{slug}</p> 
    <p>{post.content}</p>
    </>   
  )
}

export default PostPage