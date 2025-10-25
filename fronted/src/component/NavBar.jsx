import React, { useEffect, useState } from 'react';
import Login from './Login';
import Logout from './Logout';
import { useAuth } from '../context/AuthProvider';

function NavBar() {
  const [authuser, setAuthuser] = useAuth();
  const [showLogin, setShowLogin] = useState(false);

  const [theme, setTheme] = useState(localStorage.getItem("theme") || "light");
  const [sticky, setSticky] = useState(false);

  useEffect(() => {
    document.querySelector("html").setAttribute("data-theme", theme);
    localStorage.setItem("theme", theme);
  }, [theme]);

  useEffect(() => {
    const handleScroll = () => setSticky(window.scrollY > 0);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);


  const navitems = (
    <>
      <li>
        <a href="/" className="relative after:content-[''] after:absolute after:w-0 after:h-[2px] after:bg-pink-500 after:left-0 after:bottom-0 hover:after:w-full after:transition-all after:duration-300">
          Home
        </a>
      </li>
      <li>
        <a href="/course" className="relative after:content-[''] after:absolute after:w-0 after:h-[2px] after:bg-pink-500 after:left-0 after:bottom-0 hover:after:w-full after:transition-all after:duration-300">
          Course
        </a>
      </li>
      <li>
        <a href="/contact" className="relative after:content-[''] after:absolute after:w-0 after:h-[2px] after:bg-pink-500 after:left-0 after:bottom-0 hover:after:w-full after:transition-all after:duration-300">
          Contact
        </a>
      </li>
      <li>
        <a href="/about" className="relative after:content-[''] after:absolute after:w-0 after:h-[2px] after:bg-pink-500 after:left-0 after:bottom-0 hover:after:w-full after:transition-all after:duration-300">
          About
        </a>
      </li>
    </>
  );

  return (
    <>
      <div
        className={`max-w-screen-2xl container md:px-20 px-4 fixed top-0 left-0 right-0 z-50 transition-all duration-500 border-b ${
          sticky
            ? 'backdrop-blur-lg shadow-md border-none'
            : 'bg-transparent'
        }`}
      >
        <div className="navbar transition-all duration-300">
          <div className="navbar-start flex items-center">
            {/* Dropdown Menu for Mobile */}
            <div className="dropdown">
              <div tabIndex={0} role="button" className="btn btn-ghost z-80 lg:hidden">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none"
                  viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                    d="M4 6h16M4 12h8m-8 6h16" />
                </svg>
              </div>
              <ul
                tabIndex={0}
                className="menu menu-sm dropdown-content  rounded-box  mt-4  w-54 p-2 shadow-2xl animate-fadeIn bg-white text-black"
              >
                {navitems}
              </ul>
            </div>
            <a className="text-2xl font-extrabold cursor-pointer bg-linear-to-r from-pink-500 to-purple-600 bg-clip-text text-transparent hover:scale-105 transition-transform duration-300">
              Library Hub
            </a>
          </div>

          {/* Desktop Menu */}
          <div className="navbar-center hidden lg:flex">
            <ul className="menu menu-horizontal px-3 font-semibold space-x-2">
              {navitems}
            </ul>
          </div>

          {/* Right Section */}
          <div className="navbar-end space-x-4">
            {/* Search Bar */}
            <div className='hidden md:block'>
<label className="input input-neutral focus-within:outline-none focus-within:ring-0 rounded-md bg-slate-100 ">
<svg className="h-[1em] opacity-70" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
<g strokeLinejoin="round" strokeLinecap="round" strokeWidth="2.5" fill="none" className="text-black" stroke="currentColor">
<circle cx="12" cy="12" r="9"></circle>
<path d="m22 21-4.4-3.5"></path>
</g>
</svg>
<input
type="search"
placeholder="Search"
className="focus:ring-0 text-slate-950"
/>
<kbd className="kbd kbd-sm">⌘</kbd>
<kbd className="kbd kbd-sm">K</kbd>
</label>
</div>

            <button
  onClick={() => setTheme(theme === "light" ? "burgernoodle" : "light")}
  className="p-2 rounded-full transition-all hover:scale-112 bg-slate-300 hover:bg-amber-100 duration-300"
  title="Theme"
>
  {theme === "light" ? (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none"
      viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor"
      className="w-5 h-5 text-black transition-transform duration-500 hover:rotate-200">
      <path strokeLinecap="round" strokeLinejoin="round"
        d="M12 3v2m0 14v2m9-9h-2M5 12H3m15.364-7.364l-1.414 1.414M7.05 16.95l-1.414 1.414M16.95 16.95l1.414 1.414M7.05 7.05L5.636 5.636" />
    </svg>
  ) : (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none"
      viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor"
      className="w-5 h-5 text-slate-800 transition-transform  duration-500 hover:-rotate-90">
      <path strokeLinecap="round" strokeLinejoin="round"
        d="M21 12.79A9 9 0 1111.21 3 7 7 0 0021 12.79z" />
    </svg>
  )}
</button>



            {authuser ? (
              <Logout />
            ) : (
              <button
                onClick={() => setShowLogin(true)}
                className="px-4 py-1.5 bg-linear-to-r from-pink-500 to-purple-600 text-white rounded-md font-semibold shadow-md hover:scale-105 transition-transform duration-300"
              >
                Login
              </button>
            )}
          </div>
        </div>
      </div>

     
      {showLogin && <Login onClose={() => setShowLogin(false)} />}
    </>
  );
}

export default NavBar;
