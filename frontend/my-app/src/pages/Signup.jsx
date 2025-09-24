import { useState } from "react";
import { signup } from "../services/auth";

export default function Signup() {
  const [form, setForm] = useState({email: "", password: "" });

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await signup(form);
      alert("Signup successful! Please login.");
      window.location.href = "/login";
    } catch {
      alert("Error signing up");
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Signup</h2>
      {/* <input name="username" placeholder="Username" onChange={handleChange} /> */}
      <input name="email" placeholder="Email" onChange={handleChange} />
      <input type="password" name="password" placeholder="Password" onChange={handleChange} />
      <button type="submit">Signup</button>
    </form>
  );
}
