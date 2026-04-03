import { useState } from "react";

function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="bg-red-500 sticky top-0 z-50 shadow">
      <div className="px-4 md:px-10 lg:px-24 py-2 flex justify-between items-center">

        {/* Logo */}
        <h1 className="text-xl md:text-2xl font-bold text-white">Mpuza</h1>

        {/* Desktop Menu */}
        <div className="hidden lg:flex gap-6 items-center text-white">

          <div className="flex flex-col items-center relative">
            <i className="fa-solid fa-users text-xl"></i>
            <span className="text-xs">Network</span>
            <span className="absolute -top-1 -right-2 bg-blue-500 text-xs px-1 rounded-full">10</span>
          </div>

          <div className="flex flex-col items-center relative">
            <i className="fa-solid fa-bookmark text-xl"></i>
            <span className="text-xs">Courses</span>
            <span className="absolute -top-1 -right-2 bg-blue-500 text-xs px-1 rounded-full">2</span>
          </div>

          <div className="flex flex-col items-center relative">
            <i className="fa-solid fa-bell text-xl"></i>
            <span className="text-xs">Alerts</span>
            <span className="absolute -top-1 -right-2 bg-blue-500 text-xs px-1 rounded-full">7</span>
          </div>

          <div className="flex flex-col items-center relative">
            <i className="fa-solid fa-briefcase text-xl"></i>
            <span className="absolute -top-1 -right-2 bg-blue-500 text-xs px-1 rounded-full">6</span>
            <span className="text-xs">Jobs</span>
          </div>

        </div>

        {/* Search */}
        <div className="hidden lg:flex w-1/3 bg-white items-center px-3 rounded-md h-9">
          <i className="fa-solid fa-magnifying-glass text-gray-500"></i>
          <input type="text" placeholder="Search..." className="outline-none px-2 w-full" />
        </div>

        {/* Right */}
        <div className="flex items-center gap-3">

          {/* Profile */}
          <div className="hidden lg:flex flex-col items-center text-white">
            <img src="profile.jpeg" className="rounded-full w-9 h-9 object-cover" alt="" />
            <span className="text-sm">Me <i className="fa-solid fa-caret-down"></i></span>
          </div>

          {/* Buttons */}
          <div className="hidden lg:flex gap-3 items-center">
            <div className="rounded-3xl bg-white text-red-500 px-4 py-1 text-sm">
              Become Refresher
            </div>

            <div className="flex flex-col items-center text-white">
              <i className="fa-solid fa-table-cells"></i>
              <span className="text-sm">Switch</span>
            </div>
          </div>

          {/* Mobile Button */}
          <button 
            onClick={() => setOpen(!open)} 
            className="lg:hidden text-white text-2xl"
          >
            <i className="fa-solid fa-bars"></i>
          </button>

        </div>
      </div>

      {/* MOBILE MENU */}
      {open && (
        <div className="lg:hidden bg-red-600 px-4 py-3 space-y-4 text-white">

          {/* Search */}
          <div className="bg-white flex items-center px-3 rounded-md h-9">
            <i className="fa-solid fa-magnifying-glass text-gray-500"></i>
            <input type="text" placeholder="Search..." className="outline-none px-2 w-full text-black" />
          </div>

          {/* Menu */}
          <div className="flex justify-between text-center">
            <div className="flex flex-col items-center">
              <i className="fa-solid fa-users"></i>
              <span className="text-xs">Network</span>
            </div>

            <div className="flex flex-col items-center">
              <i className="fa-solid fa-bell"></i>
              <span className="text-xs">Alerts</span>
            </div>

            <div className="flex flex-col items-center">
              <i className="fa-solid fa-briefcase"></i>
              <span className="text-xs">Jobs</span>
            </div>
          </div>

          {/* Profile */}
          <div className="flex items-center gap-3 pt-2 border-t border-red-400">
            <img src="profile.jpeg" className="w-10 h-10 rounded-full object-cover" alt="" />
            <span>Kalisa Felix</span>
          </div>

        </div>
      )}
    </header>
  );
}

export default Header;