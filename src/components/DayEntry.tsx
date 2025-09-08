import { BookOpen, Target, Heart, Lightbulb, Star } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { DayEntry as DayEntryType } from "@/types/journey";
import { useAuth } from "@/hooks/useAuth";
import { useNavigate } from "react-router-dom";
import { VideoPlayer } from "@/components/VideoPlayer";
import { BlogSection } from "@/components/BlogSection";
import ProTipSection from "@/components/ProTipSection";

interface DayEntryProps {
  entry: DayEntryType;
  onComplete: (day: number) => void;
  isCompleted: boolean;
}

export const DayEntry = ({ entry, onComplete, isCompleted }: DayEntryProps) => {
  const { user } = useAuth();
  const navigate = useNavigate();

  const handleComplete = () => {
    if (entry.day === 1 && !user) {
      // After completing day 1, prompt for login
      navigate("/auth", { state: { from: `/journey/${entry.day}` } });
      return;
    }
    onComplete(entry.day);
  };
  return (
    <div className="max-w-4xl mx-auto space-y-6">
      {/* Header */}
      <div className="text-center space-y-4">
        <div className="inline-flex items-center space-x-2 px-4 py-2 bg-gradient-primary rounded-full text-white">
          {entry.milestone && <Star className="w-4 h-4" />}
          <span className="font-medium">Day {entry.day}</span>
        </div>
        <h1 className="text-4xl font-bold bg-gradient-primary bg-clip-text text-transparent">
          {entry.title}
        </h1>
      </div>

      {/* Reflection Section */}
      <Card className="p-6 bg-gradient-card border-0 shadow-soft">
        <div className="flex items-start space-x-4">
          <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
            <Heart className="w-5 h-5 text-primary" />
          </div>
          <div className="space-y-3">
            <h3 className="text-lg font-semibold text-primary">Daily Reflection</h3>
            <p className="text-foreground leading-relaxed">{entry.reflection}</p>
          </div>
        </div>
      </Card>

      {/* Activity Section */}
      <Card className="p-6 bg-gradient-card border-0 shadow-soft">
        <div className="flex items-start space-x-4">
          <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center flex-shrink-0">
            <Target className="w-5 h-5 text-accent" />
          </div>
          <div className="space-y-3">
            <h3 className="text-lg font-semibold text-accent">Today's Activity</h3>
            <p className="text-foreground leading-relaxed">{entry.activity}</p>
          </div>
        </div>
      </Card>

      {/* Self-Check Section */}
      <Card className="p-6 bg-gradient-card border-0 shadow-soft">
        <div className="flex items-start space-x-4">
          <div className="w-10 h-10 rounded-lg bg-warning/10 flex items-center justify-center flex-shrink-0">
            <BookOpen className="w-5 h-5 text-warning" />
          </div>
          <div className="space-y-3">
            <h3 className="text-lg font-semibold text-warning">Self-Check</h3>
            <p className="text-foreground leading-relaxed">{entry.selfCheck}</p>
          </div>
        </div>
      </Card>

      {/* Tip Section */}
      <Card className="p-6 bg-gradient-card border-0 shadow-soft">
        <div className="flex items-start space-x-4">
          <div className="w-10 h-10 rounded-lg bg-success/10 flex items-center justify-center flex-shrink-0">
            <Lightbulb className="w-5 h-5 text-success" />
          </div>
          <div className="space-y-3">
            <h3 className="text-lg font-semibold text-success">Daily Tip</h3>
            <p className="text-foreground leading-relaxed">{entry.tip}</p>
          </div>
        </div>
      </Card>

      {/* Pro Tip Section with Content Blocking Tools */}
      <ProTipSection proTip={entry.proTip} day={entry.day} />

      {/* Video Section */}
      {entry.videoId && (
        <VideoPlayer videoId={entry.videoId} title={entry.title} />
      )}

      {/* Blog Section */}
      {entry.blog && (
        <BlogSection blog={entry.blog} day={entry.day} />
      )}

      {/* Completion Button */}
      <div className="text-center pt-6">
        <Button
          onClick={handleComplete}
          disabled={isCompleted}
          className={`px-8 py-3 text-lg ${
            isCompleted 
              ? 'bg-success hover:bg-success text-success-foreground' 
              : 'bg-gradient-primary hover:shadow-glow'
          } transition-all duration-300`}
        >
          {isCompleted ? 'Day Completed ✓' : (entry.day === 1 && !user ? 'Complete Day & Create Account' : 'Mark Day Complete')}
        </Button>
      </div>
    </div>
  );
};