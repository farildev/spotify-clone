import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Icon } from '../utils/icons';
import { setSidebar } from '../store/player';

const SongCover = () => {
    const dispatch = useDispatch()
    const {current} = useSelector(state => state.player)
  return (
    <div className='pt-[100%] relative group bg-white'>
        <img src={current.image} className='w-full h-full object-cover absolute top-0 left-0' alt="" />
        <button onClick={() => dispatch(setSidebar(false))} className='w-6 h-6 bg-black group-hover:opacity-80 hover:scale-[1.06] rounded-full absolute top-1 opacity-0 right-1 flex items-center justify-center -rotate-90'>
            <Icon name="previous" size={16}/>
        </button>
    </div>
  )
}

export default SongCover