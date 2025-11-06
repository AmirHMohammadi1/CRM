import React from 'react'
import { Link } from 'react-router-dom'
import { RxDashboard } from "react-icons/rx";
import { IoLayers } from "react-icons/io5";
import { FaRegCalendar } from "react-icons/fa6";
import { MdOutlineLocalAirport } from "react-icons/md";
import { IoIosContacts } from "react-icons/io";
import { LuMessagesSquare } from "react-icons/lu";
import { FaRegFolderOpen } from "react-icons/fa6";
import { RxExit } from "react-icons/rx";



import './Sidebar.css'



export default function Sidebar() {
  return (
    <div className=' sidebar-container '>
      <div className='sidebar-top'>


        <div className='sidebar-top__logo'></div>


        <div className='sidebar-top__menu d-flex flex-column'>

          <div className='sidebar-top__menu__item d-flex align-items-center'>
            <RxDashboard className='menu-item-logo m-1' />
            <Link to='/'>داشبورد</Link>
          </div>

          <div className='sidebar-top__menu__item d-flex align-items-center'>
            <IoLayers className='menu-item-logo m-1' />
            <Link to='/projects'>پروژه</Link>
          </div>

          <div className='sidebar-top__menu__item d-flex align-items-center'>
            <FaRegCalendar className='menu-item-logo m-1' />
            <Link to='/calendar'>تقویم</Link>
          </div>

          <div className='sidebar-top__menu__item d-flex align-items-center'>
            <MdOutlineLocalAirport className='menu-item-logo m-1' />
            <Link to='/vacations'>تعطیلات</Link>
          </div>

          <div className='sidebar-top__menu__item d-flex align-items-center'>
            <IoIosContacts className='menu-item-logo m-1' />
            <Link to='/employes'>استخدام</Link>
          </div>

          <div className='sidebar-top__menu__item d-flex align-items-center'>
            <LuMessagesSquare className='menu-item-logo m-1' />
            <Link to='/messenger'>مسنجر</Link>
          </div>

          <div className='sidebar-top__menu__item d-flex align-items-center'>
            <FaRegFolderOpen className='menu-item-logo m-1' />
            <Link to='/infoPortal'>پورتال اطلاعات</Link>
          </div>



        </div>
      </div>





      <div className='sidebar-footer'>

          <div className='sidebar-footer__support'>
            <img src="/img/illustration.png" className='logo-support' alt="" />
            <button className='btn-support bg-primary' style={{color:'white',border:'none'}}>Support</button>
          </div>

         <div className='sidebar-top__menu__item d-flex align-items-center'>
            <RxExit className='menu-item-logo m-1' />
            <Link to='#'>Logout</Link>
          </div>
      </div>
    </div>
  )
}
