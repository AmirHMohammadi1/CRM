import React from 'react'
import './DashboardHeader.css'
import { FaCalendarAlt } from "react-icons/fa";

export default function DashboardHeader() {
    return (
        <div>
            <p className='DashboardHeader__name'>خوش امدی امین!</p>

            <div className='DashboardHeader'>
                <div className='dashboardHeader__right'>
                    <h1 className='dashboardHeader__right-title'>داشبورد</h1>
                </div>

                <div className='dashboardHeader__left'>
                    <span>2025.02.25</span>
                    <FaCalendarAlt />

                </div>
            </div>
        </div>
    )
}
