import * as firebase from 'firebase';

require('@firebase/firestore')

var firebaseConfig = {
  apiKey: "AIzaSyAB6GUcQf6jeZnsWSKeOrxR3vd9khrFZ_w",
  authDomain: "fruit-catcher-5b954.firebaseapp.com",
  databaseURL: "https://fruit-catcher-5b954.firebaseio.com",
  projectId: "fruit-catcher-5b954",
  storageBucket: "fruit-catcher-5b954.appspot.com",
  messagingSenderId: "352666628665",
  appId: "1:352666628665:web:4cfff768f2c1fdcb4053e8"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase.firestore()