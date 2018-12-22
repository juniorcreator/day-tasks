import firebase from "firebase"
import firestore from "firebase/firestore"
// Initialize Firebase
  var config = {
    apiKey: "AIzaSyDHcUELSN1_Ifs7T7vK4mAteA23FqDjsLw",
    authDomain: "day-tasks-e4f20.firebaseapp.com",
    databaseURL: "https://day-tasks-e4f20.firebaseio.com",
    projectId: "day-tasks-e4f20",
    storageBucket: "day-tasks-e4f20.appspot.com",
    messagingSenderId: "511648156258"
  };
  const firebaseApp = firebase.initializeApp(config);

  /// if has some errors
firebaseApp.firestore().settings({timestampsInSnapshots: true });

export default firebaseApp.firestore();