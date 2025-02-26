import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();
  const [isRegistering, setIsRegistering] = useState(false);
  const [role, setRole] = useState("Student");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (isRegistering) {
      console.log(`Registering as ${role} with ${email}`);
      // Handle registration logic here
    } else {
      console.log(`Logging in as ${role} with ${email}`);
      // Handle login logic here
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 p-6">
      <div className="bg-white shadow-lg rounded-lg p-8 max-w-md w-full">
        <h2 className="text-2xl font-bold text-center mb-6">
          {isRegistering ? "Create an Account" : "Login"}
        </h2>
        
        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          <label className="text-sm font-medium">Role</label>
          <select
            className="p-2 border rounded-md"
            value={role}
            onChange={(e) => setRole(e.target.value)}
          >
            <option value="Student">Student</option>
            <option value="Faculty">Faculty</option>
            <option value="Alumni">Alumni</option>
            <option value="Admin">Admin</option>
          </select>

          <label className="text-sm font-medium">University Email</label>
          <input
            type="email"
            className="p-2 border rounded-md"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />

          <label className="text-sm font-medium">Password</label>
          <input
            type="password"
            className="p-2 border rounded-md"
            placeholder="Enter your password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />

          {isRegistering && (
            <>
              <label className="text-sm font-medium">Confirm Password</label>
              <input
                type="password"
                className="p-2 border rounded-md"
                placeholder="Confirm your password"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                required
              />
            </>
          )}

          <button className="bg-black text-white p-2 rounded-md mt-4">
            {isRegistering ? "Register" : "Login"}
          </button>
        </form>

        <p className="text-sm text-center mt-4">
          {isRegistering ? "Already have an account?" : "Don't have an account?"}{" "}
          <span
            className="text-blue-600 cursor-pointer"
            onClick={() => setIsRegistering(!isRegistering)}
          >
            {isRegistering ? "Login here" : "Register here"}
          </span>
        </p>
      </div>
    </div>
  );
};

export default Login;
