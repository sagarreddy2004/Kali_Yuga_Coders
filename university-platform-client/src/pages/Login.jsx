import "./Login.css"; // ✅ Ensure CSS is imported
import { useState } from "react";
import { useSearchParams } from "react-router-dom";

function Login() {
  const [searchParams] = useSearchParams();
  const defaultRole = searchParams.get("role") || "Student";
  const [role, setRole] = useState(defaultRole);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();
    console.log(`Logging in as ${role}`);
  };

  return (
    <div className="login-container">
      <h2 className="login-title">Login</h2>
      <form className="login-form" onSubmit={handleLogin}>
        <select className="login-input" value={role} onChange={(e) => setRole(e.target.value)}>
          <option value="Student">Student</option>
          <option value="Faculty">Faculty</option>
          <option value="Alumni">Alumni</option>
          <option value="Admin">Admin</option>
        </select>

        <input type="email" placeholder="University Email" className="login-input" value={email} onChange={(e) => setEmail(e.target.value)} required />
        <input type="password" placeholder="Password" className="login-input" value={password} onChange={(e) => setPassword(e.target.value)} required />
        <button className="login-button">Login as {role}</button>
      </form>
    </div>
  );
}

export default Login;
