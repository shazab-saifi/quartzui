import React from 'react';
// import FloatingDock from './FloatingDock';
import Sidebar from '../components/Sidebar';

const Landing = () => {
  return (
    <div className="mx-auto flex min-h-screen w-full max-w-[96rem] items-center justify-center">
      {/* <FloatingDock /> */}
      <Sidebar />
    </div>
  );
};

export default Landing;
