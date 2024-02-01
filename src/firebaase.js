// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAz_Bwrb-Z4SgiIoDnSp22WKGLp4VyU1Ac",
  authDomain: "poposal-web.firebaseapp.com",
  projectId: "poposal-web",
  storageBucket: "poposal-web.appspot.com",
  messagingSenderId: "294642902662",
  appId: "1:294642902662:web:c6d0ad50ddad9d3e7c1307",
  measurementId: "G-MPC9YZXB19"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const analytics = getAnalytics(app);

export const db = getFirestore(app)