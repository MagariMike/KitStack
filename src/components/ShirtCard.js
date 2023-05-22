import firebase from "firebase/compat/app";
import "firebase/compat/firestore";
import "firebase/compat/storage";
import { db } from "../firebase/config.js";
import { collection, getDocs, doc } from "firebase/firestore";
import React, { useState, useEffect } from "react";

const fetchShirtData = async () => {
  const querySnapshot = await getDocs(collection(db, "shirt-uploads"));
  const data = querySnapshot.docs.map((doc) => doc.data());
  console.log(data);
return data
};

const ShirtCard = () => {
  const [shirts, setShirts] = useState([]);
  useEffect(() => {
    setShirts(fetchShirtData());
  // console.log(shirts);
  }, []);
  // return (
  //   <div className="shirt-wrapper">
  //   {shirts.map((shirt, index) => (
  //     <div key={index}>
  //       <h1>{shirt.shirtColour}</h1>
  //       {/* Render other shirt properties here */}
  //     </div>
  //   ))}
  // </div>
  // );      // figure out the info from the varaibale into the variable - TOMORROW
};

export default ShirtCard;









