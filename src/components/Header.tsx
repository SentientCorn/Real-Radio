import React from 'react';

interface items {
  name: string;
  icon: React.ReactNode;
  link: string;
}

const items: items[] = [
  { name: 'Profile', icon: <span>X</span>, link: "/"},
  { name: 'Builder', icon: <span>X</span>, link: "/profile" },
  { name: 'Settings', icon: <span>X</span>, link: "/settings" },
  { name: 'Help', icon: <span>X</span>, link: "/help" }
];

const Header: React.FC = () => {

  return (
    <>
      <div className="flex items-center p-4 bg-gray-800 text-white w-full">
        <div className="text-2xl font-bold ">RealRADIO</div>
        <nav className="space-x-4 ml-4 flex items-center justify-center ">
          {items.map((item) => (
            <a key={item.name} href={item.link} className="bg-gray-200 rounded-md p-1 space-x-2">
              <span className="text-lg">{item.icon}</span>
              <span className='text-gray-500 '>{item.name}</span>
            </a>
          ))}
        </nav>
      </div>
    </>
  )
}

export default Header;