import React from 'react';
import { Icon } from '../utils/icons';

const SearchBar = () => {
  return (
    <div className='mr-auto ml-4 relative'>
        <label htmlFor="search-input" className='text-white w-12 h-10 flex items-center justify-center absolute top-0 left-0'>
        <Icon size={24} name="search"/>
        </label>
        <input autoFocus={true} id='search-input' type="text" className='h-10 bg-black pl-12 text-white font-medium rounded-3xl w-[22.75rem] text-sm placeholder-opacity-50 max-w-full outline-none border border-link/20 ' placeholder='Artists, songs, and podcasts' />
    </div>
  )
}

export default SearchBar