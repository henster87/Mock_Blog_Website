import {React, useEffect} from 'react'
import {BrowserRouter, Routes, Route} from 'react-router-dom'


import './styles/App.css'
import './components/NavBar'

import NavBar from './components/NavBar'
import Home from './components/Home'
import MyWork from './components/MyWork'
import Blog from './components/Blog/Blog'
import AboutMe from './components/AboutMe'

import BlogPost from './components/Blog/BlogPost'
import BlogPost2 from './components/Blog/BlogPost2'
import BlogPost3 from './components/Blog/BlogPost3'
import BlogPost4 from './components/Blog/BlogPost4'
import BlogPost5 from './components/Blog/BlogPost5'
import BlogPost6 from './components/Blog/BlogPost6'

function App() {
  
  useEffect(() => {
    window.scrollTo(0, 0)
  })


  return(
    <BrowserRouter>
      <NavBar />
      <div>
        <Routes>
          <Route path='/' element={<Home/> }/>
          <Route path='/home' element={<Home/>}/>
          <Route path='/my-work' element={<MyWork/>}/>
          <Route path='/blog' element={<Blog/>}/>
          <Route path='/about-me' element={<AboutMe/>}/>
          <Route exact path='/blog/blog-post/fiery-morning-sky' element={<BlogPost/>} />
          <Route exact path='/blog/blog-post/ominous-sunset' element={<BlogPost2/>} />
          <Route exact path='/blog/blog-post/satrry-night-sky' element={<BlogPost3/>} />
          <Route exact path='/blog/blog-post/over-the-rainbow' element={<BlogPost4/>} />
          <Route exact path='/blog/blog-post/busy-as-a-bee' element={<BlogPost5/>} />
          <Route exact path='/blog/blog-post/nature-up-close' element={<BlogPost6/>} />
        </Routes>  
      </div>
    </BrowserRouter>
  );
}

export default App;
