// src/components/AuthForm.jsx
import { useState } from "react";
import { auth, googleProvider } from "../firebase";
import {
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  sendPasswordResetEmail,
  signInWithPopup,
} from "firebase/auth";

export default function AuthForm({ type }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleEmailAuth = async (e) => {
    e.preventDefault();
    try {
      if (type === "login") {
        await signInWithEmailAndPassword(auth, email, password);
        alert("Logged in successfully!");
      } else {
        await createUserWithEmailAndPassword(auth, email, password);
        alert("Registered successfully!");
      }
    } catch (err) {
      alert(err.message);
    }
  };

  const handleGoogleLogin = async () => {
    try {
      await signInWithPopup(auth, googleProvider);
      alert("Google login successful!");
    } catch (err) {
      alert(err.message);
    }
  };

  const handleResetPassword = async () => {
    try {
      await sendPasswordResetEmail(auth, email);
      alert("Password reset email sent!");
    } catch (err) {
      alert(err.message);
    }
  };

  return (
    <div className="bg-white text-black p-6 rounded-md w-full max-w-md mx-auto mt-20 shadow-lg">
      <h2 className="text-2xl font-bold mb-4">
        {type === "login" ? "Login" : "Register"}
      </h2>
      <form onSubmit={handleEmailAuth} className="space-y-4">
        <input
          type="email"
          placeholder="Email"
          className="w-full border p-2 rounded"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <input
          type="password"
          placeholder="Password"
          className="w-full border p-2 rounded"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <button
          type="submit"
          className="w-full bg-black text-white py-2 rounded"
        >
          {type === "login" ? "Login" : "Register"}
        </button>
      </form>

      {type === "login" && (
        <div className="mt-4 text-sm text-blue-500 cursor-pointer" onClick={handleResetPassword}>
          Forgot Password?
        </div>
      )}

      <div className="mt-6">
        <button
          className="w-full bg-red-500 text-white py-2 rounded"
          onClick={handleGoogleLogin}
        >
          Continue with Google
        </button>
      </div>
    </div>
  );
}
