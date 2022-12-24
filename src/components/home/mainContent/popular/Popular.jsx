import React from "react"
import "./Popular.css"

import Slider from "react-slick"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import { popular } from "../../../../dummyData"
import Heading from "../../../common/heading/Heading"

const Popular = () => {

  return (
    <>
      <section className='popular'>
        <Heading title='Popular' />
        <div className='content'>
        <div className="row w-100">
            {popular.map((val) => {
              return (
                  <div className="col-md-4 ps-0 pe-0 ">
                  <div className='items w-100'>
                  <div className='box'>
                  <div className='date'>
                      <i class="fa-regular fa-clock"></i>                        
                      <label>{val.date}</label>
                      </div>
                    <div className='images'>
                      <div className='img'>
                        <img src={val.cover} alt='' />
                        <i class="fa-regular fa-circle-right"></i>
                      </div>
                      <div class='category category1'>
                        <span>{val.catgeory}</span>
                      </div>
                    </div>
                    <div className='text'>
                      <h1 className='title'>{val.title.slice(0, 40)}...</h1>

                    </div>
                  </div>
                </div>
                  </div>
              )
            })}
        </div>
        </div>

      </section>
    </>
  )
}

export default Popular
