// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import  {getAuth} from "firebase/auth";
 
const firebaseConfig = {
  apiKey: "AIzaSyC9ecKhTWy9r6oasQ-bAP7f2Up4l_vd0Wc",
  authDomain: "eternal-remembrance-563b3.firebaseapp.com",
  projectId: "eternal-remembrance-563b3",
  storageBucket: "eternal-remembrance-563b3.appspot.com",
  messagingSenderId: "890551952955",
  appId: "1:890551952955:web:80a60397635cea2d6a9e1e",
  measurementId: "G-7533QPCWFR"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export {app, auth};