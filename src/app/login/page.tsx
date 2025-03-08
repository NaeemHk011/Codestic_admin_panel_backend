"use client";
import React, { useRef, useState } from "react";

const Login: React.FC = () => {
  const emailRef = useRef<HTMLInputElement | null>(null);
  const passwordRef = useRef<HTMLInputElement | null>(null);
  const [message, setMessage] = useState<string>("");

  const handleLogin = async () => {
    const userData = {
      email: emailRef.current?.value || "",
      password: passwordRef.current?.value || "",
    };
console.log('static data of login', userData);
    try {
      const response = await fetch("https://codestic-nk-1.vercel.app/api/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(userData),
      });

      const data = await response.json();
      console.log("Server response:", data);
      if (response.ok) {
        console.log("Login successful!");
        localStorage.setItem("token", data.token ?? ""); // Avoid undefined token
        setMessage(data.message);
        if(data.token){
          window.location.href = "/dashboard";
        }
      } else {
        setMessage("Invalid Credentials!");
      }
    } catch (error) {
      setMessage("Server Error!");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-900">
      <div className="bg-gray-800 p-8 rounded-lg shadow-lg w-96">
        <h2 className="text-white text-2xl font-bold text-center mb-6">Login</h2>

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
          onClick={handleLogin}
          className="w-full bg-green-500 hover:bg-green-600 text-white font-semibold py-2 rounded-md transition"
        >
          Login
        </button>

        {message && <p className="text-center text-white mt-4">{message}</p>}
      </div>
    </div>
  );
};

export default Login;
