import {React, useEffect} from 'react'
import '../../styles/BlogPost.css'
import Img1 from '../../assets/myworkphotos/img17.jpg'

function BlogPost5() {
    
  useEffect(() => {
    window.scrollTo(0, 0)
  })

  return (
    <div>
        <div className='blogPostImg'>
            <img className='blogImg' src={Img1} alt='Blog Post'/>
        </div>
      <div className='blogPostText'>
        <h2 className='blogPostTitle'>Busy as a Bee</h2>
        <div className='author'>
          <h3>Author: <span className='authorName'>Henry MAY</span></h3>
          <span className='postDate'>1 day ago</span>
        </div>
        <p className='blogPostDesc'>Excepteur ut ipsum mollit ex laboris aliquip amet nisi pariatur magna qui ex esse. Ex laboris sit nisi eu amet ullamco qui 
        tempor do exercitation do. Anim est consequat nisi fugiat id deserunt aliquip id magna incididunt incididunt. Consequat labore culpa laboris adipisicing velit. 
        Consectetur enim aliqua anim in ea nisi. Duis commodo fugiat dolor tempor eiusmod ullamco aute velit est adipisicing.Fugiat qui sunt duis culpa commodo 
        nisi commodo non amet enim irure aliqua ut id. Ex labore irure do magna aliqua ad sint laboris laborum proident nulla officia eu est. Sunt officia 
        exercitation nulla ex. Tempor mollit mollit aliqua fugiat incididunt. Reprehenderit fugiat qui ullamco tempor cupidatat elit. Aliquip pariatur mollit 
        do aute laboris anim voluptate sint do quis labore Lorem. Quis excepteur minim minim commodo.Enim ut duis do dolore aliqua in ullamco nulla dolore sit 
        nisi non ut deserunt. Enim ut ea consequat magna nulla commodo minim ad est dolor mollit anim. Nostrud laboris ad dolore in aute esse ut cupidatat. 
        Fugiat eiusmod aliquip qui aliqua id excepteur consectetur dolor aliquip eiusmod dolore qui. Non do sunt laborum veniam nulla. Culpa labore cupidatat 
        enim sint id reprehenderit dolore tempor ea.Enim minim adipisicing ex duis cupidatat ex ullamco occaecat. Dolore voluptate dolore cupidatat officia id 
        aute ad officia deserunt elit. Reprehenderit velit laborum aute velit dolore nostrud labore cillum eiusmod elit ullamco labore. </p>
      </div>
  </div>
  )
}

export default BlogPost5