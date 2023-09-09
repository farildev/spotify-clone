import React from 'react';
import Navigation from '../components/Navigation';
import AuthBox from '../components/AuthBox';
import { useLocation } from 'react-router-dom';
import SearchBar from '../components/SearchBar';

const Navbar = () => {
  const location = useLocation();
  
  if(location.pathname === '/search'){
    return (
      <nav className='h-[3.75rem] flex items-center justify-between px-8'>
      <Navigation/>
      <SearchBar/>
      <AuthBox/>
    </nav>
    )
  }
  else{
    return (
      <nav className='h-[3.75rem] flex items-center justify-between px-8'>
      <Navigation/>
      <AuthBox/>
    </nav>
    )
  }
}

export default Navbar