import React from 'react'
import './WorkloadUser.css'
export default function WorkloadUser(props) {
  return (
    <div className='workloadUser col-3'>
        <img className='workloadUser__img' src="/img/photo.png" alt="" />
        <span className='WorkloadUser__name'>{props.name}</span>
        <span className='WorkloadUser__skill'>{props.skill}</span>
        <div className='WorkloadUser__level'><p className='WorkloadUser__level-p'>{props.level}</p></div>
    </div>
  )
}
