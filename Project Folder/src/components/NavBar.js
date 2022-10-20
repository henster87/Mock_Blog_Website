import {React, useState } from 'react'
import { NavLink } from 'react-router-dom'
import "../styles/NavBar.css"

import {FaBars, FaTimes} from 'react-icons/fa'
import { DiReact } from 'react-icons/di'

function NavBar() {
    
    /* isOpen will determine wether or not the navbar will be open or closed*/
    const [isOpen, setNavBarOpen] = useState(false)

  return (
        <div className='headerDiv'>
        <header>
            <div className='logo' onClick={() => setNavBarOpen(false)}><NavLink to="/home"> <DiReact/> </NavLink></div> {/* after clicking an icon or link, close the navbar */}
                <nav className={isOpen ? "responsiveNavBar" : ''}>
                    <NavLink to="/home" onClick={() => setNavBarOpen(false)} className={({isActive}) => isActive ? 'active': ''}>Home</NavLink> {/*if the current page is the active link, highlight it*/}
                    <NavLink to="/my-work" onClick={() => setNavBarOpen(false)} className={({isActive}) => isActive ? 'active': ''}>My Work</NavLink>
                    <NavLink to="/blog" onClick={() => setNavBarOpen(false)} className={({isActive}) => isActive ? 'active': ''}>Blog</NavLink>
                    <NavLink to="/about-me" onClick={() => setNavBarOpen(false)} className={({isActive}) => isActive ? 'active': ''}>About Me</NavLink>
                    <button  className="navBarBtn navBarCloseBtn" 
                             onClick={() => setNavBarOpen(previousState => !previousState)}> {/* Close the navbar */}   
                        <FaTimes/>
                    </button>
                </nav>

            <button className="navBarBtn navBarOpenBtn" onClick={() => setNavBarOpen(previousState => !previousState)}> {/* Open the navbar */} 
                <FaBars/>
            </button>
        </header>
        </div>

  )
}

export default NavBar