import {React, useEffect} from 'react'
import '../../styles/BlogPost.css'
import Img1 from '../../assets/myworkphotos/img19.jpg'

function BlogPost6() {
    
  useEffect(() => {
    window.scrollTo(0, 0)
  })

  return (
    <div>
        <div className='blogPostImg'>
            <img className='blogImg' src={Img1} alt='Blog Post'/>
        </div>
      <div className='blogPostText'>
        <h2 className='blogPostTitle'>Nature Up Close</h2>
        <div className='author'>
          <h3>Author: <span className='authorName'>Henry MAY</span></h3>
          <span className='postDate'>2 days ago</span>
        </div>
        <p className='blogPostDesc'>Culpa sunt aute proident esse aliquip labore voluptate duis. Laboris labore mollit officia consequat culpa reprehenderit officia 
        Lorem ad Lorem deserunt. Duis officia exercitation est irure laboris tempor officia deserunt esse enim commodo pariatur dolore cillum. Tempor sit amet nisi 
        tempor mollit exercitation velit consectetur commodo sunt anim fugiat dolor. Culpa ad esse ipsum eu cillum in. Tempor elit labore sit enim labore id cupidatat 
        magna non. Duis nostrud incididunt officia veniam enim cupidatat occaecat eu ullamco qui.Ea minim irure fugiat nulla voluptate. Dolor adipisicing id velit 
        pariatur qui est nostrud ullamco cupidatat ipsum amet eu. Officia Lorem ex dolor do officia occaecat ut Lorem sit est non.Quis voluptate amet et proident 
        eiusmod elit duis laboris. Officia et excepteur magna duis. Dolore quis tempor ut et nostrud proident. Anim ullamco reprehenderit est cupidatat aliquip pariatur
         irure excepteur enim cupidatat. Dolor sit incididunt ad minim nisi nulla dolor. Amet enim cupidatat sit veniam ipsum quis.Eiusmod id ad nostrud pariatur 
         aliquip magna ea excepteur Lorem dolore pariatur aliquip excepteur reprehenderit. Adipisicing nisi laboris magna mollit proident proident esse eu qui 
         eiusmod laboris ut. Reprehenderit irure do aliquip laborum ex. Mollit esse officia aliqua amet exercitation occaecat voluptate ex dolor aliquip qui. 
         Cupidatat proident irure sunt consectetur et duis sunt. Sint ullamco aliqua do minim incididunt eu.</p>
      </div>
  </div>
  )
}

export default BlogPost6