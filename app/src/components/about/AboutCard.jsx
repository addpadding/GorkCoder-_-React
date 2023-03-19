import React from 'react'

import { homeAbout } from '../../dummydata'

import Title from '../common/title/Title'
import AWrabber from './AWrabber'
import "./about.css"

const AboutCard = () => {
    return (
    <>
    <section className='aboutHome'>
        <div className="container flexSB">

            <div className="left row">
                <img src="./images/about.webp" alt="" />
            </div>

            <div className="right row">
                
                <Title subtitle="lern anything" title="Benefits About Online Lerning Expertise" />
                
                <div className="items">
                    {homeAbout.map((val) => (

                    <div className="item flexSB">

                        <div className="img">
                            <img src={val.cover} alt="" />
                        </div>

                        <div className="text">
                            <h2> {val.title} </h2>
                            <p> {val.desc} </p>
                        </div>

                    </div>

                    ))}
                </div>

            </div>

        </div>
    </section>

    <AWrabber />

    </>
    )
}

export default AboutCard