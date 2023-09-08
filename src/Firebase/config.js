import "firebase/firestore";
import app from "firebase";
const firebaseConfig = {
  apiKey: "AIzaSyA3Qz-Z5PrPxWemXlnzi1bz-n708uSEB0A",
  authDomain: "job-listing-9d614.firebaseapp.com",
  projectId: "job-listing-9d614",
  storageBucket: "job-listing-9d614.appspot.com",
  messagingSenderId: "868820603639",
  appId: "1:868820603639:web:25e41c2de7ab4fec1939f2",
};

// Initialize Firebase
const firebase = app.initializeApp(firebaseConfig);
const firestore = firebase.firestore();

export { firebase, firestore, app };
