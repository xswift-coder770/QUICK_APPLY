 
import { auth, provider } from "../firebase";
import { signInWithPopup } from "firebase/auth";

export const signInWithGoogle = async () => {
  try {
    const result = await signInWithPopup(auth, provider);
    console.log("Logged in:", result.user);
    return result.user;
  } catch (error) {
    console.error("Google login error", error);
  }
};
