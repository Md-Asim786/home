import './Styles/Home.css'
import { RiFacebookLine } from 'react-icons/ri'
import { RiInstagramLine } from 'react-icons/ri'
import { RiTwitterLine } from 'react-icons/ri'
import { RiLinkedinLine } from 'react-icons/ri'
// import {SlArrowDown} from 'react-icons/sl'
import { Link } from 'react-router-dom'
import { useTypewriter, Cursor } from 'react-simple-typewriter'
// import IMG from '../Images/about.jpeg'

const Home = () => {
  const [Text] = useTypewriter({
    words: ['Software Developer', 'Web Developer', 'MERN Stack Developer', 'Photo Editor'],
    loop: {},
    typeSpeed: 50,
    deleteSpeed: 30,
    delaySpeed: 1000
  })
  return (
    <>
      <div className='home'>
        <div className='home-container'>
          <div className='content'>
            <h1>Hi! I'm Muhammad Asim</h1>
            <div className='change-text'>
              <h2>And I'm{' '} <span className='word'>{Text}<Cursor /></span></h2>
            </div>
            <p>Product Designer and Digital Creative Director working in
            Design field for 10 years so for specilized in UI/UX, Branding and
            Digital Design.</p>
            <h4>Email:</h4>
            <p>mdasim2004@gmail.com</p>
          </div>
          <div className='social-icons mobile-social-icons'>
            <Link><i><RiFacebookLine /></i></Link>
            <Link><i><RiInstagramLine /></i></Link>
            <Link><i><RiTwitterLine /></i></Link>
            <Link><i><RiLinkedinLine /></i></Link>
          </div>
          <button className='btn'>Download Cv</button>
        </div>
        <div className='side-image'></div>
      </div>
      {/* <center><i><SlArrowDown className='down-arrow'/></i></center> */}
    </>
  )
}
export default Home