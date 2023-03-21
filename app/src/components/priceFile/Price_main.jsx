import React from 'react'

import Back from "../common/back/Back"
import Price_Card from './Price_Card'
import Faq from './Faq'

import "./price.css"

// ===========================
const Price_main = () => {
    return (
    <>
    <Back title='Choose The Right Plan' />

    <section className='price padding'>
        <div className='container grid'>

            <Price_Card />

        </div>
    </section>

    <Faq />
    </>
    )
}

export default Price_main