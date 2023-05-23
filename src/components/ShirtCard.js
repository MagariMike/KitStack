import firebase from "firebase/compat/app";
import "firebase/compat/firestore";
import "firebase/compat/storage";
import { db } from "../firebase/config.js";
import { collection, deleteDoc, getDocs, doc } from "firebase/firestore";
import React, { useState, useEffect } from "react";
const fetchShirtData = async () => {
  const querySnapshot = await getDocs(collection(db, "shirt-uploads"));
  const data = querySnapshot.docs.map((doc) => doc.data());
  console.log(data);
  return data;
};
const handleDelete = async (shirtId) => {
  try {
    await deleteDoc(doc(db, "shirt-uploads", shirtId));
    console.log("Document deleted successfully");
  } catch (error) {
    console.error("Error deleting document: ", error);
  }
};
const ShirtCard = () => {
  const [shirts, setShirts] = useState([]);
  useEffect(() => {
    const fetchShirts = async () => {
      const shirtData = await fetchShirtData();
      setShirts(shirtData);
    };
    fetchShirts();
  }, []);
  return (
    <div>
      {shirts.map((shirt) => (
        <div key={shirt.id}>
          <span onClick={() => handleDelete(shirt.id)}>delete</span>
          <h2>Football Club: {shirt.club}</h2>
          <p>Shirt Colour: {shirt.shirtColour}</p>
          <p>Season: {shirt.season}</p>
        </div>
      ))}
    </div>
  );
};
export default ShirtCard;









