import React, { useEffect, useMemo , useRef } from 'react';
import { Icon } from '../utils/icons';
import CustomRange from './CustomRange';
import {useAudio , useFullscreen , useToggle } from 'react-use';
import { secondsToTime } from '../utils/Timer';
import { useDispatch, useSelector } from 'react-redux';
import { setControls , setPlaying, setSidebar } from '../store/player';
import FullScreen from '../layouts/FullScreen';

const Player = () => {
    
    const fsRef = useRef();
    const [show ,toggle] = useToggle(false);
    const isFullScreen = useFullscreen(fsRef , show, {onClose : () => toggle(false)});

    const dispatch = useDispatch();
    const {current, sidebar} = useSelector(state => state.player)

    const [audio, state, controls, ref] = useAudio({
        src: current?.src 
      });

      const handleRestart = () => {
        controls.seek(0)
      }

      useEffect(() => {
        controls.play()
        handleRestart()
      },[current])
      
      useEffect(() => {
        dispatch(setPlaying(state.playing))
      }, [state.playing])

      useEffect(() => {
        dispatch(setControls(controls))
      },[])

      const volumeCheck = useMemo(() => {
        if(state.volume === 0 || state.muted){
            return 'volumeMute'
        }
        if (state.volume > 0 && state.volume < 0.33){
            return 'volumeLow'
        }
        if (state.volume >= 0.33 && state.volume < 0.66){
            return 'volumeMedium'
        }
        return 'volumeFull'

      },[state.volume , state.muted])

  return (
    <div className='flex justify-between items-center h-full w-full px-4'>
        <div className='min-w-[11.25rem] w-[30%]'>
            {
                current && (
                    <div className='flex items-center'>
                        <div className='flex items-center mr-3'>
                         {
                            !sidebar && (
                                <div className='w-14 h-14 mr-4 relative group flex-shrink-0'>
                                    <img src={current?.image} alt="" />
                                    <button onClick={() => dispatch(setSidebar(true))} className='w-6 h-6 bg-black group-hover:opacity-80 hover:scale-[1.06] rounded-full absolute top-1 opacity-0 right-1 flex items-center justify-center rotate-90'>
                                        <Icon name="previous" size={16}/>
                                    </button>
                                </div>
                            )
                         }
                        <div>
                            <h6 className='text-sm line-clamp-1'>{current?.title}</h6>
                            <p className='text-white text-[0.688rem] text-opacity-70'>{current?.artist}</p>
                        </div>
                        </div>
                        <button className='w-8 h-8 flex justify-center items-center text-white text-opacity-70 hover:text-opacity-100'>
                            <Icon name="heart" size={16}/>
                        </button>
                        <button className='w-8 h-8 flex justify-center items-center text-white text-opacity-70 hover:text-opacity-100'>
                            <Icon name="pictureInPicture" size={16}/>
                        </button>
                    </div>
                )
            }
        </div>
        <div className='max-w-[45.125rem] w-[40%] flex flex-col items-center px-4'>
            <div className='flex items-center gap-x-2'>
                <button className='w-8 h-8 flex justify-center items-center text-white text-opacity-70 hover:text-opacity-100'>
                    <Icon name="shuffle" size={16}/>
                </button>
                <button className='w-8 h-8 flex justify-center items-center text-white text-opacity-70 hover:text-opacity-100'>
                    <Icon name="prevMusic" size={16}/>
                </button>
                <button onClick={controls[state?.playing ? 'pause' : 'play']} className='w-8 h-8 bg-white flex justify-center items-center text-black rounded-full hover:scale-[1.06]'>
                    <Icon name={state?.playing ? "pause" : "play"} size={16}/>
                </button>
                <button className='w-8 h-8 flex justify-center items-center text-white text-opacity-70 hover:text-opacity-100'>
                    <Icon name="nextMusic" size={16}/>
                </button>
                <button onClick={handleRestart} className='w-8 h-8 flex justify-center items-center text-white text-opacity-70 hover:text-opacity-100'>
                    <Icon name="repeat" size={16}/>
                </button>
            </div>
            <div className='w-full flex items-center gap-x-2'>
                {audio}
            <div className='text-[0.688rem] text-white text-opacity-70'>
                {secondsToTime(state?.time)}
            </div>
            <CustomRange 
                step={0.1}
                min={0}
                max={state?.duration || 1}
                value={state?.time}
                onChange={value => controls.seek(value)}
            />
            <div className='text-[0.688rem] text-white text-opacity-70 '>
                {secondsToTime(state?.duration)}
            </div>
            </div>
        </div>
        <div className='min-w-[11.25rem] w-[30%] flex justify-end items-center'>
            <button className='w-8 h-8 flex justify-center items-center text-white text-opacity-70 hover:text-opacity-100'>
                <Icon name="lyrics" size={16}/>
            </button>
            <button className='w-8 h-8 flex justify-center items-center text-white text-opacity-70 hover:text-opacity-100'>
                <Icon name="queue" size={16}/>
            </button>
            <button className='w-8 h-8 flex justify-center items-center text-white text-opacity-70 hover:text-opacity-100'>
                <Icon name="device" size={16}/>
            </button>
            <button onClick={controls[state?.muted ? 'unmute' : 'mute']} className='w-8 h-8 flex justify-center items-center text-white text-opacity-70 hover:text-opacity-100'>
                <Icon name={volumeCheck} size={16}/>
            </button>
            <div className='w-[5.813rem] max-w-full'>
            <CustomRange 
                step={0.01}
                min={0}
                max={1}
                value={state?.muted ? 0 : state?.volume}
                onChange={value => {
                    controls.unmute()
                    controls.volume(value)
                }}
            />
            </div>
            <button onClick={() => toggle()} className='w-8 h-8 flex justify-center items-center text-white text-opacity-70 hover:text-opacity-100'>
                <Icon name="fullScreen" size={16}/>
            </button>
        </div>
        <div ref={fsRef}>
            {isFullScreen && (
                <FullScreen 
                toggle={toggle} 
                state={state} 
                controls = {controls} 
                handleRestart = {handleRestart}
                volumeCheck = {volumeCheck}
            />
            )}
        </div>
    </div>
  )
}

export default Player