import firebase from "firebase/app";
import "firebase/firestore";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyAaFfJ6QC2IGI6K5nuPq3fYi3WtJssGsIM",
    authDomain: "app-design-2021.firebaseapp.com",
    projectId: "app-design-2021",
    storageBucket: "app-design-2021.appspot.com",
    messagingSenderId: "574262579243",
    appId: "1:574262579243:web:c4823268cde405a3ff9a6e",
    measurementId: "G-SFH707NXJ6"
  };

  if (!firebaseConfig.apiKey) throw new Error("Missing firebase credential: apiKey");
  if (!firebaseConfig.authDomain) throw new Error("Missing firebase credential: authDomain");
  if (!firebaseConfig.projectId) throw new Error("Missing firebase credential: projectId");
  if (!firebaseConfig.storageBucket) throw new Error("Missing firebase credential: storageBucket");
  if (!firebaseConfig.messagingSenderId) throw new Error("Missing firebase credential: messagingSenderId");
  if (!firebaseConfig.appId) throw new Error("Missing firebase credential: appId");
  if (!firebaseConfig.measurementId) throw new Error("Missing firebase credential: measurementId");
  
  firebase.initializeApp(firebaseConfig);

  const db = firebase.firestore();

  export {db, firebase};