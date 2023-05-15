import { useState, useEffect } from "react";
import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';

const useFetch = (collectionPath) => {
  const [data, setData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const querySnapshot = await firebase.firestore().collection(collectionPath).get();
        const fetchedData = querySnapshot.docs.map((doc) => doc.data());
        setData(fetchedData);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, [collectionPath]);

  return { data };
};

export default useFetch;
