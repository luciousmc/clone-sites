import firebase from 'firebase';

const firebaseConfig = {
  apiKey: "AIzaSyBHrdnuB9BQyQg2O30TTQ6MDwGfpAmL4EU",
  authDomain: "marmazonyt.firebaseapp.com",
  projectId: "marmazonyt",
  storageBucket: "marmazonyt.appspot.com",
  messagingSenderId: "163726438781",
  appId: "1:163726438781:web:695d09356dce7959761c14"
};

const app = !firebase.apps.length
  ? firebase.initializeApp(firebaseConfig)
  : firebase.app();

  const db = app.firestore();

  export default db;
