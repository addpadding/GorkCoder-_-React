import React from 'react'

import Blog_Card from './Blog_Card'
import Back from "../common/back/Back"


const Blog_main = () => {
    return (
    <>

    <Back title='Blog Posts' />

    <section className='blog padding'>
        <div className='container grid2'>

            <Blog_Card />
            
        </div>
    </section>

    </>
    )
}

export default Blog_main