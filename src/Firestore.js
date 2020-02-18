import firebase from 'firebase'

var firebaseConfig = {
  apiKey: "AIzaSyDmf51u83_yG-2VSnBqXXaM6iQzTAZ9Z7E",
  authDomain: "kudos-2df2b.firebaseapp.com",
  databaseURL: "https://kudos-2df2b.firebaseio.com",
  projectId: "kudos-2df2b",
  storageBucket: "kudos-2df2b.appspot.com",
  messagingSenderId: "949330521013",
  appId: "1:949330521013:web:e49abbc31b0629e66d07fc",
  measurementId: "G-Z5N7T9FR56"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase;