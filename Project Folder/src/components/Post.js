import {React, useEffect} from 'react'
import '../styles/Post.css'

export const Post = ({postImg, postAlt, postText1, postText2, postTitle, postDate, postDesc}) => {

  useEffect(() => {
    window.scrollTo(0, 0)
  })

  return (
    <div className='post'>
        <img className='postImg' src={postImg} alt={postAlt}/>    
        <div className='postInfo'>
            <div className='postExtras'>
                <span className='postText1'>{postText1}</span>
                <span className='postText2'>{postText2}</span>
            </div>
            <h2 className='postTitle'>{postTitle}</h2>
            <span className='postDate'>{postDate}</span>
        </div>
        <p className='postDesc'>{postDesc}</p>
    </div>
  )
}
