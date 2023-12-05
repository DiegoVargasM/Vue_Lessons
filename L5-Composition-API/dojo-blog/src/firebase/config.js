import firebase from "firebase/app";
import "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyA90c_nkQbEO4UAFdF7vo3VZkD9-LpYcVg",
  authDomain: "vue-firebase-sites-59b71.firebaseapp.com",
  projectId: "vue-firebase-sites-59b71",
  storageBucket: "vue-firebase-sites-59b71.appspot.com",
  messagingSenderId: "392407295641",
  appId: "1:392407295641:web:b9edde446c075989d53a08",
};

// init firebase
firebase.initializeApp(firebaseConfig);

// init firestore service
const projectFirestore = firebase.firestore();

export { projectFirestore };
