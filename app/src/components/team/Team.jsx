import React from 'react'

import Back from '../common/back/Back'
import Team_Card from './Team_Card'
import "./team.css"

const Team = () => {
    return (
<>
    <Back title="Team" />

    <section className='team padding'>
        <div className="container grid">

            <Team_Card />

        </div>
    </section>
</>
    )
}

export default Team