import * as firebase from 'firebase';
import firestore from 'firebase/firestore'

firebase.initializeApp({
  apiKey:"AIzaSyCkqFlKi6DvN58h_oug2TnK9uEtGXqOdQk",
  authDomain: "budgetbuilder-5d956.firebaseapp.com",
  projectId: "budgetbuilder-5d956"
});

const db = firebase.firestore();

export default db;
