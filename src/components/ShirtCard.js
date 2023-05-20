import React, { useState, useEffect } from "react";
import firebase from "firebase/compat/app";
import "firebase/compat/firestore";

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
