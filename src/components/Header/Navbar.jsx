import React from 'react';

const Navbar = () => {
    return (
        <>
        
       <div className="navbar p-0 bg-base-100  w-11/12 mx-auto">
   <div className="flex-1">
    <a className="text-xl font-bold">CS — Ticket System</a>
  </div>
  <div className="flex items-center  gap-5 list-none no-underline text-black">
    <li><a className=' no-underline hover:text-blue-500' href="">Home</a></li>
    <li><a className=' no-underline hover:text-blue-500' href="">FAQ</a></li>
    <li><a className=' no-underline hover:text-blue-500' href="">Changelog</a></li>
    <li><a className=' no-underline hover:text-blue-500' href="">Blog</a></li>    
    <li><a className=' no-underline hover:text-blue-500' href="">Download</a></li>    
    <li><a className=' no-underline hover:text-blue-500' href="">Contact</a></li>
    <button className="btn btn-active btn-primary text-white font-semibold
    bg-gradient-to-tl from-[#9F62F2] to-[#632EE3] border-0">+ New Ticket</button>    
  </div>
</div>
</>
    );
};

export default Navbar;