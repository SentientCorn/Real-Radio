import React, { useState } from 'react';

const Home: React.FC = () => {
  const [selectedTab, setSelectedTab] = useState('home');
  return (
  <div className="HomeComponent flex flex-1 w-full h-full">
    <div className="flex p-4 bg-gray-800 text-white w-full rounded-lg">
    {/* Components here */}
    {selectedTab === 'home' ? (
      <></>
    ) : selectedTab === 'profile' ? (
      <></>
    ) : (<></>)
  }

    </div>
  </div>
  );
}

export default Home;