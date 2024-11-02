import { useRouter } from 'next/navigation';
import React from 'react';

const Drawer = () => {
  const router = useRouter();

  const handleNavigation = (path: string) => {
    router.push(path);
  };

  return (
    <div className="fixed bottom-0 left-0 w-full bg-white shadow-lg z-50">
      <div className="flex justify-around p-4">
        <div className="flex flex-col items-center cursor-pointer" onClick={() => handleNavigation('/home')}>
          <span className="text-lg">Home</span>
        </div>
        <div className="flex flex-col items-center cursor-pointer" onClick={() => handleNavigation('/comment')}>
          <span className="text-lg">Comentario</span>
        </div>
        <div className="flex flex-col items-center cursor-pointer" onClick={() => handleNavigation('/survey')}>
          <span className="text-lg">Encuesta</span>
        </div>
      </div>
    </div>
  );
};

export default Drawer;
