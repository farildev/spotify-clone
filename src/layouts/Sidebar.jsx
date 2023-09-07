import React from 'react';
import Menu from './Sidebar/Menu';
import Logo from "../assets/icons/Spotify-text.svg";

const Sidebar = () => {
  return (
    <aside className='w-60 flex flex-col py-6'>
        <a href='#' className='mb-7 px-6'>
            <img src={Logo} alt="" className='w-[130px]' />
        </a>
        <Menu/>
    </aside>
  )
}

export default Sidebar