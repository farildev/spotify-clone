import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Icon } from '../utils/icons';

const Navigation = () => {
  const navigate = useNavigate();
  return (
    <nav className='flex items-center gap-x-4'>
      <button onClick={() => navigate(-1)} className='w-8 h-8 flex justify-center items-center rounded-full bg-black bg-opacity-70'>
        <Icon name="previous" size={20}/>
      </button>
      <button onClick={() => navigate(+1)} className='w-8 h-8 flex justify-center items-center rounded-full bg-black bg-opacity-70'>
        <Icon name="next" size={20}/>
      </button>
    </nav>
  )
}

export default Navigation