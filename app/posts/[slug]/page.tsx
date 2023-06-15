const PostPage = (props: any) => {
    const slug = props.params.slug
  return (
    <>
    <h2>PostPage</h2>
    <p>{slug}</p> 
    </>   
  )
}

export default PostPage