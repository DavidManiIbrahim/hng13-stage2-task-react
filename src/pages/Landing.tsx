import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import WavyBackground from "@/components/WavyBackground";
import { Ticket, BarChart3, Users, Shield } from "lucide-react";
import { auth } from "@/lib/auth";
import { useEffect } from "react";

const Landing = () => {
  const navigate = useNavigate();

  useEffect(() => {
    // Redirect if already logged in
    if (auth.isAuthenticated()) {
      navigate("/dashboard");
    }
  }, [navigate]);

  return (
    <div className="min-h-screen relative overflow-hidden">
      <WavyBackground />
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <header className="pt-6 pb-12 flex justify-between items-center">
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-primary to-secondary flex items-center justify-center">
              <Ticket className="w-6 h-6 text-primary-foreground" />
            </div>
            <span className="text-xl font-bold">TicketFlow</span>
          </div>
          <Button variant="outline" onClick={() => navigate("/login")}>
            Sign In
          </Button>
        </header>

        {/* Hero Section */}
        <div className="text-center py-20 max-w-4xl mx-auto">
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold mb-6 bg-gradient-to-r from-primary via-secondary to-primary bg-clip-text text-transparent animate-in fade-in slide-in-from-bottom-4 duration-1000">
            Manage Tickets Like a Pro
          </h1>
          <p className="text-xl text-muted-foreground mb-10 animate-in fade-in slide-in-from-bottom-5 duration-1000 delay-200">
            Streamline your support workflow with powerful ticket management,
            real-time analytics, and seamless collaboration.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-in fade-in slide-in-from-bottom-6 duration-1000 delay-300">
            <Button
              size="lg"
              className="gradient-bg text-lg px-8 py-6 hover:opacity-90 transition-opacity"
              onClick={() => navigate("/register")}
            >
              Get Started Free
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="text-lg px-8 py-6"
              onClick={() => navigate("/login")}
            >
              Sign In
            </Button>
          </div>
        </div>

        {/* Features */}
        <div className="grid md:grid-cols-3 gap-8 py-20 max-w-5xl mx-auto">
          <div className="glass-card p-8 rounded-2xl hover:scale-105 transition-transform duration-300">
            <div className="w-12 h-12 rounded-lg bg-primary/20 flex items-center justify-center mb-4">
              <Ticket className="w-6 h-6 text-primary" />
            </div>
            <h3 className="text-xl font-semibold mb-2">Smart Ticketing</h3>
            <p className="text-muted-foreground">
              Create, assign, and track tickets with intelligent prioritization and status management.
            </p>
          </div>

          <div className="glass-card p-8 rounded-2xl hover:scale-105 transition-transform duration-300">
            <div className="w-12 h-12 rounded-lg bg-secondary/20 flex items-center justify-center mb-4">
              <BarChart3 className="w-6 h-6 text-secondary" />
            </div>
            <h3 className="text-xl font-semibold mb-2">Real-time Analytics</h3>
            <p className="text-muted-foreground">
              Visualize your workflow with comprehensive charts and statistics at a glance.
            </p>
          </div>

          <div className="glass-card p-8 rounded-2xl hover:scale-105 transition-transform duration-300">
            <div className="w-12 h-12 rounded-lg bg-accent/20 flex items-center justify-center mb-4">
              <Users className="w-6 h-6 text-accent" />
            </div>
            <h3 className="text-xl font-semibold mb-2">Team Collaboration</h3>
            <p className="text-muted-foreground">
              Assign tickets to team members and track progress across your entire organization.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Landing;
