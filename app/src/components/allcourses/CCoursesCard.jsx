import React from 'react'

import { coursesCard } from '../../dummydata'

import './course.css'

const CCoursesCard = () => {
    return (
<>
    <section className='CoursesCard'>
        <div className="container grid2">

            {coursesCard.map((val) => {
            return (

            <div className="items">

                <div className="content flex">

                    <div className="left">
                        <div className="img">
                            <img src={val.cover} alt="" />
                        </div>
                    </div>

                    <div className="text">

                        <h1> {val.coursesName} </h1>

                        <div className="rate">
                            <i className='fa fa-star'></i>
                            <i className='fa fa-star'></i>
                            <i className='fa fa-star'></i>
                            <i className='fa fa-star'></i>
                            <i className='fa fa-star'></i>

                            <label htmlFor="">(5.0)</label>
                        </div>

                        <div className="dateils">

                            {/* this beacuse we are fetch the nested API */}
                            {val.courTeacher.map((dateils) => (

                            <>
                            <div className="box">
                            
                                <div className="dimg">
                                    <img src={dateils.dcover} alt="" />
                                </div>
                            
                                <div className="para">
                                    <h4> {dateils.name} </h4>
                                </div>
                                
                            </div>

                            <span> {dateils.totalTime} </span>
                            </>

                            ))}

                        </div>

                    </div>

                </div>

                <div className="price">
                    <h3> {val.priceAll} / {val.pricePer} </h3>
                </div>

                <button className='outline-btn'> Enrol now ! </button>

            </div>
            )


            })}

        </div>
    </section>
</>
    )
}

export default CCoursesCard