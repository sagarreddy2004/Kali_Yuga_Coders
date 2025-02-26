
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useNavigate } from "react-router-dom";
import { MessageSquare, Search, Plus, ThumbsUp, MessageCircle, Bookmark } from "lucide-react";

// Temporary mock data for discussions
const discussionTopics = [
  {
    id: 1,
    title: "Tips for Final Year Project",
    category: "Academics",
    author: "John Doe",
    replies: 23,
    likes: 45,
    timestamp: "2h ago"
  },
  {
    id: 2,
    title: "Machine Learning Study Group",
    category: "Study Groups",
    author: "Jane Smith",
    replies: 15,
    likes: 32,
    timestamp: "5h ago"
  },
  {
    id: 3,
    title: "Campus Hackathon 2024",
    category: "Events",
    author: "Mike Johnson",
    replies: 56,
    likes: 89,
    timestamp: "1d ago"
  }
];

const Forums = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-slate-50 p-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex justify-between items-center mb-8">
          <div>
            <h1 className="text-4xl font-display font-bold text-slate-900">Discussion Forums</h1>
            <p className="text-slate-600 mt-2">Engage in academic discussions with your peers</p>
          </div>
          <Button onClick={() => navigate("/dashboard")}>
            Back to Dashboard
          </Button>
        </div>

        {/* Search and Create Post */}
        <div className="flex gap-4 mb-8">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-slate-400 w-5 h-5" />
            <Input 
              placeholder="Search discussions..." 
              className="pl-10"
            />
          </div>
          <Button className="flex items-center gap-2">
            <Plus className="w-4 h-4" />
            New Discussion
          </Button>
        </div>

        {/* Categories */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
          {["All Topics", "Academics", "Events", "Study Groups"].map((category) => (
            <Button
              key={category}
              variant="outline"
              className="justify-center"
            >
              {category}
            </Button>
          ))}
        </div>

        {/* Discussion List */}
        <div className="space-y-4">
          {discussionTopics.map((topic) => (
            <div 
              key={topic.id}
              className="bg-white rounded-lg shadow-sm border border-slate-200 p-6"
            >
              <div className="flex justify-between items-start mb-3">
                <div>
                  <h3 className="text-lg font-semibold hover:text-blue-600 cursor-pointer">
                    {topic.title}
                  </h3>
                  <div className="flex items-center gap-2 text-sm text-slate-600 mt-1">
                    <span>{topic.category}</span>
                    <span>•</span>
                    <span>Posted by {topic.author}</span>
                    <span>•</span>
                    <span>{topic.timestamp}</span>
                  </div>
                </div>
                <Button variant="ghost" size="icon">
                  <Bookmark className="w-4 h-4" />
                </Button>
              </div>
              
              <div className="flex items-center gap-4 text-sm text-slate-600">
                <button className="flex items-center gap-1 hover:text-blue-600">
                  <ThumbsUp className="w-4 h-4" />
                  {topic.likes}
                </button>
                <button className="flex items-center gap-1 hover:text-blue-600">
                  <MessageCircle className="w-4 h-4" />
                  {topic.replies} replies
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Forums;
