import { Author } from "./author"

type Post = {
    title: string
    excerpt: string
    date: string
    slug: string
    content: string
    author: Author
}

export type { Post }