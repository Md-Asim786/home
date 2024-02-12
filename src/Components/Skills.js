import './Styles/Skills.css'
import { FaCode, FaServer } from 'react-icons/fa'
import { SlArrowDown } from 'react-icons/sl'
const Skills = () => {
  return (
    <div className='skills'>
      <h1><center>Skills</center></h1>
      <p><center>My technical level</center></p>
      <div className='skills-content'>
        <div className='skills-header'>
          <i><FaCode className='skills-icon' /></i>
          <div>
            <h1 className='skills-title'>Frontend Developer</h1>
            <span className='skills-subtitle'>More than 1 years</span>
          </div>
          <SlArrowDown className='skills-arrow'/>
        </div>

        <div className='skills-list grid'>
          <div className='skills-data'>
            <div className='skills-title'>
              <h3 className='skills-name'>HTML</h3>
              <span className='skills-number'>90%</span>
            </div>
            <div className='skills-bar'>
              <span className='skills-per skills-html'></span>
            </div>
          </div>
        </div>

        <div className='skills-list grid'>
          <div className='skills-data'>
            <div className='skills-title'>
              <h3 className='skills-name'>CSS</h3>
              <span className='skills-number'>80%</span>
            </div>
            <div className='skills-bar'>
              <span className='skills-per skills-css'></span>
            </div>
          </div>
        </div>

        <div className='skills-list grid'>
          <div className='skills-data'>
            <div className='skills-title'>
              <h3 className='skills-name'>JavaScript</h3>
              <span className='skills-number'>60%</span>
            </div>
            <div className='skills-bar'>
              <span className='skills-per skills-js'></span>
            </div>
          </div>
        </div>

        <div className='skills-list grid'>
          <div className='skills-data'>
            <div className='skills-title'>
              <h3 className='skills-name'>React</h3>
              <span className='skills-number'>60%</span>
            </div>
            <div className='skills-bar'>
              <span className='skills-per skills-react'></span>
            </div>
          </div>
        </div>
      </div>


      <div className='skills-content'>
        <div className='skills-header'>
          <FaServer className='skills-icon' />
          <div>
            <h1 className='skills-title'>Backend Developer</h1>
            <span className='skills-subtitle'>More than 1 years</span>
          </div>
          <SlArrowDown className='skills-arrow '/>
        </div>

        <div className='skills-list grid'>
          <div className='skills-data'>
            <div className='skills-title'>
              <h3 className='skills-name'>Node js</h3>
              <span className='skills-number'>60%</span>
            </div>
            <div className='skills-bar'>
              <span className='skills-per skills-node'></span>
            </div>
          </div>
        </div>

        <div className='skills-list grid'>
          <div className='skills-data'>
            <div className='skills-title'>
              <h3 className='skills-name'>Express js</h3>
              <span className='skills-number'>60%</span>
            </div>
            <div className='skills-bar'>
              <span className='skills-per skills-express'></span>
            </div>
          </div>
        </div>

        <div className='skills-list grid'>
          <div className='skills-data'>
            <div className='skills-title'>
              <h3 className='skills-name'>MongoDB</h3>
              <span className='skills-number'>90%</span>
            </div>
            <div className='skills-bar'>
              <span className='skills-per skills-mongodb'></span>
            </div>
          </div>
        </div>

        <div className='skills-list grid'>
          <div className='skills-data'>
            <div className='skills-title'>
              <h3 className='skills-name'>Python</h3>
              <span className='skills-number'>50%</span>
            </div>
            <div className='skills-bar'>
              <span className='skills-per skills-python'></span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
export default Skills