import { initializeApp } from 'firebase/app';
import {getAuth} from "firebase/auth";
import {getFirestore} from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyC8O2KdJfkOzgLpgdBoTVP_eEQbfVaq29A",
  authDomain: "chef-mania-438b1.firebaseapp.com",
  projectId: "chef-mania-438b1",
  storageBucket: "chef-mania-438b1.firebasestorage.app",
  messagingSenderId: "26692312019",
  appId: "1:26692312019:web:e6384ed3cfc464077bad26",
  measurementId: "G-34LKL0914D"
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
export const auth = getAuth(app);