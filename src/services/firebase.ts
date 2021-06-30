import firebase from "firebase/app";

import 'firebase/auth';
import 'firebase/database';

const firebaseConfig = {
  apiKey: "AIzaSyAGCR485Fl3CUnHYnO8x1J6P9lTJPIB2NI",
  authDomain: "letmeask-1b0d2.firebaseapp.com",
  databaseURL: "https://letmeask-1b0d2-default-rtdb.firebaseio.com",
  projectId: "letmeask-1b0d2",
  storageBucket: "letmeask-1b0d2.appspot.com",
  messagingSenderId: "177756976425",
  appId: "1:177756976425:web:b898acfbcdea809adeb338"
};

firebase.initializeApp(firebaseConfig);

const auth = firebase.auth();
const database = firebase.database();

export { firebase, auth, database }