import React from 'react'
import { IoIosArrowBack } from 'react-icons/io'
import { Link } from 'react-router-dom'
import './ViewAllBtn.css'

export default function ViewAllBtn() {
    return (
        <>
            <Link to='/' className='workload__header-link'>دیدن همه <IoIosArrowBack /></Link>
        </>
    )
}
