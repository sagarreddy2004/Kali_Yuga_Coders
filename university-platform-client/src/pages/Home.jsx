import RoleCard from "../components/RoleCard";

function Home() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 px-4">
      <h1 className="text-3xl font-bold mb-6 text-center">
        Welcome to University Platform
      </h1>
      <p className="text-gray-600 mb-8 text-center">
        Select your role to continue
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <RoleCard role="Student" description="Join discussions, access schedules, and collaborate." icon="🎓" />
        <RoleCard role="Faculty" description="Engage with students, post announcements, and manage courses." icon="👨‍🏫" />
        <RoleCard role="Alumni" description="Connect with students, provide mentorship, and share career insights." icon="🏆" />
        <RoleCard role="Admin" description="Manage university communication, clubs, and discussions." icon="🛠️" />
      </div>
    </div>
  );
}

export default Home;
