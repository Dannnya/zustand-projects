import React from 'react'
import { IoBagOutline, IoFilterOutline } from 'react-icons/io5';

interface NavProps {
  toggleSidebar: () => void;
};

function Navigation({ toggleSidebar }:NavProps) {
  return (
    <div className='mt-[2rem] container w-[90%] ml-[5rem] flex justify-between items-center'>
        <h4 className='logo'>
        <IoFilterOutline onClick={ toggleSidebar } size={27} className='ml-[4rem] cursor-pointer'/>      
          </h4>
          
          <nav>
              <ul className='flex items-center mr-[2rem] space-x-4'>
                  <li>Search</li>
                  <li>Help</li>
                  <li>My Account</li>
              </ul>
          </nav>

          <IoBagOutline size={24}/>
              
    </div>
  )
}

export default Navigation;
