import {React, useEffect} from 'react'
import '../styles/Home.css'

function Home() {
    
  useEffect(() => {
    window.scrollTo(0, 0)
  })

  return (
    <section className='homePage'>
      <figure>
        {/*Standard iframe avaible by Youtube in the 'share' options*/}
        <iframe className='youtubeVideo' src="https://www.youtube-nocookie.com/embed/lOox4UJVFb4" 
        title="YouTube video player"  
        allow="encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen/>
      </figure>
      <div className='homeTitleContainer'>
        <h2>Welcome  Home</h2>
      </div>
      <div className='homeTextDiv'>
        <p className='homeFirstText'><strong className='welcome'>Welcome to the home page!</strong> This is the homepage for my personal project for OpenClassroon.</p>
        <p>
        I completed this project in about a week and it challenged me mentally. I used <em>REACT, JavaScript, HTML, and CSS</em> to create what you see. 
        This has been my first ever project that involved coding with a UI. </p>
        <hr/>
        <p>
        Prior to starting this project, I knew next to nothing about React and only had very limited knowledge of JavaScript and CSS. However, thanks 
        to OpenClassroom, YouTube, and StackOverflow, I was able to learn enough to complete the project. These same resources also helped me to develop a stronger 
        understanding of these programming languages. 
        </p>
        <hr/>
        <p>
        I made this project in the hopes of securing an apprenticeship as a <strong className='jobTitle'>JavaScript React Developer</strong>, which is something 
        I find both interesting and motivating. I am hopeful that this project meets the requirements for my candidacy to be accepted. I did my best to make 
        the web app as responsive as possible with the knowledge that I currently have; however, there are certain <em>bugs</em> that I wasn't able to fix as 
        much as I would have liked. Nevertheless, I am committed to continually develop my skills and experience to avoid such <em>bugs</em> in the future.
        </p>
        <hr/>
        <p>
        <strong>About this project:</strong> <br/> I opted to make a blog-style project with a focus on images/photos because, in addition to coding, I enjoy 
        taking pictures in my spare time. Also, because I don't have a strong programming portfolio at the moment, I decided to base it on what I had, i.e. my photos. 
        In the future, when I've completed a few more programming projects, I plan on making a similar website that showcases my coding projects instead of my photos.
        </p>
      </div>
    </section>
  )
}

export default Home