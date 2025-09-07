import { ArrowRight, Calendar, Target, Users, Heart, LogIn, Star, BookOpen } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { useNavigate } from "react-router-dom";
import { useAuth } from "@/hooks/useAuth";
import heroImage from "@/assets/hero-journey.jpg";

const Index = () => {
  const navigate = useNavigate();
  const { user, signOut } = useAuth();

  const handleStartJourney = () => {
    navigate("/journey/1");
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <div className="container mx-auto px-4 py-6 flex justify-between items-center">
        <h1 className="text-2xl font-bold bg-gradient-primary bg-clip-text text-transparent">
          120 Days to Freedom
        </h1>
        <div className="flex items-center space-x-2">
          <Button
            variant="ghost"
            size="sm"
            onClick={() => navigate("/blog")}
            className="flex items-center space-x-2"
          >
            <BookOpen className="w-4 h-4" />
            <span>Blog</span>
          </Button>
          {user ? (
            <Button variant="outline" size="sm" onClick={signOut}>
              Sign Out
            </Button>
          ) : (
            <Button 
              variant="outline" 
              size="sm" 
              onClick={() => navigate("/auth")}
              className="flex items-center space-x-2"
            >
              <LogIn className="w-4 h-4" />
              <span>Sign In</span>
            </Button>
          )}
        </div>
      </div>
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${heroImage})` }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-background/90 to-background/60" />
        
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl md:text-7xl font-bold mb-6">
            <span className="bg-gradient-primary bg-clip-text text-transparent">
              120 Days
            </span>
            <br />
            <span className="text-foreground">to Freedom</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-2xl mx-auto leading-relaxed">
            Break free from porn addiction with a structured, day-by-day journey of growth, 
            reflection, and real transformation. You're stronger than you think.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              variant="hero" 
              size="lg"
              onClick={handleStartJourney}
              className="text-lg px-8 py-4"
            >
              Start Your Journey
              <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
            
            <Button 
              variant="journey" 
              size="lg"
              className="text-lg px-8 py-4"
            >
              Learn More
            </Button>
          </div>
          
          <div className="mt-12 text-center">
            <p className="text-sm text-muted-foreground mb-4">Join thousands who've found freedom</p>
            <div className="flex justify-center items-center space-x-6 text-sm">
              <div className="flex items-center space-x-2">
                <Star className="w-4 h-4 text-yellow-500 fill-current" />
                <span>Science-Based Approach</span>
              </div>
              <div className="flex items-center space-x-2">
                <Users className="w-4 h-4 text-primary" />
                <span>Community Support</span>
              </div>
              <div className="flex items-center space-x-2">
                <Target className="w-4 h-4 text-success" />
                <span>Daily Guidance</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-24 bg-gradient-card">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6">
              How the <span className="bg-gradient-primary bg-clip-text text-transparent">Journey</span> Works
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Every day for 120 days, you'll receive structured content designed to help you 
              understand your triggers, build healthy habits, and create lasting change.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="p-6 text-center bg-card border-0 shadow-soft hover:shadow-glow transition-all">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                <Calendar className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-lg font-semibold mb-2">Daily Reflections</h3>
              <p className="text-muted-foreground">
                Motivational content to inspire and guide your mindset each day.
              </p>
            </Card>

            <Card className="p-6 text-center bg-card border-0 shadow-soft hover:shadow-glow transition-all">
              <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                <Target className="w-6 h-6 text-accent" />
              </div>
              <h3 className="text-lg font-semibold mb-2">Practical Activities</h3>
              <p className="text-muted-foreground">
                Concrete exercises to build new habits and strengthen your resolve.
              </p>
            </Card>

            <Card className="p-6 text-center bg-card border-0 shadow-soft hover:shadow-glow transition-all">
              <div className="w-12 h-12 bg-warning/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                <Users className="w-6 h-6 text-warning" />
              </div>
              <h3 className="text-lg font-semibold mb-2">Self-Assessment</h3>
              <p className="text-muted-foreground">
                Regular check-ins to track your progress and identify patterns.
              </p>
            </Card>

            <Card className="p-6 text-center bg-card border-0 shadow-soft hover:shadow-glow transition-all">
              <div className="w-12 h-12 bg-success/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                <Star className="w-6 h-6 text-success" />
              </div>
              <h3 className="text-lg font-semibold mb-2">Expert Tips</h3>
              <p className="text-muted-foreground">
                Science-backed strategies and tools for managing urges and triggers.
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-primary text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Your Freedom Journey Starts Today
          </h2>
          <p className="text-xl mb-8 opacity-90">
            Take the first step toward a life free from porn addiction. 
            Join thousands who've already begun their transformation.
          </p>
          <Button 
            variant="outline" 
            size="lg"
            onClick={handleStartJourney}
            className="text-lg px-8 py-4 bg-white/10 border-white/30 text-white hover:bg-white hover:text-primary"
          >
            Begin Day 1 Now
            <ArrowRight className="w-5 h-5 ml-2" />
          </Button>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h3 className="text-lg font-semibold mb-4">120 Days to Freedom</h3>
            <p className="text-muted-foreground mb-4">
              A structured journey to help you overcome porn addiction and reclaim your life.
            </p>
            <p className="text-sm text-muted-foreground">
              Remember: Recovery is a process, not perfection. Be patient with yourself.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;