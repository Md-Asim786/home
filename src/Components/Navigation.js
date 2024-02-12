import './Styles/Navigation.css';
import { CgMenuRightAlt } from 'react-icons/cg'
import { MdOutlineBedtime } from 'react-icons/md'
import { MdOutlineLightMode } from 'react-icons/md'
import { ImCross } from 'react-icons/im'
import { Outlet, NavLink } from "react-router-dom"
import { useEffect, useState } from 'react';
const Navigation = () => {
  const [navbar, setNavbar] = useState(false);
  const [clicked, setClick] = useState(false);
  const [darkMode, setDarkMode] = useState(false);
  const [theme, setTheme] = useState("light-theme");
  const handleClick = () => {
    setClick(!clicked);
    setNavbar(!navbar);
  }
  const handleMode = () => {
    theme === "light-theme" ? setTheme("dark-theme") : setTheme("light-theme");
    setDarkMode(!darkMode);
  }
  useEffect(() => {
    document.body.className = theme;
  }, [theme])
  return (
    <>
      <div className="header">
        {/* <img className='logo' src='./Images/Logo1 (12).png' alt='Asim'></img> */}
        <h1 className='logoText'><span className='FirstLetter'>A</span>sim.</h1>
        <ul className={navbar ? "navbar mobile-menu" : "navbar"}>
          <li><NavLink to='/home' onClick={handleClick}>Home</NavLink></li>
          <li><NavLink to='about' onClick={handleClick}>About</NavLink></li>
          <li><NavLink to='skills' onClick={handleClick}>Skills</NavLink></li>
          <li><NavLink to='services' onClick={handleClick}>Services</NavLink></li>
          <li><NavLink to='portfolio' onClick={handleClick}>Portfolio</NavLink></li>
          <li><NavLink to='contact' onClick={handleClick}>Contact</NavLink></li>
          <div>
            <i className='pc-mode'>{!darkMode ? <MdOutlineBedtime className='ldMode pc-mode' onClick={handleMode} /> : <MdOutlineLightMode className='ldMode pc-mode' onClick={handleMode} />}</i>
            <button className='btn'>Hire me</button>
          </div>
        </ul>
        <div className='m-mode-toggle' id='m-mode'>
          {!clicked ? <CgMenuRightAlt className='toggle' onClick={handleClick} /> : <ImCross className='toggle' id='cross' onClick={handleClick} />}
          <i className='mobile-mode' id='m-mode'>{!darkMode ? <MdOutlineBedtime className='ldMode mobile-mode' onClick={handleMode} /> : <MdOutlineLightMode className='ldMode mobile-mode' onClick={handleMode} />}</i>
        </div>
      </div>
      <Outlet />
    </>
  )
}
export default Navigation