import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { ArrowLeft, ArrowRight, Home } from "lucide-react";
import { Button } from "@/components/ui/button";
import { DayEntry } from "@/components/DayEntry";
import { ProgressTracker } from "@/components/ProgressTracker";
import { journeyData } from "@/data/journeyData";
import { UserProgress } from "@/types/journey";

const Journey = () => {
  const { day: dayParam } = useParams();
  const navigate = useNavigate();
  const currentDay = parseInt(dayParam || "1");

  const [progress, setProgress] = useState<UserProgress>(() => {
    const saved = localStorage.getItem("journeyProgress");
    if (saved) {
      const parsed = JSON.parse(saved);
      return {
        ...parsed,
        startDate: new Date(parsed.startDate),
        lastAccessDate: new Date(parsed.lastAccessDate),
      };
    }
    return {
      currentDay: 1,
      completedDays: [],
      startDate: new Date(),
      lastAccessDate: new Date(),
    };
  });

  const entry = journeyData.find(e => e.day === currentDay);

  useEffect(() => {
    const updatedProgress = {
      ...progress,
      currentDay: Math.max(progress.currentDay, currentDay),
      lastAccessDate: new Date(),
    };
    setProgress(updatedProgress);
    localStorage.setItem("journeyProgress", JSON.stringify(updatedProgress));
  }, [currentDay]);

  const handleComplete = (day: number) => {
    const updatedProgress = {
      ...progress,
      completedDays: [...new Set([...progress.completedDays, day])],
      currentDay: Math.max(progress.currentDay, day + 1),
    };
    setProgress(updatedProgress);
    localStorage.setItem("journeyProgress", JSON.stringify(updatedProgress));
  };

  const handleNavigation = (direction: "prev" | "next") => {
    const newDay = direction === "prev" ? currentDay - 1 : currentDay + 1;
    if (newDay >= 1 && newDay <= 120 && journeyData.find(e => e.day === newDay)) {
      navigate(`/journey/${newDay}`);
    }
  };

  if (!entry) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-4">Day {currentDay} content coming soon!</h1>
          <Button onClick={() => navigate("/")} className="bg-gradient-primary">
            <Home className="w-4 h-4 mr-2" />
            Return Home
          </Button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <div className="sticky top-0 bg-background/80 backdrop-blur-lg border-b border-border z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between">
            <Button 
              variant="ghost" 
              onClick={() => navigate("/")}
              className="flex items-center space-x-2"
            >
              <Home className="w-4 h-4" />
              <span>Home</span>
            </Button>
            
            <div className="flex items-center space-x-4">
              <Button
                variant="outline"
                onClick={() => handleNavigation("prev")}
                disabled={currentDay <= 1}
                className="flex items-center space-x-2"
              >
                <ArrowLeft className="w-4 h-4" />
                <span className="hidden sm:inline">Previous</span>
              </Button>
              
              <span className="text-sm font-medium px-4 py-2 bg-muted rounded-lg">
                Day {currentDay} of 120
              </span>
              
              <Button
                variant="outline"
                onClick={() => handleNavigation("next")}
                disabled={currentDay >= 120 || !journeyData.find(e => e.day === currentDay + 1)}
                className="flex items-center space-x-2"
              >
                <span className="hidden sm:inline">Next</span>
                <ArrowRight className="w-4 h-4" />
              </Button>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Progress Sidebar */}
          <div className="lg:col-span-1">
            <div className="sticky top-24">
              <ProgressTracker progress={progress} />
            </div>
          </div>

          {/* Main Content */}
          <div className="lg:col-span-3">
            <DayEntry
              entry={entry}
              onComplete={handleComplete}
              isCompleted={progress.completedDays.includes(currentDay)}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Journey;