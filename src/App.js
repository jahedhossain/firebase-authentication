import React, { useState } from "react";
import * as firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";

import firebaseConfig from "./firebase.config";
firebase.initializeApp(firebaseConfig);

function App() {
  const [login, setLogin] = useState(false);

  var provider = new firebase.auth.GoogleAuthProvider();

  const handlerLogin = () => {
    firebase
      .auth()
      .signInWithPopup(provider)
      .then(user => setLogin(true))
      .catch(err => setLogin(false));
  };
  const handlerLogout = () => {
    firebase
      .auth()
      .signOut()
      .then(user => setLogin(false))
      .catch(err => setLogin(true));
  };
  return (
    <div>
      {login && <h1> your account login successfully </h1>}

      <button onClick={handlerLogin}>Login </button>
      <button onClick={handlerLogout}>Logout</button>
    </div>
  );
}

export default App;
