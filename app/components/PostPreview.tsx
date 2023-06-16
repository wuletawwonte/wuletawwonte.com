import Link from "next/link"
import { Post } from "../interfaces/post"
import './post-preview.scss'

export const PostPreview = (props: { post: Post }) => {
  const post = props.post;
  return (
    <div>
      <Link href={`/posts/${post.slug}`}>
        {post.title}
      </Link>
    </div>
  )
}
