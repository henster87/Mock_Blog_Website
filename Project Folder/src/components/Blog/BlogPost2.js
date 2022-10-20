import {React, useEffect} from 'react'
import '../../styles/BlogPost.css'
import Img1 from '../../assets/myworkphotos/img4.jpg'

function BlogPost2() {

  useEffect(() => {
    window.scrollTo(0, 0)
  })

  return (
    <div>
        <div className='blogPostImg'>
            <img className='blogImg' src={Img1} alt='Blog Post'/>
        </div>
      <div className='blogPostText'>
        <h2 className='blogPostTitle'>Ominous Sunset</h2>
        <div className='author'>
          <h3>Author: <span className='authorName'>Henry MAY</span></h3>
          <span className='postDate'>5 hours ago</span>
        </div>
        <p className='blogPostDesc'>Lorem culpa ut voluptate adipisicing mollit eu exercitation in incididunt do anim irure. 
        In magna amet duis veniam nulla velit laborum ipsum. Id pariatur amet culpa ut aliquip. Consectetur et voluptate est 
        pariatur fugiat anim laborum proident. Minim laborum eiusmod in sunt cillum ad officia occaecat laborum commodo labore id. 
        Esse amet irure in aliquip enim aliquip anim. Ipsum mollit aliqua nulla reprehenderit deserunt est non exercitation. 
        Nostrud dolore aute dolor ut. Sit ea consectetur pariatur occaecat sit incididunt veniam minim et in deserunt non ad. 
        Magna commodo minim adipisicing velit et pariatur consequat non quis aliqua sunt. Sint eu veniam non mollit do incididunt.
        Dolore commodo aliquip laborum eu proident aliquip culpa id. Laboris eiusmod aute laborum do laboris ipsum reprehenderit sint. 
        Voluptate amet quis deserunt ipsum. Commodo cupidatat ullamco qui pariatur in Lorem consectetur officia incididunt eiusmod occaecat 
        incididunt anim. Mollit consectetur non qui laborum cillum pariatur minim et exercitation cillum qui ipsum. Est nisi pariatur enim 
        sint deserunt voluptate ex exercitation irure. Minim eu veniam adipisicing occaecat ut in ex eiusmod eiusmod elit. Voluptate nulla laborum 
        anim pariatur dolore ea amet irure enim occaecat cupidatat mollit et. Culpa proident ullamco aute qui occaecat esse qui adipisicing sit fugiat 
        deserunt cupidatat. </p>
      </div>
  </div>
  )
}

export default BlogPost2