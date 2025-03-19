import React, { useState } from 'react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
      {/* Navbar */}
      <div className="h-14 px-4 py-2 sticky top-0 flex items-center justify-between bg-[#ffffff]">
        {/* Logo */}
        <a className="font-bold text-2xl" href="#">Midnight</a>

        {/* Center Links (Desktop) */}
        <div className="hidden md:flex justify-between w-[500px] font-semibold">
          {['Home', 'Coffee', 'Beans', 'Chocolate', 'Mug'].map((item) => (
            <a key={item} className="hover:text-[#00754a] hover:shadow-lg underline decoration-2" href="#">
              {item}
            </a>
          ))}
        </div>

        {/* Login & Theme Toggle (Desktop) */}
        <div className="hidden lg:flex space-x-10 font-semibold text-md">
          <button>
            <img className="w-[40px] px-1 py-1" src="src/assets/light-mode.png" alt="Light Mode" />
          </button>
          <a className="border-[2px] border-neutral-600 hover:border-[#00754a] px-4 py-1 rounded-xl" href="#">Login</a>
          <a className="border-[2px] border-neutral-600 hover:border-[#00754a] px-3 py-1 rounded-xl" href="#">Sign up</a>
        </div>

        {/* Mobile Menu Button */}
        <div className="w-[30px] lg:hidden">
          <button onClick={toggleMenu} aria-label="Toggle menu">
            <img
              src={isOpen ? "https://img.icons8.com/ios/50/multiply.png" : "https://img.icons8.com/ios/50/menu--v1.png"}
              alt="Menu Icon"
            />
          </button>
        </div>
      </div>

      {/* Mobile Menu (Conditional Rendering) */}
      {isOpen && (
        <div className="absolute right-0 bg-white w-[200px] opacity-90 rounded-b-xl border-[2px] border-neutral-600">
          <div className="flex flex-col items-center text-center lg:hidden space-y-6 py-2 px-2 font-semibold w-full">
            {['Home', 'Coffee', 'Beans', 'Chocolate', 'Mug'].map((item) => (
              <a
                key={item}
                onClick={toggleMenu}
                className="hover:text-[#00754a] rounded-xl hover:bg-slate-900 w-full hover:shadow-lg underline py-2"
                href="#"
              >
                {item}
              </a>
            ))}
            <a className="border-[2px] border-neutral-600 hover:border-[#00754a] px-4 py-1 rounded-xl" href="#">Login</a>
            <a className="border-[2px] border-neutral-600 hover:border-[#00754a] px-3 py-1 rounded-xl" href="#">Sign up</a>
          </div>
        </div>
      )}
    </div>
  );
};

export default Navbar;
