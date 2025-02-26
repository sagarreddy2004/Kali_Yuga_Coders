import { useState } from "react";
import { useNavigate } from "react-router-dom";

const HOST  = "http://localhost:3000"

const Login = () => {
  const navigate = useNavigate();
  const [isRegistering, setIsRegistering] = useState(false);
  const [role, setRole] = useState("Student");
  const [fullname, setFullname] = useState("");  // Changed from "name" to "fullname"
  const [mobile, setMobile] = useState("");  // Added Mobile Number
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (isRegistering) {
      if (password !== confirmPassword) {
        alert("Passwords do not match!");
        return;
      }

      try {
        const response = await fetch(HOST+'/api/register', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({
            fullname,
            email,
            contact: mobile,
            password,
            role
          })
        });

        const data = await response.json();
        if (response.ok) {
          console.log("Registration successful:", data);
          // Redirect to login page or home page after successful registration
          navigate('/');
        } else {
          console.error("Registration failed:", data);
          alert(data.message);
        }
      } catch (error) {
        console.error("Error:", error);
      }
    } else {
      try {
        const response = await fetch(HOST+'/api/login', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({
            email,
            password,
            role
          })
        });

        const data = await response.json();
        if (response.ok) {
          console.log("Login successful:", data);
          // Store the access token and redirect to the home page
          localStorage.setItem('token', data.accessToken);
          navigate('/');
        } else {
          console.error("Login failed:", data);
          alert(data.message);
        }
      } catch (error) {
        console.error("Error:", error);
      }
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
            onChange={(e) => {setRole(e.target.value); console.log(role)}}
          >
            <option value="Student">Student</option>
            <option value="Faculty">Faculty</option>
            <option value="Alumni">Alumni</option>
            <option value="Admin">Admin</option>
          </select>

          {isRegistering && (
            <>
              <label className="text-sm font-medium">Full Name</label>
              <input
                type="text"
                className="p-2 border rounded-md"
                placeholder="Enter your full name"
                value={fullname}
                onChange={(e) => setFullname(e.target.value)}
                required
              />

              <label className="text-sm font-medium">Mobile Number</label>
              <input
                type="tel"
                className="p-2 border rounded-md"
                placeholder="Enter your mobile number"
                value={mobile}
                onChange={(e) => setMobile(e.target.value)}
                required
              />
            </>
          )}

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
