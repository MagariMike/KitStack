import React, { useState } from "react";
import { addDoc, collection, doc, setDoc } from "firebase/firestore";
import KitStackLogo from "../../assets/KitStack-logo.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faImage } from "@fortawesome/free-solid-svg-icons";
import useFetch from "../../hooks/useFetch";
import { db } from "../../firebase/config";
import { getAuth } from "firebase/auth";
import { getStorage, ref, uploadBytes } from "firebase/storage";

const AddShirtPage = () => {
  const [club, setClub] = useState("");
  const [shirtColour, setShirtColour] = useState("");
  const [season, setSeason] = useState("");
  const [image, setImage] = useState("");
  const user = getAuth().currentUser;
  const userId = user ? user.uid : null;

  const storage = getStorage();
  const filePath = `shirt-uploads/${image}`;
  const storageRef = ref(storage, filePath);
  console.log(image.name);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add a new document in collection "shirt-uploads"
    const docRef = addDoc(collection(db, "shirt-uploads"), {
      club: club,
      shirtColour: shirtColour,
      season: season,
    });
    console.log(shirtColour, season, club);
  };

  const handleImageCapture = (e) => {
    if (handleImageCapture) {
      const selectedImage = e.target.files[0];
      setImage(selectedImage.name);
    }
  };

  uploadBytes(storageRef, image).then((snapshot) => {
    console.log("Uploaded a blob or file!");
  });

  return (
    <div className="bg-gray-100 min-h-screen py-8">
       <div className="max-w-md mx-auto p-6 bg-white rounded-lg shadow-md ">
      <div className="mb-4">
        <img src={KitStackLogo} alt="Kitstack App Logo" className="mx-auto" />
        <p className="text-center">Create an item</p>
      </div>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label htmlFor="image" className="block">
            <FontAwesomeIcon className="text-gray-300 text-8xl mb-5" icon={faImage} />
          </label>
          <input
            type="file"
            name="image"
            id="image"
            accept="image/*"
            onChange={handleImageCapture}
          />
        </div>
        <div className="mb-4">
          <label htmlFor="club" className="block">
            Club
          </label>
          <input
            type="text"
            name="club"
            id="club"
            placeholder="Cambridge United"
            value={club}
            onChange={(e) => setClub(e.target.value)}
            className="border rounded-lg py-2 px-3 w-full"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="shirtColour" className="block">
            Shirt Colour
          </label>
          <input
            type="text"
            name="shirtColour"
            id="shirtColour"
            placeholder="Yellow"
            value={shirtColour}
            onChange={(e) => setShirtColour(e.target.value)}
            className="border rounded-lg py-2 px-3 w-full"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="season" className="block">
            Season
          </label>
          <input
            type="text"
            name="season"
            id="season"
            placeholder="2022/23"
            value={season}
            onChange={(e) => setSeason(e.target.value)}
            className="border rounded-lg py-2 px-3 w-full"
          />
        </div>
        <button
          type="submit"
          name="submit"
          id="submit"
          value="Submit"
          className="bg-blue-700 hover:bg-green-500 text-white py-2 px-4 rounded-lg">
          Submit
        </button>
      </form>
    </div>
    </div>
   
  );
};

export default AddShirtPage;
