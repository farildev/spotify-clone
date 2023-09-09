import React from 'react'
import SongBox from './SongBox';
import Title from './Title';

const Section = ({title, more = false , items}) => {
  return (
    <section className='mb-4'>
        <Title title={title} more={more}/>
        <div className="grid xl:grid-cols-5 lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 xs:grid-cols-1 gap-x-6">
            {
                items.map(item => <SongBox item={item} key={item.id}/>)
            }
        </div>
    </section>
  )
}

export default Section