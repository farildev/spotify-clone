import React from 'react';
import Menu from './Sidebar/Menu';
import Logo from "../assets/icons/Spotify-text.svg";
import Playlists from '../components/Playlists';
import Download from '../components/Download';
import { Icon } from '../utils/icons';
import { useSelector } from 'react-redux';
import SongCover from '../components/SongCover';

const Sidebar = () => {
	const sidebar = useSelector(state => state.player.sidebar);
  return (
    <aside className='w-60 flex flex-col flex-shrink-0 pt-6 bg-black'>
        <a href='#' className='mb-7 px-6'>
            <img src={Logo} alt="" className='w-[130px]' />
        </a>
        <Menu/>
        <nav className="mt-6">
				<ul>
					<li>
						<a href="#" className="py-2 px-6 flex items-center group text-sm text-link font-semibold hover:text-white">
							<span className="w-6 h-6 flex items-center justify-center mr-4 bg-white bg-opacity-60 group-hover:bg-opacity-100 rounded-sm text-black">
								<Icon name="plus" size={12}/>
							</span>
							Create a playlist
						</a>
					</li>
					<li>
						<a href="#" className="py-2 px-6 flex items-center group text-sm text-link font-semibold hover:text-white">
							<span className="w-6 h-6 flex items-center justify-center mr-4 bg-gradient-to-br from-purple-700 text-white rounded-sm to-blue-300 opacity-70 group-hover:opacity-100">
								<Icon name="heart" size={12}/>
							</span>
							Liked Songs
						</a>
					</li>
				</ul>
			</nav>
        <Playlists/>
        <Download/>
		{
			sidebar && <SongCover/>
		}
    </aside>
  )
}

export default Sidebar