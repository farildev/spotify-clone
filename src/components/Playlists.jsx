import React from "react";
function Playlists() {
	return (
		<nav className="mx-6 mt-2 py-2 flex-auto border-t border-white border-opacity-20 overflow-auto">
			<ul>
				{new Array(22).fill(<li>
					<a href="#" className="text-sm text-link hover:text-white flex h-8 items-center">
						My Playlist
					</a>
				</li>)
				}
			</ul>
		</nav>
	)
}

export default Playlists