import { useState } from "react";
import { useSearchParams } from "react-router-dom";
import "./Login.css";

function Login() {
  const [searchParams] = useSearchParams();
  const defaultRole = searchParams.get("role") || "Student"; // Default to Student
  const [role, setRole] = useState(defaultRole);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();
    console.log(`Logging in as ${role}`);
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100">
      <h2 className="text-2xl font-bold mb-4">Login</h2>
      <form className="bg-white p-6 rounded shadow-md" onSubmit={handleLogin}>
        <select className="border p-2 w-full mb-4" value={role} onChange={(e) => setRole(e.target.value)}>
          <option value="Student">Student</option>
          <option value="Faculty">Faculty</option>
          <option value="Alumni">Alumni</option>
          <option value="Admin">Admin</option>
        </select>

        <input type="email" placeholder="University Email" className="border p-2 w-full mb-4" value={email} onChange={(e) => setEmail(e.target.value)} required />
        <input type="password" placeholder="Password" className="border p-2 w-full mb-4" value={password} onChange={(e) => setPassword(e.target.value)} required />
        <button className="bg-blue-600 text-white px-4 py-2 rounded w-full">Login as {role}</button>
      </form>
    </div>
  );
}

export default Login; // ✅ Ensure this line is present
