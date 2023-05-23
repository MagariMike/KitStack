import React from "react";
import profilePic from "../../assets/mikeProfilePic.jpeg";
import ShirtCard from "../ShirtCard";

const ProfilePage = () => {
  return (
    <div className="bg-gray-100 min-h-screen py-8">
      <div className="max-w-md mx-auto bg-white p-8 shadow-lg rounded-lg">
        <div className="flex items-center justify-center mb-4">
          <img src={profilePic} alt="Avatar" className="w-24 h-24 rounded-full" />
        </div>
        <div className="text-center">
          <h2 className="text-xl font-bold">Mike Brewer</h2>
          <p className="text-gray-600">Shirts: 5</p>
        </div>
        <div className="mt-8">
          <div className="grid grid-cols-1 gap-4">
            <ShirtCard />
            <ShirtCard />
            <ShirtCard />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;
