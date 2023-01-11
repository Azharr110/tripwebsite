import React from 'react'
import './popular.scss'
import{BsArrowLeftShort, BsArrowRightShort, BsDot} from 'react-icons/bs'

import img1 from '../../Assets/image1.jpg'
import img4 from '../../Assets/image4.jpg'
import img5 from '../../Assets/image5.jpg'
import img7 from '../../Assets/image7.jpg'



const Data =[
  {
    id:1,
    imgSrc: img1,
    destTitle: 'Manali',
    location: 'India',
    grade: 'CULTURAL RELAX',
  },
  {
    id:2,
    imgSrc: img4,
    destTitle: 'Machu Picchu',
    location: 'Peru',
    grade: 'CULTURAL RELAX',
  },
  {
    id:3,
    imgSrc: img5,
    destTitle: 'Guanajauto',
    location: 'Mexico',
    grade: 'CULTURAL RELAX',
  },
  {
    id:4,
    imgSrc: img7,
    destTitle: 'Angkor Wat',
    location: 'Cambodia',
    grade: 'CULTURAL RELAX',
  },
]

const Popular = () => {
  return (
    <section className='popular section container'>
      <div className="secContainer">

        <div className="secHeader flex">
          <div className="textDiv">
            <h2 className="secTitle">
              Popular Destination
            </h2>
            <p>
              From historical cities to natural specteculars, come see the best of the world!
            </p>
          </div>
        
            <div className="iconsDiv flex">
                 <BsArrowLeftShort className="icon leftIcon"/> 
                 <BsArrowRightShort className="icon"/> 
            </div>

        </div>

        <div className="mainContent grid">
        {
          Data.map(({id,imgSrc,destTitle,location,grade})=>{
            return(
              <div className="singleDestination">
               <div className="destImage">

                 <img src={imgSrc} alt="Image Title" />

              <div className="overlayInfo">
                <h3>{destTitle}</h3>
                <p>{location}</p>

                <BsArrowRightShort className='icon'/>
              </div>

            </div>

            <div className="destFooter">
              <div className="number">
                0{id}
              </div>

              <div className="destText flex">
                 <h6>
                  {location}
                 </h6>
                 <span className='flex'>
                  <span className="dot">
                    <BsDot className="icon"/>
                  </span>
                  Dot
                 </span>
              </div>
            </div>
          </div>
              
            )
          })
        }

        </div>

      </div>
    </section>
  )
}

export default Popular