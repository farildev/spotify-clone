import React from 'react';
import {Routes , Route} from "react-router-dom";
import Navbar from './Navbar';
import Home from '../views/Home';
import Search from '../views/Search';
import Library from '../views/Library';

const Content = () => {
  return (
    <main className='flex-auto'>
      <Navbar/>
      <Routes>
        <Route exact path='/' element={<Home/>}/>
        <Route path='/search' element={<Search/>}/>
        <Route path='/library' element={<Library/>}/>
      </Routes>
    </main>
  )
}

export default Content