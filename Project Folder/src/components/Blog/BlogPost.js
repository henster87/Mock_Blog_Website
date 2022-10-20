import {React, useEffect} from 'react'
import '../../styles/BlogPost.css'
import Img1 from '../../assets/myworkphotos/img1.jpg'

function BlogPost() {

  useEffect(() => {
    window.scrollTo(0, 0)
  })

  return (
    <div className='blogPostDiv'>
        <div className='blogPostImg'>
            <img className='blogImg' src={Img1} alt='Blog Post'/>
        </div>
      <div className='blogPostText'>
        <h2 className='blogPostTitle'>Fiery Morning Sky</h2>
        <div className='author'>
          <h3>Author: <span className='authorName'>Henry MAY</span></h3>
          <span className='postDate'>28 minutes ago</span>
        </div>
        <p className='blogPostDesc'>Consequat labore mollit aute labore dolor officia eiusmod mollit irure. Mollit eu eu irure esse occaecat ea sit nisi pariatur laborum est. 
        Anim amet laboris cillum in do adipisicing non do nulla adipisicing est do. Sunt magna mollit esse dolor voluptate magna sit esse ad cillum labore anim voluptate. 
        Veniam labore velit do ullamco velit sit officia culpa amet deserunt ea consequat adipisicing ea. Do cillum ut consectetur labore. Deserunt id quis cillum et sunt 
        commodo sunt commodo irure cillum aute. Tempor reprehenderit enim quis reprehenderit incididunt ex sunt tempor minim nostrud reprehenderit. Officia aute cupidatat 
        amet amet commodo deserunt culpa quis id ullamco pariatur cillum incididunt. Dolor duis cupidatat dolore dolore commodo reprehenderit anim aute 
        adipisicing laborum culpa ipsum do sunt. Sit enim eu nisi velit Lorem dolor et nisi proident aute eiusmod. Elit dolor officia sunt sint pariatur commodo 
        irure laboris est aliqua sunt nulla. Reprehenderit amet excepteur esse id veniam aliquip excepteur ad consequat. Dolor nisi pariatur ex pariatur qui mollit 
        amet qui ipsum Lorem eiusmod. velit do ullamco velit sit officia culpa amet deserunt ea consequat adipisicing ea. Do cillum ut consectetur labore. Deserunt id 
        quis cillum et sunt commodo sunt commodo irure cillum aute. Tempor reprehenderit enim quis reprehenderit incididunt ex sunt</p>
      </div>
  </div>
  )
}

export default BlogPost