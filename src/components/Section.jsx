import React from 'react'
import { NavLink } from 'react-router-dom';
import SongBox from './SongBox';

const Section = ({title, more = false , items}) => {
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
                items.map(item => <SongBox item={item} key={item.id}/>)
            }
        </div>
    </section>
  )
}

export default Section