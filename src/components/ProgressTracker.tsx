import { Calendar, CheckCircle, Circle } from "lucide-react";
import { Card } from "@/components/ui/card";
import { UserProgress } from "@/types/journey";

interface ProgressTrackerProps {
  progress: UserProgress;
}

export const ProgressTracker = ({ progress }: ProgressTrackerProps) => {
  const totalDays = 120;
  const completionPercentage = (progress.completedDays.length / totalDays) * 100;
  const daysSinceStart = Math.floor((Date.now() - progress.startDate.getTime()) / (1000 * 60 * 60 * 24));

  const renderCalendarDays = () => {
    const days = [];
    for (let i = 1; i <= totalDays; i++) {
      const isCompleted = progress.completedDays.includes(i);
      const isCurrent = i === progress.currentDay;
      const isPast = i < progress.currentDay;

      days.push(
        <div
          key={i}
          className={`
            w-8 h-8 rounded-lg flex items-center justify-center text-xs font-medium transition-all
            ${isCompleted 
              ? 'bg-success text-success-foreground shadow-glow' 
              : isCurrent 
              ? 'bg-gradient-primary text-white shadow-soft ring-2 ring-primary'
              : isPast 
              ? 'bg-muted text-muted-foreground'
              : 'bg-card border border-border text-card-foreground hover:bg-muted'
            }
          `}
        >
          {isCompleted ? (
            <CheckCircle className="w-4 h-4" />
          ) : isCurrent ? (
            <Circle className="w-4 h-4 fill-current" />
          ) : (
            i
          )}
        </div>
      );
    }
    return days;
  };

  return (
    <Card className="p-6 bg-gradient-card border-0 shadow-soft">
      <div className="space-y-6">
        {/* Header */}
        <div className="flex items-center space-x-3">
          <Calendar className="w-6 h-6 text-primary" />
          <div>
            <h3 className="text-lg font-semibold">Your Journey Progress</h3>
            <p className="text-muted-foreground">Day {progress.currentDay} of {totalDays}</p>
          </div>
        </div>

        {/* Progress Bar */}
        <div className="space-y-2">
          <div className="flex justify-between text-sm">
            <span className="text-muted-foreground">Progress</span>
            <span className="text-primary font-medium">{Math.round(completionPercentage)}%</span>
          </div>
          <div className="w-full bg-muted rounded-full h-3">
            <div 
              className="bg-gradient-primary h-3 rounded-full transition-all duration-500"
              style={{ width: `${completionPercentage}%` }}
            />
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-3 gap-4">
          <div className="text-center">
            <div className="text-2xl font-bold text-success">{progress.completedDays.length}</div>
            <div className="text-sm text-muted-foreground">Days Complete</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-primary">{daysSinceStart}</div>
            <div className="text-sm text-muted-foreground">Days Since Start</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-accent">{totalDays - progress.currentDay + 1}</div>
            <div className="text-sm text-muted-foreground">Days Remaining</div>
          </div>
        </div>

        {/* Calendar Grid */}
        <div>
          <h4 className="text-sm font-medium text-muted-foreground mb-3">120-Day Calendar</h4>
          <div className="grid grid-cols-10 gap-1">
            {renderCalendarDays()}
          </div>
        </div>
      </div>
    </Card>
  );
};