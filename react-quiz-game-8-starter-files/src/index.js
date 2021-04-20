import React from "react";
import ReactDOM from "react-dom";
import App from "./app";
import { db } from "./data/firebase";
import "./index.css";

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.querySelector("#root")
);

async function readAllUsers() {
  try {
    const snapshot = await db.collection("users").get();

    console.log(`Found ${snapshot.size}x user(s).`);

    const docs = snapshot.docs;
    docs.forEach((docSnapshot) => {
      console.log(`ID: ${docSnapshot.id}`);
      console.log(`Name: ${docSnapshot.get("firstName")}`);
      console.log(`High Score: ${docSnapshot.get("highScore")}`);
      console.log(docSnapshot.id, docSnapshot.data());
    });

  } catch (err){
    console.error(err);
  }
}


readAllUsers();

