import {auth,db} from "./config"
import {createUserWithEmailAndPassword,signInWithEmailAndPassword,signOut } from "firebase/auth";
import { doc, setDoc, getDoc } from "firebase/firestore";

export async function signUp(email,password,name){
  try {
    const userCredential = await createUserWithEmailAndPassword(auth, email, password);
    const uid = userCredential.user.uid;

    // Create user profile in Firestore
    await setDoc(doc(db, "users", uid), {
      name: name,
      createdAt: new Date()
    });

    return { uid, name };
  } catch (error) {
    console.error("Sign-up error:", error.message);
    throw error;
  }
}
/**
 * Log in an existing user and fetch their profile
 */
export async function login(email, password) {
  try {
    const userCredential = await signInWithEmailAndPassword(auth, email, password);
    const uid = userCredential.user.uid;

    // Get user profile from Firestore
    const docSnap = await getDoc(doc(db, "users", uid));
    if (docSnap.exists()) {
      return { uid, ...docSnap.data() };
    } else {
      return null;
    }
  } catch (error) {
    console.error("Login error:", error.message);
    throw error;
  }
}

/**
 * Log out the current user
 */
export async function logout() {
  try {
    await signOut(auth);
  } catch (error) {
    console.error("Logout error:", error.message);
    throw error;
  }
}

/**
 * Get the current logged-in user's profile
 */
export async function getProfile(uid) {
  try {
    const docSnap = await getDoc(doc(db, "users", uid));
    return docSnap.exists() ? docSnap.data() : null;
  } catch (error) {
    console.error("Get profile error:", error.message);
    throw error;
  }
}
