import React, { useState } from "react";
import firebase from "firebase/app";
import "firebase/firestore";
import firebaseConfig from "./firebaseConfig";
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
const ShirtCard = () => {
  const [shirtData, setShirtData] = useState(null);
  // Initialize Firebase app if not already done
  if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
  }
  // Fetch data on component mount
  useState(() => {
    const unsubscribe = fetchShirtData(setShirtData);
    return () => unsubscribe();
  }, []);
  return (
    <div className="shirt-wrapper">
      <img id="test-pic" src="'" alt="test pic" />
      {shirtData && (
        <>
          <h5>Club: {shirtData[0].club}</h5>
          <h5>Color: {shirtData[0].color}</h5>
          <h5>Season: {shirtData[0].season}</h5>
        </>
      )}
    </div>
  );
};
export default ShirtCard;