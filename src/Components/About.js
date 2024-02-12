import './Styles/About.css'
import IMG from '../Images/about.jpeg'
const About = () => {
  return (
    <div className="about">
      <h1><center>About Me</center></h1>
      <p><center>My introduction</center></p>
      <div className='main-div'>
        <div className='side-image'><img alt='404' src={IMG}></img></div>
        <div className='side-div'>
          <div className='about-content'><p>Web developer, with extensive Knowledge and years of experience, working in web technologies and UI / UX design, delivering quality of work.</p></div>
          <div className='ex-div'>
            <div className='box'>
              <h1>06+</h1>
              <p>Months</p>
              <p>experience</p>
            </div>
            <div className='box'>
              <h1>10+</h1>
              <p>Completed</p>
              <p>project</p>
            </div>
            <div className='box'>
              <h1>00+</h1>
              <p>Companies</p>
              <p>worked</p>
            </div>
          </div>
          <button className='btn'>Download Cv</button>
        </div>
      </div>
    </div>
  )
}
export default About




