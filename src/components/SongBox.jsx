import React from 'react';
import { NavLink } from 'react-router-dom';
import { Icon } from '../utils/icons';
import { useDispatch, useSelector } from 'react-redux';
import { setCurrent } from "../store/player";


const SongBox = ({item}) => {

    const {current , playing , controls} = useSelector(state => state.player)
    const dispatch = useDispatch();

    const imageStyle = (item) => {
        switch (item.type) {
            case "artist" :
                return 'rounded-full'
            case 'podcast' : 
             default : 
                return  'rounded'   
        }
    }

    const updateCurrent = () => {
        if (current.id === item.id) {
            if (playing) {
                controls.pause()
            } else {
                controls.play()
            }
        } else {
            dispatch(setCurrent(item))
        }
    }
    
    const isCurrentItem = (current?.id === item.id && playing)

  return (
    <NavLink
                    className={`bg-bottomBar rounded p-4 group my-6 hover:bg-active`}
                     key={item.id}
                     to={"/"}>
                        <div className='pt-[100%] relative mb-4'>
                        <img className={`absolute object-cover inset-0 w-full h-full ${imageStyle(item)}`} src={item.image} alt="" />
                        <button onClick={updateCurrent} className={`w-10 h-10 bg-primary rounded-full absolute bottom-2 right-2 group-hover:flex group-focus:flex items-center justify-center ${!isCurrentItem ? 'hidden' : 'flex'}`}>
                            <Icon name={ isCurrentItem ? "pause" : "play"} size={16}/>
                        </button>
                        </div>
                        <h6 className='overflow-hidden overflow-ellipsis whitespace-nowrap text-base font-semibold'>
                            {item.title}
                        </h6>
                        <p className='line-clamp-2 text-link text-sm mt-2'>
                            {item.description}
                        </p>
                    </NavLink>
  )
}

export default SongBox