import "./RoleCard.css"; // ✅ Ensure CSS is imported
import { useNavigate } from "react-router-dom";

function RoleCard({ role, description, icon }) {
  const navigate = useNavigate();

  const handleSelectRole = () => {
    navigate(`/login?role=${role.toLowerCase()}`);
  };

  return (
    <div className="role-card" onClick={handleSelectRole}>
      <div className="role-icon">{icon}</div>
      <h3 className="role-title">{role}</h3>
      <p className="role-description">{description}</p>
    </div>
  );
}

export default RoleCard;
