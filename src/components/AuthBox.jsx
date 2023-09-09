import React from 'react';
import { Menu } from '@headlessui/react';
import { Icon } from '../utils/icons';

const AuthBox = () => {
  const user = {
    name: 'Faril Mammadov',
    avatar: 'https://i.scdn.co/image/ab67757000003b82ed6dca72af58819b27e1530b'
}

return (
    <Menu as="nav" className="relative z-10">
        {({ open }) => (
            <>
                <Menu.Button className={`flex items-center h-8 rounded-3xl pr-2 ${ open ? 'bg-active' : 'bg-black'} hover:bg-active`}>
                    <img src={user.avatar} className={`w-8 h-8 rounded-full p-0.5 mr-2`} />
                    <span className="text-sm font-semibold mr-2">{user.name}</span>
                    <span className={open && 'rotate-180'}>
                        <Icon size={16} name="chevron" />
                    </span>
                </Menu.Button>
                <Menu.Items className={`absolute p-1 top-full right-0 w-48 bg-active rounded translate-y-2`}>
                    <Menu.Item>
                        {({ active }) => (
                            <a
                                className={`h-10 flex justify-between items-center px-2 text-sm rounded ${active && 'bg-white bg-opacity-10'}`}
                                href="#"
                            >
                                Account
                                <Icon size={16} name="external" />
                            </a>
                        )}
                    </Menu.Item>
                    <Menu.Item>
                        {({ active }) => (
                            <a
                                className={`h-10 flex items-center px-2 text-sm rounded ${active && 'bg-white bg-opacity-10'}`}
                                href="#"
                            >
                                Profile
                            </a>
                        )}
                    </Menu.Item>
                    <Menu.Item>
                        {({ active }) => (
                            <a
                                className={`h-10 flex items-center px-2 text-sm rounded ${active && 'bg-white bg-opacity-10'}`}
                                href="#"
                            >
                                Log out
                            </a>
                        )}
                    </Menu.Item>
                </Menu.Items>
            </>
        )}
    </Menu>
)
}

export default AuthBox