import React from 'react'
import { FaClock } from "react-icons/fa6";
import './Event.css'

export default function Event(props) {
  return (
    <div className='event' style={{borderRightColor: `${props.color}`}}>
        <p className='event__title'>{props.title}</p>
        <div className='event__time d-flex justify-content-between'>
            <div className='event__time--clock'>امروز | ساعت <span>{props.time}</span></div>
            <div className='event__time--logo '>
                <div><FaClock/></div>
                <span>4h</span>
            </div>
        </div>
    </div>
  )
}