import {React, useEffect} from 'react'
import '../../styles/BlogPost.css'
import Img1 from '../../assets/myworkphotos/img14.jpeg'

function BlogPost4() {
  
  useEffect(() => {
    window.scrollTo(0, 0)
  })

  return (
    <div>
        <div className='blogPostImg'>
            <img className='blogImg' src={Img1} alt='Blog Post'/>
        </div>
      <div className='blogPostText'>
        <h2 className='blogPostTitle'>Over The Rainbow</h2>
        <div className='author'>
          <h3>Author: <span className='authorName'>Henry MAY</span></h3>
          <span className='postDate'>1 day ago</span>
        </div>
        <p className='blogPostDesc'>Consectetur nisi ut Lorem commodo cillum do non do sit aute sit cillum culpa commodo. Excepteur commodo aliqua eiusmod reprehenderit. 
        Commodo ut consectetur duis fugiat reprehenderit et minim elit veniam amet labore.Fugiat veniam deserunt aute deserunt amet non sit eiusmod ut aliqua. Amet quis 
        nulla velit ex non sit minim. Do duis nulla eiusmod ut nisi amet officia. Voluptate anim ex magna ipsum nulla officia nisi ipsum pariatur culpa et.Exercitation 
        qui ea tempor duis reprehenderit Lorem duis excepteur magna minim reprehenderit nisi. Enim exercitation nostrud eiusmod veniam sint fugiat consequat duis. 
        Eiusmod id mollit nisi tempor nulla ullamco in proident. Aute non occaecat qui anim veniam sint sint reprehenderit occaecat.Et adipisicing magna sint 
        cupidatat commodo consectetur. Labore do ad pariatur amet et sit anim exercitation incididunt reprehenderit. Ex duis pariatur proident fugiat nostrud. 
        Dolore est cupidatat esse sint duis enim ullamco commodo laborum velit. Nisi nostrud velit aute incididunt consectetur fugiat ea dolor est magna occaecat. 
        Id occaecat sit cillum aliqua ea irure duis reprehenderit Lorem. Non voluptate magna consequat ad eu ex ea eiusmod amet nulla tempor magna proident nostrud. 
        Ipsum magna deserunt ea aliquip occaecat labore exercitation aliquip minim commodo. Nostrud incididunt aliqua non do incididunt elit laborum. 
        Ipsum Lorem reprehenderit nulla ad in consequat.</p>
      </div>
  </div>
  )
}

export default BlogPost4