import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ArrowLeft, BookOpen, Calendar } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { journeyData } from '@/data/journeyData';

const Blog = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <div className="sticky top-0 z-10 bg-background/80 backdrop-blur-sm border-b">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => navigate('/')}
              className="flex items-center space-x-2"
            >
              <ArrowLeft className="w-4 h-4" />
              <span>Home</span>
            </Button>
            <div className="flex items-center space-x-2">
              <BookOpen className="w-5 h-5 text-primary" />
              <h1 className="text-xl font-bold">Recovery Blog</h1>
            </div>
          </div>
        </div>
      </div>

      {/* Hero Section */}
      <section className="py-16 bg-gradient-card">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="bg-gradient-primary bg-clip-text text-transparent">
              Recovery
            </span>{' '}
            <span className="text-foreground">Blog</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Comprehensive articles about porn addiction recovery, side effects, and the science behind healing.
            Each article corresponds to a day in your 120-day journey.
          </p>
        </div>
      </section>

      {/* Blog Articles */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="grid gap-8 max-w-4xl mx-auto">
            {journeyData.map((day) => (
              <Card key={day.day} className="bg-gradient-card border-0 shadow-soft hover:shadow-glow transition-all">
                <CardHeader>
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <div className="flex items-center space-x-3 mb-2">
                        <div className="flex items-center space-x-2 text-sm text-primary">
                          <Calendar className="w-4 h-4" />
                          <span>Day {day.day}</span>
                        </div>
                        {day.milestone && (
                          <span className="px-2 py-1 bg-primary/10 text-primary text-xs rounded-full font-medium">
                            Milestone
                          </span>
                        )}
                      </div>
                      <CardTitle className="text-xl mb-2">{day.blog}</CardTitle>
                      <p className="text-sm text-muted-foreground">
                        Related to: {day.title}
                      </p>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="prose prose-sm max-w-none text-muted-foreground mb-6">
                    <p className="mb-4">
                      This comprehensive article explores the key topics relevant to your recovery journey on day {day.day}. 
                      Understanding the science and psychology behind addiction empowers you to make informed 
                      decisions about your healing process.
                    </p>
                    <p className="mb-4">
                      Research shows that education about addiction and recovery significantly improves long-term 
                      success rates. By learning about neuroplasticity, triggers, withdrawal symptoms, and healthy 
                      coping mechanisms, you're building a foundation of knowledge that will serve you throughout 
                      your journey.
                    </p>
                  </div>
                  
                  <div className="bg-primary/10 p-4 rounded-lg border-l-4 border-primary mb-6">
                    <h4 className="text-sm font-medium text-primary mb-2">Article Highlights:</h4>
                    <ul className="text-sm space-y-1 text-muted-foreground">
                      <li>• Understanding brain changes during recovery</li>
                      <li>• Practical strategies for managing triggers</li>
                      <li>• Scientific evidence supporting recovery methods</li>
                      <li>• Real-world application of recovery principles</li>
                    </ul>
                  </div>

                  <div className="flex flex-col sm:flex-row gap-3">
                    <Button
                      onClick={() => navigate(`/blog/${day.day}`)}
                      className="bg-gradient-primary hover:shadow-glow flex-1"
                    >
                      Read Full Article
                    </Button>
                    <Button
                      variant="outline"
                      onClick={() => navigate(`/journey/${day.day}`)}
                      className="flex-1"
                    >
                      Start Day {day.day}
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Footer CTA */}
      <section className="py-16 bg-gradient-primary text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">
            Ready to Start Your Recovery Journey?
          </h2>
          <p className="text-xl mb-6 opacity-90">
            These articles are part of our comprehensive 120-day recovery program.
          </p>
          <Button
            variant="outline"
            size="lg"
            onClick={() => navigate('/journey/1')}
            className="bg-white/10 border-white/30 text-white hover:bg-white hover:text-primary"
          >
            Begin Day 1 Now
          </Button>
        </div>
      </section>
    </div>
  );
};

export default Blog;