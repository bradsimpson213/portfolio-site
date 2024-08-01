import { Outlet, NavLink, Link } from 'react-router-dom'
import { FaLinkedin, FaGithub, FaEnvelope } from "react-icons/fa";
import "./Navbar.css"



export default function Navbar () {

    return (
        <>
   
            <div className='navbar-container'>
                <div className='navlink-container'>
                    <NavLink 
                        to='/'
                    >
                        About
                    </NavLink>
                    <NavLink 
                        to='/portfolio'
                    >
                        Portfolio
                    </NavLink>
                    <NavLink 
                        to='/instruction'
                    >
                        Instruction
                    </NavLink>
                </div>
                <div className='personal-links'>
                    <Link 
                    to='https://github.com/bradsimpson213'
                    className='icon-link'
                    >
                        <FaGithub />
                    </Link>
                    <Link 
                    to='https://www.linkedin.com/in/brad-simpson-a6b1b7b2'
                    className='icon-link'
                    >
                        <FaLinkedin />
                    </Link>
                    <Link 
                    to="mailto:bradsimpson@icloud.com"
                    className='icon-link'
                    >
                        <FaEnvelope />
                    </Link>

                </div>
            </div>
            <Outlet />
        </>
    )
}