// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDcAWm7m01FZwVRU-YlSgQrYrY8Z_Hu9PM",
  authDomain: "portfolio-bd703.firebaseapp.com",
  projectId: "portfolio-bd703",
  storageBucket: "portfolio-bd703.appspot.com",
  messagingSenderId: "403734269197",
  appId: "1:403734269197:web:9a2e0b8e2f488244a43444",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
