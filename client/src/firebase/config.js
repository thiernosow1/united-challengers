// <!-- The core Firebase JS SDK is always required and must be listed first -->
import * as firebase from "firebase/app";

// // <!-- TODO: Add SDKs for Firebase products that you want to use
//      https://firebase.google.com/docs/web/setup#available-libraries -->

import "firebase/auth";
import "firebase/firestore";
import "firebase/storage";

{
  /* // Your web app's Firebase configuration */
}
const firebaseConfig = {
  apiKey: "AIzaSyBXQP5YAz5Ky7Rr4rCKLYd17LRJPDcWU0Q",
  authDomain: "daily-art-auth.firebaseapp.com",
  databaseURL: "https://daily-art-auth.firebaseio.com",
  projectId: "daily-art-auth",
  storageBucket: "daily-art-auth.appspot.com",
  messagingSenderId: "154489471985",
  appId: "1:154489471985:web:811fb5dcd4bd26fa66ba50",
  measurementId: "G-PPS11THN92",
};

firebase.initializeApp(firebaseConfig);
firebase.analytics();
export const storage = firebase.storage();
export const auth = firebase.auth();

export const db = firebase.firestore();
export default firebase;
