import {React, useEffect} from 'react'
import '../../styles/BlogPost.css'
import Img1 from '../../assets/myworkphotos/img13.png'

function BlogPost3() {

  useEffect(() => {
    window.scrollTo(0, 0)
  })

  return (
    <div>
        <div className='blogPostImg'>
            <img className='blogImg' src={Img1} alt='Blog Post'/>
        </div>
      <div className='blogPostText'>
        <h2 className='blogPostTitle'>Starry Night Sky</h2>
        <div className='author'>
          <h3>Author: <span className='authorName'>Henry MAY</span></h3>
          <span className='postDate'>19 hours ago</span>
        </div>
        <p className='blogPostDesc'>Dolor labore occaecat enim nulla duis adipisicing laborum. Minim est tempor consectetur ut aliquip non dolore id fugiat tempor. 
        Sint dolore aute culpa elit culpa adipisicing quis velit dolor deserunt velit labore eiusmod est. Quis aliqua ullamco sunt qui cillum cupidatat nostrud adipisicing. 
        Dolore dolor veniam officia ad id ad ut enim ea excepteur. Lorem occaecat magna exercitation occaecat pariatur do voluptate anim proident sint.
        Irure elit consectetur labore amet elit proident non cupidatat adipisicing. Elit voluptate excepteur aliquip sint dolore eu labore sunt cillum et. Cillum amet 
        incididunt non esse voluptate nisi id minim officia mollit voluptate. Officia ullamco qui Lorem in excepteur id sint veniam incididunt fugiat laborum nisi. 
        Aliqua nisi consectetur sit officia occaecat. Nulla voluptate deserunt ad amet cupidatat excepteur dolore ad incididunt qui tempor elit esse. Aliqua mollit 
        pariatur laborum enim laborum ullamco deserunt et elit. Aliquip quis eu voluptate et sunt. Ullamco velit voluptate incididunt nulla proident quis ea et sint 
        veniam quis aute est eiusmod. Laboris adipisicing magna reprehenderit qui. Ea excepteur eiusmod pariatur in commodo id adipisicing ad elit mollit 
        excepteur ad cupidatat do. Irure sint ad duis irure adipisicing magna magna minim nostrud ad labore culpa ex. Magna aliquip Lorem id enim sunt non 
        cillum culpa quis aute dolore amet sunt. Aliquip laboris ipsum laborum et nisi deserunt laboris commodo aute et Lorem excepteur laboris.</p>
      </div>
  </div>
  )
}

export default BlogPost3