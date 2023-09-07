import React from 'react'
import { NavLink } from 'react-router-dom';
import { Icon } from '../utils/icons';

const Section = ({title, more = false , items}) => {
    const imageStyle = (item) => {
        switch (item.type) {
            case "artist" :
                return 'rounded-full'
            case 'podcast' : 
             default : 
                return  'rounded'   
        }
    }
  return (
    <section>
        <header className='flex justify-between items-center mb-4 mt-2'>
        <NavLink to={more ?? "#"}>
            <h3 className='text-2xl text-white font-semibold tracking-tight hover:underline'>{title}</h3>
        </NavLink>
        {
            more && (
                <NavLink className={"text-link text-xs font-semibold uppercase tracking-wider hover:underline"} to={"/"}>See All</NavLink>
            )
        }
        </header>
        <div className="grid grid-cols-5 gap-x-6">
            {
                items.map((item) => (
                    <NavLink
                    className={"bg-bottomBar rounded p-4 group  hover:bg-active"}
                     key={item.id}
                     to={"/"}>
                        <div className='pt-[100%] relative mb-4'>
                        <img className={`absolute object-cover inset-0 w-full h-full ${imageStyle(item)}`} src={item.image} alt="" />
                        <button className='w-10 h-10 bg-primary rounded-full absolute bottom-2 right-2 group-hover:flex group-focus:flex items-center justify-center hidden'>
                            <Icon name="play" size={16}/>
                        </button>
                        </div>
                        <h6 className='overflow-hidden overflow-ellipsis whitespace-nowrap text-base font-semibold'>
                            {item.title}
                        </h6>
                        <p className='line-clamp-2 text-link text-sm mt-2'>
                            {item.description}
                        </p>
                    </NavLink>
                ))
            }
        </div>
    </section>
  )
}

export default Section