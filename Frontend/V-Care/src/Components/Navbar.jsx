import React from "react";

export default function Navbar() {
  return (
    <header className="bg-blue-600 text-white py-4 shadow-md">
      <div className="container mx-auto flex justify-between items-center px-4">
        <div className="text-2xl font-bold">V-CARE</div>
        <nav>
          <ul className="flex space-x-11">
            <li><a href="#home" className="hover:text-gray-200">Home</a></li>
            <li><a href="#garages" className="hover:text-gray-200">Garages</a></li>
            <li><a href="#spare-parts" className="hover:text-gray-200">Spare Parts</a></li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

