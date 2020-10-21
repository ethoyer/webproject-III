// import firebase from 'firebase';

// const firebaseConfig = {
//   apiKey: "AIzaSyAxM264qthYVjnwJPcMJNYu2nueBAmpY_4",
//   authDomain: "web-iii-a91c8.firebaseapp.com",
//   databaseURL: "https://web-iii-a91c8.firebaseio.com",
//   projectId: "web-iii-a91c8",
//   storageBucket: "web-iii-a91c8.appspot.com",
//   messagingSenderId: "853961489045",
//   appId: "1:853961489045:web:789a743d228cc0b252b99c",
//   measurementId: "G-T9LRESEJ1M"
// }

// firebase.initializeApp(firebaseConfig);

// export default firebaseConfig;


// import firebase from "firebase";

// const firebaseConfig = firebase.initializeApp({
//   apiKey: "AIzaSyAxM264qthYVjnwJPcMJNYu2nueBAmpY_4",
//   authDomain: "web-iii-a91c8.firebaseapp.com",
//   databaseURL: "https://web-iii-a91c8.firebaseio.com",
//   projectId: "web-iii-a91c8",
//   storageBucket: "web-iii-a91c8.appspot.com",
//   messagingSenderId: "853961489045",
//   appId: "1:853961489045:web:789a743d228cc0b252b99c",
//   measurementId: "G-T9LRESEJ1M"
// });

// const db = firebaseConfig.firestore();

// export default firebaseConfig;


import * as fb from 'firebase';
import 'firebase/firestore'

fb.initializeApp({
  apiKey: "AIzaSyAxM264qthYVjnwJPcMJNYu2nueBAmpY_4",
  authDomain: "web-iii-a91c8.firebaseapp.com",
  databaseURL: "https://web-iii-a91c8.firebaseio.com",
  projectId: "web-iii-a91c8",
  storageBucket: "web-iii-a91c8.appspot.com",
  messagingSenderId: "853961489045",
  appId: "1:853961489045:web:789a743d228cc0b252b99c",
  measurementId: "G-T9LRESEJ1M"
});


let db = fb.firestore()


export default {
  fb, db
}