import React, { useContext } from 'react'
import DataContext from './context/datacontext'

const Newpost = () => {
  
  const {handleSubmit,postBody,setPostBody,postTitle,setPostTitle}=useContext(DataContext)
  return (
    <main className="NewPost">
    <h2>New Post</h2>
    <form className="newPostForm" autoComplete="off" onSubmit={handleSubmit}>
        <label htmlFor="postTitle">Title:</label>
        <input
            id="postTitle"
            type="text"
            required
            value={postTitle}
            onChange={(e) => setPostTitle(e.target.value)}
        />
        <label htmlFor="postBody">Post:</label>
        <textarea
            id="postBody"
            required
            value={postBody}
            onChange={(e) => setPostBody(e.target.value)}
        />
        <button type="submit">Submit</button>
    </form>
    </main>
  )
}

export default Newpost