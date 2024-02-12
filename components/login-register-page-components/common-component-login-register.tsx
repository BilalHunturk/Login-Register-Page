import Link from 'next/link';
import React, { ReactNode } from 'react'

interface CommonLayoutProps {
  children: ReactNode;
}

const CommonLayout: React.FC<CommonLayoutProps> = ({ children }) => {
  return (
    <>
      <div className="h-screen bg-gray-200 py-12 px-6 flex-col">
        <div className="w-full mx-auto max-w-md">
          <img src="https://upload.wikimedia.org/wikipedia/commons/b/be/Facebook_Messenger_logo_2020.svg"
            alt="Facebook Messenger logo 2020.svg" height="48" width="48"
            className="mx-auto" />
          {children}
        </div>
        <div className="flex justify-center">
          <footer>
            <p>&copy; 2024 has made by <Link href="https://github.com/BilalHunturk" className='cursor-point underline'>Yharamas</Link></p>
          </footer>
        </div>
      </div>

    </>

  );
};

export default CommonLayout