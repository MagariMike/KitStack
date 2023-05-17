import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getDatabase, ref, set, update } from "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyCxibzvDmX0zxx-mSTAiU1nSsmtGsnLTIo",
  authDomain: "kitstack-66287.firebaseapp.com",
  databaseURL: "https://kitstack-66287-default-rtdb.europe-west1.firebasedatabase.app/",
  projectId: "kitstack-66287",
  storageBucket: "kitstack-66287.appspot.com",
  messagingSenderId: "475586925445",
  appId: "1:475586925445:web:067c9033fbe28479caaaec",
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();
export { auth, provider };

const writeUserData = async (userId, name, email, imageUrl) => {
  try {
    const db = getDatabase();
    const reference = ref(db, 'users/' + userId);
    const shirtNumber = ref(db, 'users/' + userId + '/shirts') 
    await set(reference, {
      username: name,
      email: email,
      profile_picture: imageUrl
    });

    console.log('Data written successfully!');
  } catch (error) {
    console.error('Error writing data:', error);
  }
};

const userId = 'yourUserId';
const name = 'John Doe';
const email = 'john@example.com';
const imageUrl = 'https://example.com/profile.jpg';

writeUserData(userId, name, email, imageUrl);
