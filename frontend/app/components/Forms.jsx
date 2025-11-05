"use client"; // only if you're using Next.js 13+ App Router

import React, { useState } from "react";
import "../SytleFiles/Forms.css";
export default function Forms() {
  const [student, setStudent] = useState({
    email: "",
    password: "",
    aadhar: ""
  });

  const [error, setError] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setStudent((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!student.email || !student.password) {
      setError("Please fill in all fields");
      return;
    }

    // Example login check (replace with API call)
    if (student.email === "student@example.com" && student.aadhar.length == 12 && student.password === "12345") {
      alert("Login successful!");
      setError("");
    } else {
      setError("Invalid email or password");
    }
  };
  // if(student.aadhar.length == 12 && student)

  return (
    <div className="login-container">
      <form className="login-form" onSubmit={handleSubmit}>
        <h2>Student Login</h2>

        {error && <p className="error">{error}</p>}

        <label>Email</label>
        <input
          type="email"
          name="email"
          value={student.email}
          onChange={handleChange}
          placeholder="Enter your student email"
        />
        <label for="">Aadhar Number</label>
        <input type="Number"
        name="Aadhar-Number"
        value = {student.aadhar}
        onChange={handleChange}
        placeholder="Enter Your Aadhar Number" />
        <label>Password</label>
        <input
          type="password"
          name="password"
          value={student.password}
          onChange={handleChange}
          placeholder="Enter your password"
        />

        <button className="form-button" type="submit">Login</button>
      </form>
    </div>
  );
}
