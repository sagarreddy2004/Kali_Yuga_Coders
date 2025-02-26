
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";

const About = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-slate-50 p-8">
      <div className="max-w-4xl mx-auto">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-4xl font-display font-bold text-slate-900">About Us</h1>
          <Button variant="outline" onClick={() => navigate("/")}>
            Back to Home
          </Button>
        </div>

        <div className="bg-white rounded-lg shadow-sm border border-slate-200 p-8">
          <h2 className="text-2xl font-semibold mb-4">Our Mission</h2>
          <p className="text-slate-600 mb-6">
            We're dedicated to creating a collaborative learning environment where students can connect,
            share knowledge, and grow together. Our platform facilitates meaningful interactions
            between students, making education more engaging and accessible.
          </p>

          <h2 className="text-2xl font-semibold mb-4">What We Offer</h2>
          <ul className="list-disc list-inside text-slate-600 space-y-2 mb-6">
            <li>Interactive study groups and discussion forums</li>
            <li>Academic event organization and management</li>
            <li>Resource sharing and collaborative learning tools</li>
            <li>Career development opportunities and networking</li>
          </ul>

          <div className="mt-8">
            <Button onClick={() => navigate("/dashboard")}>
              Explore Platform
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
