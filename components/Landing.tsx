import React from 'react';
// import FloatingDock from './FloatingDock';
import Sidebar from './Sidebar';

const Landing = () => {
  return (
    <div className="flex min-h-screen w-full items-start justify-center text-center text-4xl text-neutral-300">
      {/* <FloatingDock /> */}
      <Sidebar />
    </div>
  );
};

export default Landing;
