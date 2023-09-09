import React, { useRef, useState, useEffect } from 'react';
import categories from '../data/categories';
import favorites from '../data/favorites';
import CategoryItem from '../components/CategoryItem';
import Title from '../components/Title';
import { Icon } from '../utils/icons';
import CategorySlider from '../components/CategorySlider';
import ScrollContainer from 'react-indiana-drag-scroll';


const Search = () => {
  const favoritesRef = useRef();
  const [prev , setPrev] = useState(false);
  const [next , setNext] = useState(false);

  useEffect(() => {
    if(favoritesRef.current) {
      const scrollHandle = () => {
        const isEnd = favoritesRef.current.scrollLeft + favoritesRef.current.offsetWidth === favoritesRef.current.scrollWidth
				const isBegin = favoritesRef.current.scrollLeft === 0;
        setPrev(!isBegin);
				setNext(!isEnd);
      }
      scrollHandle()
      favoritesRef.current.addEventListener('scroll' , scrollHandle)

      return () => {
        favoritesRef?.current?.removeEventListener('scroll', scrollHandle)
      }
    }
  },[favoritesRef])

  const slideFavoritesNext = () => {
		favoritesRef.current.scrollLeft += favoritesRef.current.offsetWidth - 300;
	}
	const slideFavoritesPrev = () => {
		favoritesRef.current.scrollLeft -= favoritesRef.current.offsetWidth - 300;
	}
  return (
    <>
      <section className='mb-8'>
        <Title title="More of what you like"/>
        <div className="relative">
        {prev && <button className="w-12 absolute -left-6 hover:scale-[1.06] z-10 top-1/2 -translate-y-1/2 h-12 rounded-full bg-white text-black flex items-center justify-center cursor-pointer" onClick={slideFavoritesPrev}><Icon name="previous" size={24} /></button>}
				{next && <button className="w-12 absolute -right-6 hover:scale-[1.06] z-10 top-1/2 -translate-y-1/2 h-12 rounded-full bg-white text-black flex items-center justify-center cursor-pointer"  onClick={slideFavoritesNext}><Icon name="next" size={24} /></button>}
        <ScrollContainer innerRef={favoritesRef} className='flex overflow-x gap-x-6 scrollable '>
          {favorites.map((favorite, index) => <CategorySlider key={index} favorite={favorite}/>)}
        </ScrollContainer>
        </div>
      </section>
      <section>
				<Title title="Explore All" />
				<div className="grid xl:grid-cols-5 gap-6 lg:grid-cols-4 md:grid-cols-2 sm:grid-cols-2 xs:grid-cols-1">
					{categories.map((category, index) => <CategoryItem key={index} category={category}/>)}
				</div>
			</section>
    </>
  )
}

export default Search