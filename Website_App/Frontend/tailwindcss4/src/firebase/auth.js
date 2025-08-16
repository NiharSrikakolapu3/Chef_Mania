// authFunctions.js
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut } from "firebase/auth";
import { auth, db } from "./config";
import { doc, setDoc, getDoc, Timestamp } from "firebase/firestore";

/**
 * Sign up a new user
 */
export const signUp = async (email, password, name) => {
  try {
    const userCredential = await createUserWithEmailAndPassword(auth, email, password);
    const uid = userCredential.user.uid;

    console.log("User created:", uid);

    // 2. Firestore document for the new user
    const userDocRef = doc(db, "users", uid);
    await setDoc(userDocRef, {
      name: name,
      email: email,
      createdAt: Timestamp.fromDate(new Date()),
    });


    
    return { uid, name, email };

  } catch (error) {
    console.error("Error signing up:", error.code, error.message);
    throw error;
  }
};

/**
 * Log in an existing user and fetch their profile
 */
export async function login(email, password) {
  try {
    const userCredential = await signInWithEmailAndPassword(auth, email, password);
    const uid = userCredential.user.uid;

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

