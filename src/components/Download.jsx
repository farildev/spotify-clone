import React from 'react';
import { Icon } from '../utils/icons';

const Download = () => {
  return (
    <a href='#' className='bg-dark h-10 gap-x-4 flex flex-shrink-0 text-sm font-semibold text-link hover:text-white items-center px-6'>
            <Icon name="download" size={20}/>
            Download the app
    </a>
  )
}

export default Download