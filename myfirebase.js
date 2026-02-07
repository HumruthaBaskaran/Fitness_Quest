import * as firebase from "firebase/app";
import { getAuth } from "firebase/auth";
const firebaseConfig = {
  apiKey: "AIzaSyAK803SaFCbP7p1wMpd04wQizdc3_APoko",
  authDomain: "recipefinder-51f17.firebaseapp.com",
  projectId: "recipefinder-51f17",
  storageBucket: "recipefinder-51f17.appspot.com",
  messagingSenderId: "587826027379",
  appId: "1:587826027379:web:bcdf8ae4b4fdafc4fc0306",
};
if (!firebase.length) {
  const app = firebase.initializeApp(firebaseConfig);
  const auth = getAuth(app);
}
// const app = firebase.initializeApp(firebaseConfig);
