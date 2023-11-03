'use client';

import { DarkThemeToggle } from "flowbite-react";

export const Navbar = () => {

  return (
    <nav className="fixed top-0 z-50 w-full bg-white border-b border-gray-200 dark:bg-darkBlueDark dark:border-gray-700">
      <div className="px-5 py-4 sm:px-20">

          <div className="flex justify-between items-center">
            <h1 className="text-md font-bold text-center sm:text-lg  text-gray-800 dark:text-white">
              Where in the world?
            </h1>    
            <div className="flex flex-row items-center gap-1">
              <DarkThemeToggle className=" text-2xl text-gray-500 dark:text-white" />
              <p className="dark:text-white">Dark Mode</p>
            </div>
          </div>
      </div>
    </nav>
  );
};