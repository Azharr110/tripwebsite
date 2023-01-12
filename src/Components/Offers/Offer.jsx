import React from 'react'
import './offer.scss'
import {MdKingBed, MdBathtub, MdAirportShuttle, MdLocationOn} from 'react-icons/md'
import {FaWifi} from 'react-icons/fa'
import {BsArrowRightShort} from 'react-icons/bs'

import img6 from '../../Assets/image6.jpg'
import img8 from '../../Assets/image8.jpg'
import img9 from '../../Assets/image9.jpg'
import img15 from '../../Assets/image15.jpg'


const Offers =[
  {
    id:1,
    imgSrc: img6,
    destTitle: 'Manali',
    location: 'India',
    price: '$4,400',
  },
  {
    id:2,
    imgSrc: img8,
    destTitle: 'Machu Picchu',
    location: 'Peru',
    price: '$6,400',
  },
  {
    id:3,
    imgSrc: img9,
    destTitle: 'Guanajauto',
    location: 'Mexico',
    price: '$7,400',
  },
  {
    id:4,
    imgSrc: img15,
    destTitle: 'Angkor Wat',
    location: 'Cambodia',
    price: '$5,400',
  },
]


const Offer = () => {
  return (
    <section className='offer container section'>
      <div className="secContainer">
        <div className="secIntro">
          <h2 className="secTitle">
            Special Offers
          </h2>
          <p>
            From historical cities to natural specteculars, come see the best of the world!
          </p>
        </div>

        <div className="mainContent grid">
           {
            Offers.map(({id, imgSrc,destTitle, location, price })=>{
              return(
                <div className="singleOffer">
              <div className="destImage">
                <img src={ imgSrc } alt={destTitle} />

                <span className="discount">
                  30% Off
                </span>
              </div>

              <div className="offerBody">
                <div className="price flex">
                  <h4>
                    {price}
                  </h4>
                   <span className="status">
                    For Rent
                   </span>
                </div>

                <div className="amenities flex">
                    <div className="singleAmenity flex">
                        <MdKingBed className="icon"/>
                        <small>2 Beds</small>
                    </div>
                    <div className="singleAmenity flex">
                        <MdBathtub className="icon"/>
                        <small>1 Bath</small>
                    </div>
                    <div className="singleAmenity flex">
                        <FaWifi className="icon"/>
                        <small>Wi-fi</small>
                    </div>
                    <div className="singleAmenity flex">
                        <MdAirportShuttle className="icon"/>
                        <small>Shuttle</small>
                    </div>
                </div>

                <div className="location flex">
                   <MdLocationOn className="icon"/>
                   <small>Sector-1  #310, {location}</small>
                </div>
                <button className='btn flex'>
                  View Details
                  <BsArrowRightShort className="icon"/>
                </button>
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

export default Offer