import Link from "next/link"
import { Post } from "../interfaces/post"
import './post-preview.scss'

export const PostPreview = (props: { post: Post }) => {
  const post = props.post;
  return (
    <div className="post">
      <Link href={`/posts/${post.slug}`} className="post__title">
        {post.title}
      </Link>
      <span>{post.date}</span>
      <p>{post.excerpt}</p>
    </div>
  )
}
