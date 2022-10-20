import { React, useRef, useEffect } from 'react';
import emailjs from '@emailjs/browser';
import '../styles/AboutMe.css'

import Pfp from '../assets/pfp.jpg'



function AboutMe() {
 
  useEffect(() => {
    window.scrollTo(0, 0)
  })
  
  const form = useRef();

  const sendEmail = (email) => {
    email.preventDefault(); /*This prevents the page from refreshing */

    emailjs
    .sendForm('service_w4rj2i2', 'template_oinaets', /* Send the service ID, Template ID from the website to emailJS */
    form.current, 'VDMXYA4kRMOoA7upe') /* This sends the form with the ref="form" along with the User ID thanks to the useRef hook */
    .then((result) => {
          console.log(result.text); /* Log that the email sent */
          console.log("Message Sent Successfully")
          email.target.reset(); /* Reset the form after it is sent */
      }, (error) => {
          console.log(error.text); /* Log and error message if the email didn't send */
      });
  };

  return (

    <section className='aboutMePage'>
      <img src={Pfp} alt='Me' className='myPhoto'/>
        <div className='title'>
            <h2>ABOUT ME</h2>
        </div>
        <div className='textSection'>
          <div className='info'>
            <h3 className='name'>HENRY<br/> MAY</h3>
            <h4 className='age'>22 years old</h4>
          </div>
          <div className='aboutMeText'>
            <p className='intro'>Hi there! My name is <strong>Henry</strong>.</p>
            <p >I am a 22-year-old Irish male who was born in the UK and has lived in France for the past 19 years. I am <strong>bilingual</strong> and fluent in both <strong>French and English.</strong> <br/> 
            I am passionate about technology! I find it wonderfully interesting. For as long as I can remember, I have wanted to work with the technologies that we use 
            in our daily lives such as apps, websites, games, 3D models, videos, photos and such.</p>

            <p> I remember being an early teenager and loving games. I was curious about how they were made so I looked online and found tutorials which led me to play around 
            with a game engine called <em>Unity3D</em>. I used <strong>C# and JavaScript</strong> to try and make games and I used <em>Blender</em> to model 3D objects. <br/>
            This was my first exposure to programming and I loved it. Since then, I have tried learning different languages such as <strong>Python</strong>. I have created a few console projects, 
            including a small TicTacToe game, a miniature version of a game called Wordle, and others.</p> 

            <p> I also enjoy taking photos because I think it is a way to artfully capture and preserve special moments in time. I have always been interested in exploring photography, 
            specifically landscape, and macro photography because I love documenting the splendour of the natural world in all of its beauty!</p> 

            <p> I would describe myself as a compassionate person who cares for others, and, as aforementioned, someone who is very curious and keen on learning more and more each day. <br/>
            <strong>My aspiration is to become a Developer in the tech industry</strong>, and I am very enthusiastic about achieving this personal goal of mine and making it a reality.
            </p>
          </div>
        </div>


        <div className='title'>
            <h2>CONTACT ME</h2>
        </div>


        {/* useRef form */}
        <form ref={form} onSubmit={sendEmail}> 
            <div className='formDiv'>
              <label>Name:</label>
              <input required placeholder=' Name' type="text" name="user_name"/>
            </div>

            <div className='formDiv'>
              <label>Email:</label>
              <input required placeholder=' example@gmail.com' type="email" name="user_email" /> {/* the user_name and user_email have to be the same as the template on the website*/}
              </div>

            <div className='userMessage formDiv'>
              <label >Message:</label>
              <textarea required placeholder=' Write Message Here' name="message" /> {/*The message has to be the same as on the template*/}
            </div>
              <button className='sendButton'><input type="submit" value="Send" /></button>
        </form>
        
    </section>
  )
}

export default AboutMe