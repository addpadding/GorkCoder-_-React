import React from 'react'

import Title from '../common/title/Title'

import Price_Card from '../priceFile/Price_Card'

const H_price = () => {
    return (
<>
    <section className='hprice padding'>

        <Title subtitle='OUR PRICING' title='Pricing & Packages' />

        <div className='price container grid'>
            <Price_Card />
        </div>

    </section>
</>
    )
}

export default H_price