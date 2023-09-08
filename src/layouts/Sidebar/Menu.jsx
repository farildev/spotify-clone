import React from 'react';
import { NavLink } from 'react-router-dom';
import { Icon } from '../../utils/icons';

const Menu = () => {
  return (
    <nav id='sidebar' className='px-2'>
        <ul className='flex flex-col'>
            <li> 
                <NavLink to={"/"} className='h-10 gap-x-4 flex items-center text-sm font-semibold text-white rounded hover:text-white px-4 '>
                    <span>
                        <Icon name="home"/>
                    </span>
                    Home
                </NavLink>
            </li>
            <li>
                <NavLink to={"/search"} className='h-10 gap-x-4 flex items-center text-sm font-semibold text-white rounded hover:text-white px-4 '>
                    <span>
                        <Icon name="search"/>
                    </span>
                    Search
                </NavLink>
            </li>
            <li>
                <NavLink to={"/library"} className='h-10 gap-x-4 flex items-center text-sm font-semibold text-white rounded hover:text-white px-4'>
                    <span>
                        <Icon name="library"/>
                    </span>
                    Library
                </NavLink>
            </li>
        </ul>
    </nav>
  )
}

export default Menu