// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import  {getStorage} from "firebase/storage"


const firebaseConfig = {
  apiKey: "AIzaSyD1teOGGUIUhoUukykwmqKs19azG6nVjKg",
  authDomain: "curiouscab-8520c.firebaseapp.com",
  projectId: "curiouscab-8520c",
  storageBucket: "curiouscab-8520c.appspot.com",
  messagingSenderId: "991728124177",
  appId: "1:991728124177:web:6b95505ffa2e0e27f64cb0",
  measurementId: "G-RSWRC79N13"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const storage = getStorage(app)