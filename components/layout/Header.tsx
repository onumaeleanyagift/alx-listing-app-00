import React from "react";

const Header: React.FC = () => {
  return (
    <header className="w-full bg-white text-center flex flex-col">
      <div className="flex items-center mb-2 md:mb-0">
        <img src="/logo.png" alt="Logo" className="h-8 w-8 mr-2" />
        <span className="font-bold text-xl text-gray-800">StayFinder</span>
      </div>

      <nav>
        <a href="" className="text-gray-700 hover:text-blue-600">
          Mansion
        </a>
        <a href="" className="text-gray-700 hover:text-blue-600">
          Rooms
        </a>
        <a href="" className="text-gray-700 hover:text-blue-600">
          Coutryside
        </a>
        <a href="" className="text-gray-700 hover:text-blue-600">
          Apartments
        </a>
        <a href="" className="text-gray-700 hover:text-blue-600">
          Villas
        </a>
      </nav>
      <form action="">
        <input
          type="text"
          placeholder="Search accommodations..."
          className="px-2 py-1 outline-none"
        />
        <button type="submit" className="bg-blue-600 text-white px-3 py-1">
          Search
        </button>
      </form>

      <div className="flex space-x-2">
        <button className="px-4 py-1 border rounded text-blue-600 border-blue-600 hover:bg-blue-50">
          Sign In
        </button>
        <button className="px-4 py-1 border rounded bg-blue-600 text-white hover:bg-blue-700">
          Sign Up
        </button>
      </div>
    </header>
  );
};

export default Header;
