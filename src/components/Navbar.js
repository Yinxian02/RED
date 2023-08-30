// import React, { useState } from 'react';

const Navbar = () => {
//   const [nav, setNav] = useState(false);
//   const handleClick = () => setNav(!nav);

  return (
    // <div className='fixed w-full h-[80px] flex justify-between items-center px-4 bg-[#0a192f] text-gray-300'>
    <div>
      {/* menu */}
      {/* <ul className='hidden md:flex'> */}
      <ul>
        <li>
          {/* <Link to='home' smooth={true} duration={500}>
            Home
          </Link> */}
          <a href='/'>Home</a>
        </li>
        <li>
          <a href='/about'>About</a>
        </li>
        <li>
          <a href='/past-projects'>Past Projects</a>
        </li>
        <li>
          <a href='/fundraisers'>Fundraisers</a>
        </li>
        <li>
          <a href='/rgb-school'>RGB School</a>
        </li>
        <li>
          <a href='/join-us'>Join Us</a>
        </li>
        <li>
          <a href='/follow-us'>Follow Us</a>
        </li>
      </ul>

    </div>
  );
};

export default Navbar;