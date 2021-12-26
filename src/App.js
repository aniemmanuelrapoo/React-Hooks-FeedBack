function App() {
  const title = 'Blog Post'
  const body = 'This is my blog post'
  const commemts = [
    {id: 1, text: 'Comment one'},
    {id: 2, text: 'Comment two'},
    {id: 3, text: 'Comment three'}
  ]

  const loading = false
  const showComments = true
  const commentBlock = (
    <div className="comments">
    <h3>Commemts ({commemts.length})</h3>
    <ul>
      {commemts.map((comment, index) => (<li key={index}>{comment.text}</li>))}
    </ul>
  </div>
  )

  if(loading) return <h1>Loading...</h1>
  return (
    <div className="container">
      <h1>{title.toUpperCase()}</h1>
      <p>{body}</p>
      {showComments && commentBlock}
    </div>
  );
}

export default App;
