import React from "react"
import "./music.css"
import Slider from "react-slick"
import Heading from "../../../common/heading/Heading"
import { popular } from "../../../../dummyData"
import "../Ppost/ppost.css"

const Music = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 800,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
    ],
  }
  return (
    <>
      <section className='popularPost life'>
        <Heading title='Life Style' />
        <div className='content'>
          <Slider {...settings}>
            {popular
              .filter((val) => val.catgeory === "fun")
              .map((val) => {
                return (
                  <div className='items'>
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
                )
              })}
          </Slider>
        </div>
      </section>
    </>
  )
}

export default Music
