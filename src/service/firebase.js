import firebase from  "firebase/app";
import "firebase/database"
const firebaseConfig = {
  apiKey: "AIzaSyBgnP2liNn9hICwIeKrvEhRBql6Wu5kbNM",
  authDomain: "pokemon-game-60038.firebaseapp.com",
  databaseURL: "https://pokemon-game-60038-default-rtdb.firebaseio.com",
  projectId: "pokemon-game-60038",
  storageBucket: "pokemon-game-60038.appspot.com",
  messagingSenderId: "461245803639",
  appId: "1:461245803639:web:0582c67a6d004fb3c06a72"
};
firebase.initializeApp(firebaseConfig);
export const fire =firebase;
export const database = fire.database();
export default  database;