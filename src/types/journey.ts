export interface DayEntry {
  day: number;
  title: string;
  reflection: string;
  activity: string;
  selfCheck: string;
  tip: string;
  milestone?: boolean;
  videoId?: string;
  blog?: string;
}

export interface UserProgress {
  currentDay: number;
  completedDays: number[];
  startDate: Date;
  lastAccessDate: Date;
}