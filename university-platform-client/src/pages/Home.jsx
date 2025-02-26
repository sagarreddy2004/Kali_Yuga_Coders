import "./Home.css"; // ✅ Ensure CSS is imported
import RoleCard from "../components/RoleCard";

function Home() {
  return (
    <div className="home-container">
      <h1 className="home-title">Welcome to University Platform</h1>
      <p className="home-subtitle">Select your role to continue</p>

      <div className="role-cards">
        <RoleCard role="Student" description="Join discussions, access schedules, and collaborate." icon="🎓" />
        <RoleCard role="Faculty" description="Engage with students, post announcements, and manage courses." icon="👨‍🏫" />
        <RoleCard role="Alumni" description="Connect with students, provide mentorship, and share career insights." icon="🏆" />
        <RoleCard role="Admin" description="Manage university communication, clubs, and discussions." icon="🛠️" />
      </div>
    </div>
  );
}

export default Home;
