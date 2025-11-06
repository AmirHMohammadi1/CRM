import React from 'react'

import { Link } from 'react-router-dom'
import Event from '../Event/Event'
import ViewAllBtn from '../ViewAllBtn/ViewAllBtn'

import './NearestEvents.css'


export default function NearestEvents() {
    const events = [
        { id: 1, title: 'معرفی دپارتمان', time: 5, color: '#3F8CFF' },
        { id: 2, title: 'تولد انا', time: 6, color: '#DE92EB' },
        { id: 3, title: 'بازدید', time: 17, color: '#DE92EB'},
        { id: 4, title: 'فوتبال', time: 22, color: '#DE92EB' },
        { id: 4, title: 'فوتبال', time: 22, color: '#DE92EB' },
    ]
    return (
        <div className='nearestEvents col-6'>

            <div className='nearestEvents__header d-flex justify-content-between align-items-center'>
                <div className='nearestEvents__header--title'>
                    <h3>رویداد های نزدیک</h3>
                </div>
                <div className='nearestEvents__header--viewall'>
                    <ViewAllBtn/>
                </div>
            </div>


            <div className='nearestEvents__event'>
                
                {events.map(even => (

                    <Event
                        key={even.id}
                        title={even.title}
                        time={even.time}
                        color={even.color} />
                        
                )
                )}
                
            </div>

        </div>
    )
}
