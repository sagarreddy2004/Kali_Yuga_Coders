
import { Button } from "@/components/ui/button";
import { GraduationCap } from "lucide-react";
import { useNavigate } from "react-router-dom";

export function Hero() {
  const navigate = useNavigate();

  return (
    <div className="relative min-h-screen flex items-center justify-center bg-gradient-to-b from-slate-50 to-slate-100">
      <div className="absolute inset-0 bg-grid-slate-200 [mask-image:radial-gradient(ellipse_at_center,white,transparent)]" />
      
      <div className="relative max-w-5xl mx-auto px-4 py-16 text-center animate-fadeIn">
        <div className="flex justify-center mb-8">
          <div className="rounded-full bg-slate-100 p-4 ring-1 ring-slate-200/20 shadow-lg">
            <GraduationCap className="w-12 h-12 text-slate-800" />
          </div>
        </div>
        
        <h1 className="font-display text-5xl md:text-6xl lg:text-7xl font-bold text-slate-900 mb-8">
          Connect, Collaborate, and Grow Together
        </h1>
        
        <p className="text-xl md:text-2xl text-slate-600 mb-12 max-w-3xl mx-auto">
          Your university&apos;s all-in-one platform for discussions, events, and career opportunities.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button 
            size="lg" 
            className="text-lg px-8 py-6"
            onClick={() => navigate('/Login')}
          >
            Get Started
          </Button>
          <Button 
            size="lg" 
            variant="outline" 
            className="text-lg px-8 py-6"
            onClick={() => navigate('/about')}
          >
            Learn More
          </Button>
        </div>
      </div>
    </div>
  );
}
