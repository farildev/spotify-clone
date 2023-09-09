import React from 'react';
import { Range , getTrackBackground } from 'react-range';

const CustomRange = ({value , step , min ,max ,onChange}) => {

  return (
    <Range
                values={[value]}
                step={step}
                min={min}
                max={max}
                onChange={values => onChange(values[0])}
                renderTrack={({ props, children }) => (
                    <div
                    onMouseDown={props.onMouseDown}
                    onTouchStart={props.onTouchStart}
                    className='h-7 flex w-full group'
                    style={{
                        ...props.style,
                    }}
                    >
                    <div
                        ref={props.ref}
                        className='h-1 w-full self-center rounded-md'
                        style={{
                        background: getTrackBackground({
                            values: [value],
                            colors: ["#1db954", "#535353"],
                            min,
                            max
                        }),
                        }}
                    >
                        {children}
                    </div>
                    </div>
                )}
                renderThumb={({ props, isDragged }) => (
                    <div
                    {...props}
                    className={`h-3 w-3 rounded-full bg-white flex items-center justify-center ${!isDragged ? 'opacity-0' : '' }  group-hover:opacity-100`}
                    style={{
                        ...props.style,
                        boxShadow: "0px 2px 4px 0 rgb(0 0 0 / 50%)"
                    }}
                   />
                )}
            />
  )
}

export default CustomRange