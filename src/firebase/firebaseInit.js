import firebase from "firebase/app";
import "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBsR2mvc8cWYMETh1ThK9y7vdKhz3uh9Qo",
  authDomain: "fireblogs-4f1f2.firebaseapp.com",
  projectId: "fireblogs-4f1f2",
  storageBucket: "fireblogs-4f1f2.appspot.com",
  messagingSenderId: "820521739815",
  appId: "1:820521739815:web:49394b5ae0e056ee86d002"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const timestamp = firebase.firestore.FieldValue.serverTimestamp;

export {timestamp};
export default firebaseApp.firestore();