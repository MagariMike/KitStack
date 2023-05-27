import firebase from "firebase/compat/app";
import "firebase/compat/firestore";
import "firebase/compat/storage";
import { db } from "../firebase/config.js";
import { collection, deleteDoc, getDocs, doc } from "firebase/firestore";
import React, { useState, useEffect } from "react";
import { faTrashCan } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";


const fetchShirtData = async () => {
  const querySnapshot = await getDocs(collection(db, "shirt-uploads"));
  const data = querySnapshot.docs.map((doc) => doc.data());

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
    <div className="flex flex-col">
    {shirts.map((shirt, index) => (
      <div
        key={index}
        className="relative bg-gray-100 max-w-md mx-100 p-6 mb-4 h-48 bg-white rounded-lg shadow-md"
      >
        <h2 className="font-bold text-lg mb-2">Football Club: {shirt.club}</h2>
        <p className="mb-2">Shirt Colour: {shirt.shirtColour}</p>
        <p className="mb-2">Season: {shirt.season}</p>
        <span
          onClick={() => handleDelete(shirt.id)}
          className="absolute bottom-0 right-0 cursor-pointer text-red-500 p-2"
        >
          <FontAwesomeIcon icon={faTrashCan} />
        </span>
      </div>
    ))}
  </div>
  );
};
export default ShirtCard;









