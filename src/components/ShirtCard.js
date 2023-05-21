import React, { useState, useEffect } from "react";
import firebase from "firebase/compat/app";
import "firebase/compat/firestore";
import "firebase/compat/storage"; // Import the Firebase Storage module
import { db } from "../firebase/config.js"
import { collection, getDocs, query } from "firebase/firestore"

  const fetchShirtData = () => {
    const shirtRef = collection(db, "shirtUploads")
    const shirtQuery = query(shirtRef)
    const shirtSnapshot = getDocs(shirtQuery)
    console.log(shirtSnapshot)
    console.log(shirtQuery)
  
  return (
    <div className="shirt-wrapper">
      <input type="file" onChange={fetchShirtData} />
    </div>
 );
}

  export default fetchShirtData;