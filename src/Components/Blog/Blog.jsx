import React from 'react'
import './blog.scss'
import {BsArrowRightShort} from 'react-icons/bs'

import img3 from '../../Assets/image3.jpg'
import img10 from '../../Assets/image10.jpg'
import img12 from '../../Assets/image12.jpg'
import img16 from '../../Assets/image16.jpg'

const Posts =[
  {
    id:1,
    postImage: img3,
    title: 'Beautiful Morocco, let us travel!',
    desc: 'The Kingdom of Morocco is a Muslim country in western North Africa, with coastlines on the Atlantic Ocean and Mediterranean Sea'
  },
  {
    id:2,
    postImage: img10,
    title: 'Let us have an adventure outside Tunisia.',
    desc: 'The Kingdom of Morocco is a Muslim country in western North Africa, with coastlines on the Atlantic Ocean and Mediterranean Sea'
  },
  {
    id:3,
    postImage: img12,
    title: 'Beautiful Morocco, let us travel!',
    desc: 'The Kingdom of Morocco is a Muslim country in western North Africa, with coastlines on the Atlantic Ocean and Mediterranean Sea'
  },
  {
    id:4,
    postImage: img16,
    title: 'Best Country in east Africa',
    desc: 'The Kingdom of Morocco is a Muslim country in western North Africa, with coastlines on the Atlantic Ocean and Mediterranean Sea'
  },
]

const Blog = () => {
  return (
    <section className='blog container section'>

      <div className="secContainer">
        <div className="secIntro">
          <h2 className='secTitle'>
            Our Best Blog?
          </h2>
          <p>
            An insight to the incredible experience in the world.
          </p>
        </div>

        <div className="mainContainer grid">
           {
            Posts.map(({id, postImage,title,desc})=>{
              return (
                <div className="singlePost grid">
                <div className="imgDiv">
                  <img src={postImage} alt={title} />
                </div>

                <div className="postDetails">
                  <h3>
                    {title}
                  </h3>
                  <p>{desc}</p>
                </div>
                <a href="#" className="flex">

                  Read More
                  <BsArrowRightShort className="icon"/>
                </a>
           </div>
              )
            })
           }
        </div>
      </div>
    </section>
  )
}

export default Blog