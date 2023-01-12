import React from 'react'
import './about.scss'

import img1 from '../../Assets/mountain.png'
import img2 from '../../Assets/climbing.png'
import img3 from '../../Assets/customer.png'


const About = () => {
  return (
    <section className='about section'>
      <div className="secContainer">
        <div className="title">
           Why Hikings?
        </div>

        <div className="mainContent container grid">
           <div className="singleItem">
            <img src={img1} alt="Image Name" />
              <h3>100+ Mountains</h3>
              <p>
                Research shows that a chance to break away from the normal rhythms of daily life reduces stress and improves health and well-being.
              </p>
           </div>

           <div className="singleItem">
            <img src={img2} alt="Image Name" />
              <h3>1000+ Hikings</h3>
              <p>
                Research shows that a chance to break away from the normal rhythms of daily life reduces stress and improves health and well-being.
              </p>
           </div>

           <div className="singleItem">
            <img src={img3} alt="Image Name" />
              <h3>2000+ Customer</h3>
              <p>
                Research shows that a chance to break away from the normal rhythms of daily life reduces stress and improves health and well-being.
              </p>
           </div>
        </div>
      </div>
    </section>
  )
}

export default About