import React from 'react'

import { testimonal } from '../../../dummydata'

import Title from '../../common/title/Title'

const Testimonal_ = () => {
    return (
<>
    <section className="testimonal padding">
        <div className="container">

            <Title subtitle='TESTIMONIAL' title='Our Successful Students' />

            <div className="content grid2">
                {testimonal.map((val) => (

                <div className="items">
                    t
                </div>

                ))}
            </div>

        </div>
    </section>
</>
    )
}

export default Testimonal_