import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import { 
  BookOpen, 
  Calendar, 
  Users, 
  MessageSquare, 
  Bell, 
  Globe,
  School,
  UserPlus,
  FolderKanban
} from "lucide-react";

const Dashboard = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-slate-50 p-8">
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-between items-center mb-8">
          <div>
            <h1 className="text-4xl font-display font-bold text-slate-900">Dashboard</h1>
            <p className="text-slate-600 mt-2">Welcome to your university collaboration platform</p>
          </div>
          <Button variant="outline" onClick={() => navigate("/")}>
            Back to Home
          </Button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Discussion Forums */}
          <div className="bg-white p-6 rounded-lg shadow-sm border border-slate-200">
            <div className="flex items-center gap-3 mb-4">
              <MessageSquare className="w-6 h-6 text-blue-500" />
              <h2 className="text-xl font-semibold">Discussion Forums</h2>
            </div>
            <p className="text-slate-600 mb-4">Engage in academic discussions with peers and faculty.</p>
            <Button className="w-full" onClick={() => navigate("/forums")}>Join Discussions</Button>
          </div>

          {/* Announcements */}
          <div className="bg-white p-6 rounded-lg shadow-sm border border-slate-200">
            <div className="flex items-center gap-3 mb-4">
              <Bell className="w-6 h-6 text-red-500" />
              <h2 className="text-xl font-semibold">Announcements</h2>
            </div>
            <p className="text-slate-600 mb-4">Stay updated with important university notices.</p>
            <Button className="w-full">View Announcements</Button>
          </div>

          {/* Events Calendar */}
          <div className="bg-white p-6 rounded-lg shadow-sm border border-slate-200">
            <div className="flex items-center gap-3 mb-4">
              <Calendar className="w-6 h-6 text-green-500" />
              <h2 className="text-xl font-semibold">Events</h2>
            </div>
            <p className="text-slate-600 mb-4">Track upcoming events and academic schedules.</p>
            <Button className="w-full">View Calendar</Button>
          </div>

          {/* Student Clubs */}
          <div className="bg-white p-6 rounded-lg shadow-sm border border-slate-200">
            <div className="flex items-center gap-3 mb-4">
              <Users className="w-6 h-6 text-purple-500" />
              <h2 className="text-xl font-semibold">Student Clubs</h2>
            </div>
            <p className="text-slate-600 mb-4">Join and participate in university clubs and societies.</p>
            <Button className="w-full">Explore Clubs</Button>
          </div>

          {/* Resources */}
          <div className="bg-white p-6 rounded-lg shadow-sm border border-slate-200">
            <div className="flex items-center gap-3 mb-4">
              <BookOpen className="w-6 h-6 text-orange-500" />
              <h2 className="text-xl font-semibold">Resources</h2>
            </div>
            <p className="text-slate-600 mb-4">Access study materials and academic resources.</p>
            <Button className="w-full">Browse Resources</Button>
          </div>

          {/* Academic Programs */}
          <div className="bg-white p-6 rounded-lg shadow-sm border border-slate-200">
            <div className="flex items-center gap-3 mb-4">
              <School className="w-6 h-6 text-indigo-500" />
              <h2 className="text-xl font-semibold">Academic Programs</h2>
            </div>
            <p className="text-slate-600 mb-4">Explore courses and academic opportunities.</p>
            <Button className="w-full">View Programs</Button>
          </div>
        </div>

        {/* Quick Actions Section */}
        <div className="mt-8">
          <h2 className="text-2xl font-semibold mb-6">Quick Actions</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <Button variant="outline" className="flex items-center gap-2">
              <UserPlus className="w-4 h-4" />
              Join a Club
            </Button>
            <Button variant="outline" className="flex items-center gap-2">
              <Globe className="w-4 h-4" />
              Browse Events
            </Button>
            <Button variant="outline" className="flex items-center gap-2">
              <FolderKanban className="w-4 h-4" />
              View Schedule
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
