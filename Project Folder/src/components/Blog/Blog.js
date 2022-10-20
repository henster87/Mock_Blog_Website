import {React, useEffect} from 'react'
import { NavLink } from 'react-router-dom'
import '../../styles/Blog.css'

import { Post } from '../Post'

import Image1 from '../../assets/myworkphotos/img1.jpg'
import Image2 from '../../assets/myworkphotos/img4.jpg'
import Image3 from '../../assets/myworkphotos/img13.png'
import Image4 from '../../assets/myworkphotos/img14.jpeg'
import Image5 from '../../assets/myworkphotos/img17.jpg'
import Image6 from '../../assets/myworkphotos/img19.jpg'

function Blog()  {

  useEffect(() => {
    window.scrollTo(0, 0)
  })

  return (
    <section>
      <div className='posts'>
          <NavLink to='/blog/blog-post/fiery-morning-sky' className='blogLink'>
            <Post postImg={Image1}
                  postAlt='A Red Cloudy Morning Sky'
                  postText1='Consectetur est anim quis do elit velit nisi sint laborum quis.'
                  postText2='Ipsum et eiusmod sit et pariatur cillum dolore laborum.' 
                  postTitle='Fiery Morning Sky'
                  postDate='28 minutes ago'
                  postDesc='Consequat labore mollit aute labore dolor officia eiusmod mollit irure. Mollit eu eu irure esse occaecat ea sit nisi pariatur laborum est. 
                  Anim amet laboris cillum in do adipisicing non do nulla adipisicing est do. Sunt magna mollit esse dolor voluptate magna sit esse ad cillum labore anim voluptate.'
                  />
          </NavLink>

          <NavLink to='/blog/blog-post/ominous-sunset' className='blogLink'>
            <Post postImg={Image2}
                  postAlt='A Cloudy Sunset Over a Lake'
                  postText1='Eiusmod proident eu enim in culpa nisi sit commodo minim excepteur commodo id.'
                  postText2='Exercitation qui id eu elit ullamco enim nostrud laborum eiusmod quis occaecat.' 
                  postTitle='Ominous Sunset'
                  postDate='5 hours ago'
                  postDesc='Lorem culpa ut voluptate adipisicing mollit eu exercitation in incididunt do anim irure. 
                  In magna amet duis veniam nulla velit laborum ipsum. Id pariatur amet culpa ut aliquip. Consectetur et voluptate est pariatur fugiat anim laborum proident.'
                />
          </NavLink>

          <NavLink to='/blog/blog-post/satrry-night-sky' className='blogLink'>
            <Post postImg={Image3}
                  postAlt='A Nigh Sky Full of Stars'
                  postText1='Nostrud incididunt laborum ullamco magna ipsum sit ea.'
                  postText2='Occaecat ullamco incididunt et ad culpa pariatur culpa.' 
                  postTitle='Starry Night Sky'
                  postDate='19 hours ago'
                  postDesc='Dolor labore occaecat enim nulla duis adipisicing laborum. Minim est tempor consectetur ut aliquip non dolore id fugiat tempor. 
                  Sint dolore aute culpa elit culpa adipisicing quis velit dolor deserunt velit labore eiusmod est. Quis aliqua ullamco sunt qui cillum cupidatat nostrud adipisicing. 
                  Dolore dolor veniam officia ad id ad ut enim ea excepteur. Lorem occaecat magna exercitation occaecat pariatur do voluptate anim proident sint.'
                />
          </NavLink>

          <NavLink to='/blog/blog-post/over-the-rainbow' className='blogLink'>
            <Post postImg={Image4}
                  postAlt='A Rainbow On a Pink Evening'
                  postText1='Excepteur cupidatat labore id id veniam in eu officia commodo ea minim nulla quis.'
                  postText2='Labore non consectetur tempor exercitation tempor irure consectetur laboris anim.' 
                  postTitle='Over The Rainbow'
                  postDate='1 day ago'
                  postDesc='Consectetur nisi ut Lorem commodo cillum do non do sit aute sit cillum culpa commodo. Excepteur commodo aliqua eiusmod reprehenderit. 
                  Commodo ut consectetur duis fugiat reprehenderit et minim elit veniam amet labore.Fugiat veniam deserunt aute deserunt amet non sit eiusmod ut aliqua. Amet quis 
                  nulla velit ex non sit minim.'
                />
          </NavLink>

          <NavLink to='/blog/blog-post/busy-as-a-bee' className='blogLink'>
            <Post postImg={Image5}
                  postAlt='A Bee Inside of a Flower'
                  postText1='Quis consequat aliquip irure eu commodo laboris ea duis in.'
                  postText2='In pariatur laboris adipisicing deserunt ullamco qui aute.' 
                  postTitle='Busy as a Bee'
                  postDate='1 day ago'
                  postDesc='Excepteur ut ipsum mollit ex laboris aliquip amet nisi pariatur magna qui ex esse. Ex laboris sit nisi eu amet ullamco qui 
                  tempor do exercitation do. Anim est consequat nisi fugiat id deserunt aliquip id magna incididunt incididunt. Consequat labore culpa laboris adipisicing velit. 
                  Consectetur enim aliqua anim in ea nisi.'
                />
          </NavLink>

          <NavLink to='/blog/blog-post/nature-up-close' className='blogLink'>
            <Post postImg={Image6}
                  postAlt='A Macro Shot of a Flower'
                  postText1='Pariatur exercitation enim excepteur reprehenderit aliquip sunt ipsum ea.'
                  postText2='Et aute et esse dolore eiusmod voluptate est adipisicing aliquip officia aliqua aliqua.' 
                  postTitle='Nature Up Close'
                  postDate='2 days ago'
                  postDesc='Culpa sunt aute proident esse aliquip labore voluptate duis. Laboris labore mollit officia consequat culpa reprehenderit officia 
                  Lorem ad Lorem deserunt. Duis officia exercitation est irure laboris tempor officia deserunt esse enim commodo pariatur dolore cillum. Tempor sit amet nisi 
                  tempor mollit exercitation velit consectetur commodo sunt anim fugiat dolor.'
                />
          </NavLink>
      </div>
    </section>
  )
}

export default Blog