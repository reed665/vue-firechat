import firebase from 'firebase'
import firestore from 'firebase/firestore'

// Initialize Firebase
var config = {
  apiKey: "AIzaSyAw-O1X44E1W9popNhqPBgBJafqjgZ8sxw",
  authDomain: "vue-firechat-ba073.firebaseapp.com",
  databaseURL: "https://vue-firechat-ba073.firebaseio.com",
  projectId: "vue-firechat-ba073",
  storageBucket: "vue-firechat-ba073.appspot.com",
  messagingSenderId: "843554020491"
};
const firebaseApp = firebase.initializeApp(config);

export default firebaseApp.firestore()
