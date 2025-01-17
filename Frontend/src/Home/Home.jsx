import React from "react";
import Navbar from "../Component/Navbar";
import GarageMap from "../Component/GarageMap";

const Home = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar/>

      <section className="bg-blue-100 text-center py-16 relative">
        <img
          src="/Images/Car.jpg"
          alt="Hero Car"
          className="absolute inset-0 w-full h-full object-cover opacity-30"
        />
        <h1 className="text-4xl font-bold text-blue-700 mb-4 relative">
          Find Nearby Garages and Spare Parts
        </h1>
        <p className="text-lg text-blue-600 mb-8 relative">
          Locate trusted services with ease using V-CARE.
        </p>
      </section>

          
      <section className="container mx-auto py-16 px-4 flex justify-center items-center">
        <div className="grid md:grid-cols-2 gap-8 max-w-4xl">
          {/* Locate Garages Easily */}
          <div className="bg-white p-6 rounded-lg shadow hover:shadow-lg">
            <img
              src="/Images/Garage.jpg"
              alt="Garage"
              className="w-full h-48 object-cover rounded-lg mb-4"
            />
            <h3 className="text-2xl font-bold mb-4 text-blue-700">
              Locate Garages Easily
            </h3>
            <p className="text-gray-600 mb-6">
              Find trusted garages near your location for fast and reliable service.
            </p>
            <button className="bg-blue-600 text-white px-4 py-2 rounded-lg shadow hover:bg-blue-700">
              Find Garages
            </button>
          </div>

    
          <div className="bg-white p-6 rounded-lg shadow hover:shadow-lg">
            <img
              src="/Images/Spare.jpg"
              alt="Spare Parts"
              className="w-full h-48 object-cover rounded-lg mb-4"
            />
            <h3 className="text-2xl font-bold mb-4 text-blue-700">
              Get Spare Parts Quickly
            </h3>
            <p className="text-gray-600 mb-6">
              Search for the best-priced and quality spare parts in your area.
            </p>
            <button className="bg-blue-600 text-white px-4 py-2 rounded-lg shadow hover:bg-blue-700">
              Find Spare Parts
            </button>
          </div>
        </div>
      </section>

       
      {/* Map Section */}
      <section className="bg-gray-100 py-16">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold text-blue-700 mb-8">
            Explore Nearby Services
          </h2>
          <div className="w-full h-96 bg-gray-300 rounded-lg">
            <GarageMap/>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-blue-600 text-white py-4">
        <div className="container mx-auto text-center">
          <p>&copy; 2024 V-CARE. All Rights Reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default Home;
