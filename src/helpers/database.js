import Firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyBRbNTEDEgKbL987uH3cMicYRl4wYlbIpY",
  authDomain: "pucomputing.firebaseapp.com",
  databaseURL: "https://pucomputing.firebaseio.com",
  projectId: "pucomputing",
  storageBucket: "pucomputing.appspot.com",
  messagingSenderId: "463119914837",
  appId: "1:463119914837:web:b4cd746637cbf0480d41dc",
  measurementId: "G-6F3K4J4T24"
};

Firebase.initializeApp(firebaseConfig);

export default Firebase.database();