import { useNavigate } from "react-router-dom";
import "./RoleCard.css";

function RoleCard({ role, description }) {
  const navigate = useNavigate();

  const handleSelectRole = () => {
    navigate(`/login?role=${role.toLowerCase()}`);
  };

  return (
    <div
      className="flex flex-col items-center p-6 bg-white shadow-lg rounded-xl cursor-pointer hover:shadow-2xl transition"
      onClick={handleSelectRole}
    >
      <h3 className="text-xl font-semibold mt-3">{role}</h3>
      <p className="text-gray-600 text-center mt-2">{description}</p>
    </div>
  );
}

export default RoleCard;  // ✅ Ensure this line is present
