import React, { useState, useEffect } from "react";
import firebase from "firebase/compat/app";
import "firebase/compat/firestore";
import "firebase/compat/storage"; // Import the Firebase Storage module

const firebaseConfig = {
  apiKey: "AIzaSyCxibzvDmX0zxx-mSTAiU1nSsmtGsnLTIo",
  authDomain: "kitstack-66287.firebaseapp.com",
  databaseURL: "https://kitstack-66287-default-rtdb.europe-west1.firebasedatabase.app/",
  projectId: "kitstack-66287",
  storageBucket: "kitstack-66287.appspot.com",
  messagingSenderId: "475586925445",
  appId: "1:475586925445:web:067c9033fbe28479caaaec",
};

const fetchShirtData = (setShirtData) => {
  const firestore = firebase.firestore();
  const collectionRef = firestore.collection("shirt-uploads");
  const unsubscribe = collectionRef.onSnapshot((snapshot) => {
    const data = snapshot.docs.map((doc) => doc.data());
    setShirtData(data);
  });
  // Cleanup listener
  return () => unsubscribe();
};

const uploadImage = async (file) => {
  const storageRef = firebase.storage().ref();
  const fileRef = storageRef.child(file.name);
  await fileRef.put(file); // Upload the file to Firebase Storage
  const imageURL = await fileRef.getDownloadURL(); // Get the download URL of the uploaded image
  return imageURL;
};

const ShirtCard = () => {
  const [shirtData, setShirtData] = useState(null);

  useEffect(() => {
    // Initialize Firebase app if not already done
    if (!firebase.apps.length) {
      firebase.initializeApp(firebaseConfig);
    }

    const unsubscribe = fetchShirtData(setShirtData);

    // Cleanup on component unmount
    return () => {
      unsubscribe();
    };
  }, []);

  const handleImageUpload = async (event) => {
    const file = event.target.files[0];
    const imageURL = await uploadImage(file);
    // Use the imageURL to update Firestore or perform other operations
    // For simplicity, let's assume you update the Firestore document with the imageURL
    const firestore = firebase.firestore();
    const collectionRef = firestore.collection("shirt-uploads");
    await collectionRef.doc().set({ imageURL });
  };

  return (
    <div className="shirt-wrapper">
      {shirtData && (
        <>
          <img id="shirt-image" src={shirtData[0].imageURL} alt="Shirt" />
          <h5>Club: {shirtData[0].club}</h5>
          <h5>Color: {shirtData[0].color}</h5>
          <h5>Season: {shirtData[0].season}</h5>
        </>
      )}
      <input type="file" onChange={handleImageUpload} />
    </div>
  );
};

export default ShirtCard;