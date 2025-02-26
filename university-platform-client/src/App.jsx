import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home.jsx";   // ✅ Ensure .jsx if using JSX
import Login from "./pages/Login.jsx"; // ✅ Ensure .jsx if using JSX

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </Router>
  );
}

export default App;
