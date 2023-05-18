import React, { useState } from "react";
import { addDoc, collection, doc, setDoc } from "firebase/firestore"; 
import KitStackLogo from "../../assets/KitStack-logo.png";
import "../../styles/pages/add-shirt.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faImage } from "@fortawesome/free-solid-svg-icons";
import useFetch from "../../hooks/useFetch";
import { db } from "../../firebase/config"
import { getAuth } from "firebase/auth";
import { getStorage, ref, uploadBytes } from "firebase/storage";

const AddShirtPage = () => {
  const [club, setClub] = useState("");
  const [shirtColour, setShirtColour] = useState("");
  const [season, setSeason] = useState("");
  const [image, setImage] = useState(null);
  const user = getAuth().currentUser
  const userId = user ? user.uid : null;

  const storage = getStorage();
  const fileName = setImage;
  const filePath = `shirt-uploads/${fileName}`
  const storageRef = ref(storage, filePath);

    const handleSubmit = (e) => {
      e.preventDefault();
      // Add a new document in collection "cities"
        const docRef = addDoc(collection(db, "shirt-uploads"), {
        club: club,
        shirtColour: shirtColour, 
        season: season,
        
      });
      console.log(shirtColour, season, club);

    };

  const handleImageCapture = (e) => {
    const selectedImage = e.target.files[0];
    setImage(selectedImage);
  };

  // 'file' comes from the Blob or File API
  uploadBytes(storageRef, image).then((snapshot) => {
  console.log('Uploaded a blob or file!');
});

  return (
    <div className="AddShirtForm">
      <div>
        <img src={KitStackLogo} alt="Kitstack App Logo" />
        <p>Create an item</p>
      </div>
      <form onSubmit={handleSubmit}>
        <div className="ImageCapture">
          <label>
            <FontAwesomeIcon className="UploadImageIcon" icon={faImage} />
          </label>
          <input
            type="file"
            name="image"
            id="image"
            accept="image/*"
            onChange={handleImageCapture}
          />
        </div>
        <div>
          <label htmlFor="club">Club</label>
          <input
            type="text"
            name="club"
            id="club"
            placeholder="Cambridge United"
            value={club}
            onChange={(e) => setClub(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="shirtColour">Shirt Colour</label>
          <input
            type="text"
            name="shirtColour"
            id="shirtColour"
            placeholder="Yellow"
            value={shirtColour}
            onChange={(e) => setShirtColour(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="season">Season</label>
          <input
            type="text"
            name="season"
            id="season"
            placeholder="2022/23"
            value={season}
            onChange={(e) => setSeason(e.target.value)}
          />
        </div>
        <button type="submit" name="submit" id="submit" value="Submit">
          Submit
        </button>
      </form>
    </div>
  );
};

export default AddShirtPage;
