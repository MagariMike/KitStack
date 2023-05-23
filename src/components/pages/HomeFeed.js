import React from 'react';
import ShirtCard from '../ShirtCard';
import testPic from "../../assets/mikeProfilePic.jpeg";

const HomeFeed = () => {
  return (
    <div className="bg-gray-100 min-h-screen">
      <div className="container mx-auto p-4">
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center">
            <img className="h-12 w-12 rounded-full" src={testPic} alt="test pic" />
            <h1 className="text-2xl font-bold ml-2">Mike Brewer</h1>
          </div>
          <div>
            <button className="bg-red-500 text-white py-2 px-4 rounded-lg mr-2">Logout</button>
            <button className="bg-blue-700 text-white py-2 px-4 hover:bg-green-500 rounded-lg">Add Shirt</button>
          </div>
        </div>

        <div className="bg-white p-4 rounded-lg shadow-md">
          <h1 className="text-2xl font-bold mb-4">Latest Uploads</h1>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            <ShirtCard />
            <ShirtCard />
            <ShirtCard />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeFeed;
