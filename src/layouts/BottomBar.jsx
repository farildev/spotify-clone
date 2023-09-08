import React from 'react';
import Player from '../components/Player';

const BottomBar = () => {
  return (
    <div className='h-24 flex items-center  bg-bottomBar border-t border-white border-opacity-5'>
      <Player/>
    </div>
  )
}

export default BottomBar