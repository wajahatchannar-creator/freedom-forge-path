import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { BookOpen } from 'lucide-react';

interface BlogSectionProps {
  blog: string;
  day: number;
}

export const BlogSection: React.FC<BlogSectionProps> = ({ blog, day }) => {
  return (
    <Card className="bg-gradient-card border-0 shadow-soft">
      <CardHeader>
        <CardTitle className="flex items-center space-x-2">
          <BookOpen className="w-5 h-5 text-primary" />
          <span>Educational Article - Day {day}</span>
        </CardTitle>
      </CardHeader>
      <CardContent>
        <h3 className="text-lg font-semibold mb-4 text-foreground">{blog}</h3>
        <div className="prose prose-sm max-w-none text-muted-foreground">
          <p className="mb-4">
            This comprehensive article explores the key topics relevant to your recovery journey today. 
            Understanding the science and psychology behind addiction empowers you to make informed 
            decisions about your healing process.
          </p>
          <p className="mb-4">
            Research shows that education about addiction and recovery significantly improves long-term 
            success rates. By learning about neuroplasticity, triggers, withdrawal symptoms, and healthy 
            coping mechanisms, you're building a foundation of knowledge that will serve you throughout 
            your journey.
          </p>
          <p className="mb-4">
            Each day's article is carefully curated to provide relevant information that corresponds 
            with your current stage of recovery, offering both scientific insights and practical 
            strategies for sustainable change.
          </p>
          <div className="bg-primary/10 p-4 rounded-lg border-l-4 border-primary">
            <p className="text-sm font-medium text-primary mb-2">Key Takeaways:</p>
            <ul className="text-sm space-y-1">
              <li>• Recovery is a process that requires patience and self-compassion</li>
              <li>• Understanding your brain's response helps reduce shame and increase motivation</li>
              <li>• Every day of recovery creates positive changes in your neural pathways</li>
              <li>• Knowledge combined with action accelerates healing and prevents relapse</li>
            </ul>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};