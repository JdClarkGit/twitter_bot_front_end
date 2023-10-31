import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function Login() {
  return (
    <div className="login-wrapper">
      <h1>Please Log In</h1>
      <form>
        <label>
          <p>Username</p>
          <input type="text" />
        </label>
        <label>
          <p>Password</p>
          <input type="password" />
        </label>
        <div>
          <button type="submit">Submit</button>
        </div>
      </form>
    </div>
  );
}

export default function AuthForm() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Login />
        {/* Add other routes as needed */}
      </Routes>
    </BrowserRouter>
  );
}
