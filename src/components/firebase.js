import app from "firebase/app";
import "firebase/auth";
import "firebase/firebase-firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBKe15jDJOjs162ET_Pj3FxyfVkXPC5cYk",
  authDomain: "here-360c9.firebaseapp.com",
  databaseURL: "https://here-360c9.firebaseio.com",
  projectId: "here-360c9",
  storageBucket: "here-360c9.appspot.com",
  messagingSenderId: "1072229486553",
  appId: "1:1072229486553:web:b71b9e83995d89511e13c8",
  measurementId: "G-ETJP40QM17"
};
// app.initializeApp(firebaseConfig);

class Firebase {
  constructor() {
    app.initializeApp(firebaseConfig);
    this.auth = app.auth();
    this.database = app.firestore();
  }

  //Registra un usuario
  async register(name, email, password) {
    await this.auth.createUserWithEmailAndPassword(email, password);
    return this.auth.currentUser.updateProfile({
      displayName: name
    });
  }

  //Inicia sesion del usuario
  login(email, password) {
    return this.auth.signInWithEmailAndPassword(email, password);
  }

  //Cierra sesion del usuario
  logout() {
    return this.auth.signOut();
  }

  isInitialized() {
    return new Promise(resolve => {
      this.auth.onAuthStateChanged(resolve)
    })
  }

  getCurrentUsername(){
    return this.auth.currentUser && this.auth.currentUser.displayName
  }
  
}

export default new Firebase();
