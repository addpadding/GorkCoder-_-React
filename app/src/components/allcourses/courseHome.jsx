import React from 'react'

import Back from '../common/back/Back'
import CCoursesCard from './CCoursesCard'
import Oline_Course from './Oline_Course'


const courseHome = () => {
    return (
        <>
            <Back title="Explore Courses" />

            <CCoursesCard />
            <Oline_Course />
        </>
    )
}

export default courseHome