import React from 'react';
// import FloatingDock from './FloatingDock';
import Sidebar from './Sidebar';

const Landing = () => {
  return (
    <div className="flex min-h-screen w-full items-center justify-center">
      {/* <FloatingDock /> */}
      <Sidebar />
    </div>
  );
};

export default Landing;
