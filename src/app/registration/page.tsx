"use client";
import React, { useRef, useState } from "react";

const SignUp: React.FC = () => {
  const nameRef = useRef<HTMLInputElement | null>(null);
  const emailRef = useRef<HTMLInputElement | null>(null);
  const passwordRef = useRef<HTMLInputElement | null>(null);
  const [message, setMessage] = useState<string>("");

  const handleSignup = async () => {
    if (!nameRef.current || !emailRef.current || !passwordRef.current) return;

    const userData = {
      name: nameRef.current.value,
      email: emailRef.current.value,
      password: passwordRef.current.value,
    };

    console.log('static data arha he: ' + userData)
    try {
      const response = await fetch("https://codestic-nk-1.vercel.app/api/signup", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(userData),
      });

      const data = await response.json();
      console.log('api k response men yeh arha he', data);
      if (response.ok) {
        setMessage(data.message);
      } else {
        setMessage("Signup Failed!");
      }
    } catch (error) {
      setMessage("Server Error!");
    }
  };

  return (
    <div className="flex items-center justify-center bg-gray-900 h-screen">
      <div className="bg-gray-800 p-8 rounded-lg shadow-lg w-96">
        <h2 className="text-white text-2xl font-bold text-center mb-6">Sign Up</h2>

        <input
          type="text"
          ref={nameRef}
          placeholder="Name"
          className="w-full p-3 mb-4 border rounded-md bg-gray-700 text-white"
        />
        <input
          type="email"
          ref={emailRef}
          placeholder="Email"
          className="w-full p-3 mb-4 border rounded-md bg-gray-700 text-white"
        />
        <input
          type="password"
          ref={passwordRef}
          placeholder="Password"
          className="w-full p-3 mb-4 border rounded-md bg-gray-700 text-white"
        />

        <button
          onClick={handleSignup}
          className="w-full bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 rounded-md transition"
        >
          Sign Up
        </button>

        {message && <p className="text-center text-white mt-4">{message}</p>}
      </div>
    </div>
  );
};

export default SignUp;
