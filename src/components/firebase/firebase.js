import app from "firebase/app";
import "firebase/auth";
import { useHistory } from "react-router-dom";

const config = {
  apiKey: "AIzaSyDw5XAuywJr_99S2QjEtYDhtFTwCNAnmTs",
  authDomain: "controlelocaltrabalho.firebaseapp.com",
  databaseURL: "https://login-4de2e.firebaseio.com",
  projectId: "controlelocaltrabalho",
  storageBucket: "controlelocaltrabalho.appspot.com",
  messagingSenderId: "71128841841",
  appId: "1:71128841841:web:eef417438fd9b8a32ee5d0",

};



class Firebase {
  constructor() {
    app.initializeApp(config);
    this.auth = app.auth();
  }

  login(email, password) {
    return this.auth.signInWithEmailAndPassword(email, password);
  }

  logout() {
    return this.auth.signOut();
  }

  async register(name, email, password) {
    await this.auth.createUserWithEmailAndPassword(email, password);
    return this.auth.currentUser.updateProfile({});
  }

  isInitialized() {
    return new Promise((email) => {
      app.auth().onAuthStateChanged((email) => {
        let islloged = useHistory();
        if (email !== null) {
          console.log(islloged);
        } else {
        }
      });
    });
  }

  getCurrentUsername() {
    console.log(this.auth.currentUser);
    return this.auth.currentUser;
  }
}

export default new Firebase();
