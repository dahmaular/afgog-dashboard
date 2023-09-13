import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyBIhGKUJYk2OCEjLkqd0rC94QpgZvc36Ic",
  authDomain: "afgog-1a208.firebaseapp.com",
  projectId: "afgog-1a208",
  storageBucket: "afgog-1a208.appspot.com",
  messagingSenderId: "124475993723",
  appId: "1:124475993723:web:7a40b59a808f51fdcabcde"
};

const app = initializeApp(firebaseConfig);
const storage = getStorage(app);

export default storage;
