import React from "react"
import { discover } from "../../../dummyData"
import Heading from "../../common/heading/Heading"
import "./style.css"

const Discover = () => {
  return (
    <>
      <section className='discover'>
        <div className='container'>
          <Heading title='Discover' />

          <div className=''>
          <div className="row w-100">
            {discover.map((val) => {
              return (
                <div className="col">
                <div className='box'>
                  <div className='img'>
                    <img src={val.cover} alt='' />
                  </div>
                  <h1 className='title'>{val.title}</h1>
                </div>
                </div>
              )
            })}
          </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Discover
