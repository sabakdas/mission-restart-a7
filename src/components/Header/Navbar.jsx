import React from 'react';

const Navbar = () => {
    return (
        <>
        
 <div className="navbar bg-base-100 w-11/12 mx-auto p-0">
  <div className="flex-1">
    <a className="text-xl font-bold">CS — Ticket System</a>
  </div>

  <div className="flex-none lg:hidden">
    <label htmlFor="mobile-menu" className="btn btn-square btn-ghost">
      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
      </svg>
    </label>
  </div>

  <div className="hidden lg:flex items-center gap-5 list-none text-black">
    <li><a className="no-underline hover:text-blue-500" href="">Home</a></li>
    <li><a className="no-underline hover:text-blue-500" href="">FAQ</a></li>
    <li><a className="no-underline hover:text-blue-500" href="">Changelog</a></li>
    <li><a className="no-underline hover:text-blue-500" href="">Blog</a></li>
    <li><a className="no-underline hover:text-blue-500" href="">Download</a></li>
    <li><a className="no-underline hover:text-blue-500" href="">Contact</a></li>
    <button className="btn btn-active btn-primary text-white font-semibold bg-linear-to-tl from-[#9F62F2] to-[#632EE3] border-0">
      + New Ticket
    </button>
  </div>
  <input type="checkbox" id="mobile-menu" className="drawer-toggle" />
  <div className="drawer-side">
    <label htmlFor="mobile-menu" className="drawer-overlay"></label>
    <ul className="menu p-4 w-64 bg-base-100">
      <li><a href="">Home</a></li>
      <li><a href="">FAQ</a></li>
      <li><a href="">Changelog</a></li>
      <li><a href="">Blog</a></li>
      <li><a href="">Download</a></li>
      <li><a href="">Contact</a></li>
      <li>
        <button className="btn btn-primary w-full mt-2 text-white font-semibold bg-linear-to-tl from-[#9F62F2] to-[#632EE3] border-0">
          + New Ticket
        </button>
      </li>
    </ul>
  </div>
</div>
</>
    );
};

export default Navbar;