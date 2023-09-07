import React from 'react';
import Navigation from '../components/Navigation';
import AuthBox from '../components/AuthBox';

const Navbar = () => {
  return (
    <nav className='h-[3.75rem] flex items-center justify-between px-8'>
      <Navigation/>
      <AuthBox/>
    </nav>
  )
}

export default Navbar