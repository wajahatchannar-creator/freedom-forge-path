import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ArrowLeft, BookOpen, Calendar, Clock, Users, TrendingUp } from 'lucide-react';
import { useNavigate, useParams } from 'react-router-dom';
import { journeyData } from '@/data/journeyData';

const BlogPost = () => {
  const navigate = useNavigate();
  const { day } = useParams<{ day: string }>();
  const dayNumber = parseInt(day || '1');
  const dayData = journeyData.find(d => d.day === dayNumber);

  if (!dayData) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <Card className="max-w-md mx-auto bg-gradient-card border-0 shadow-elevated">
          <CardContent className="text-center p-8">
            <h1 className="text-2xl font-bold mb-4">Blog Post Not Found</h1>
            <p className="text-muted-foreground mb-6">The requested day doesn't exist in our journey.</p>
            <Button onClick={() => navigate('/blog')} className="bg-gradient-primary hover:shadow-glow">
              Back to Blog
            </Button>
          </CardContent>
        </Card>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background bg-gradient-mesh">
      {/* Header */}
      <div className="sticky top-0 z-10 bg-background/80 backdrop-blur-md border-b shadow-soft">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => navigate('/blog')}
              className="flex items-center space-x-2 hover:bg-primary/10"
            >
              <ArrowLeft className="w-4 h-4" />
              <span>All Blog Posts</span>
            </Button>
            <div className="flex items-center space-x-2">
              <BookOpen className="w-5 h-5 text-primary" />
              <span className="text-lg font-semibold">Day {dayData.day} Blog</span>
            </div>
          </div>
        </div>
      </div>

      {/* Hero Section */}
      <section className="py-20 bg-gradient-hero relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-mesh opacity-30"></div>
        <div className="container mx-auto px-4 text-center relative z-10">
          <div className="flex items-center justify-center space-x-3 mb-4">
            <div className="px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full border border-white/20">
              <div className="flex items-center space-x-2 text-white">
                <Calendar className="w-4 h-4" />
                <span className="font-medium">Day {dayData.day}</span>
              </div>
            </div>
            {dayData.milestone && (
              <div className="px-4 py-2 bg-gradient-accent rounded-full text-white font-medium text-sm shadow-accent">
                🏆 Milestone Day
              </div>
            )}
          </div>
          <h1 className="text-5xl md:text-6xl font-bold mb-6 text-white leading-tight">
            {dayData.blog || dayData.title}
          </h1>
          <p className="text-xl text-white/90 max-w-3xl mx-auto mb-8">
            Comprehensive insights and scientific understanding for your recovery journey on day {dayData.day}
          </p>
          <div className="flex items-center justify-center space-x-6 text-white/80">
            <div className="flex items-center space-x-2">
              <Clock className="w-4 h-4" />
              <span>8 min read</span>
            </div>
            <div className="flex items-center space-x-2">
              <Users className="w-4 h-4" />
              <span>Recovery Community</span>
            </div>
            <div className="flex items-center space-x-2">
              <TrendingUp className="w-4 h-4" />
              <span>Evidence-Based</span>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            {/* Article Content */}
            <Card className="bg-gradient-card border-0 shadow-elevated mb-12">
              <CardContent className="p-12">
                {/* Introduction */}
                <div className="prose prose-lg max-w-none mb-12">
                  <h2 className="text-3xl font-bold mb-6 bg-gradient-primary bg-clip-text text-transparent">
                    Understanding Your Recovery Journey: Day {dayData.day}
                  </h2>
                  <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                    Welcome to day {dayData.day} of your transformation journey. Today we explore the critical aspects 
                    of porn addiction recovery, focusing on the neurobiological changes that occur during this phase 
                    and the evidence-based strategies that will accelerate your healing process.
                  </p>
                  <p className="text-lg text-muted-foreground leading-relaxed">
                    Research in neuroscience has shown that recovery from pornography addiction involves significant 
                    neuroplastic changes in the brain. Understanding these changes empowers you to work with your 
                    brain's natural healing mechanisms rather than against them.
                  </p>
                </div>

                {/* Key Insights Section */}
                <div className="bg-gradient-accent/10 p-8 rounded-2xl border-l-4 border-accent mb-12">
                  <h3 className="text-2xl font-bold text-accent mb-6 flex items-center">
                    <TrendingUp className="w-6 h-6 mr-3" />
                    Key Insights for Day {dayData.day}
                  </h3>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <h4 className="font-semibold text-lg mb-3">Neurological Changes</h4>
                      <ul className="space-y-2 text-muted-foreground">
                        <li>• Dopamine pathway reconstruction begins</li>
                        <li>• Prefrontal cortex strengthening occurs</li>
                        <li>• Neural pathway diversification increases</li>
                        <li>• Stress response system recalibrates</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold text-lg mb-3">Psychological Benefits</h4>
                      <ul className="space-y-2 text-muted-foreground">
                        <li>• Enhanced emotional regulation</li>
                        <li>• Improved impulse control mechanisms</li>
                        <li>• Increased self-awareness and mindfulness</li>
                        <li>• Strengthened intrinsic motivation</li>
                      </ul>
                    </div>
                  </div>
                </div>

                {/* Scientific Evidence */}
                <div className="mb-12">
                  <h3 className="text-2xl font-bold mb-6">The Science Behind Recovery</h3>
                  <p className="text-muted-foreground leading-relaxed mb-6">
                    Longitudinal studies in addiction neuroscience reveal that sustained abstinence from pornographic 
                    content leads to measurable improvements in executive function, emotional regulation, and social 
                    cognitive abilities. The brain's remarkable plasticity allows for the formation of new, healthier 
                    neural pathways that support long-term recovery.
                  </p>
                  <p className="text-muted-foreground leading-relaxed mb-6">
                    During this phase of recovery, you may experience what researchers call "neuroadaptive rebalancing" 
                    - your brain is actively rewiring itself to function optimally without the artificial stimulation 
                    it previously relied upon. This process, while sometimes challenging, is a sign of healthy recovery.
                  </p>
                </div>

                {/* Practical Strategies */}
                <div className="bg-gradient-success/10 p-8 rounded-2xl mb-12">
                  <h3 className="text-2xl font-bold text-success mb-6">Evidence-Based Recovery Strategies</h3>
                  <div className="space-y-6">
                    <div>
                      <h4 className="font-semibold text-lg mb-3">Cognitive Behavioral Techniques</h4>
                      <p className="text-muted-foreground mb-4">
                        Implement thought restructuring exercises that challenge and reframe addictive thought patterns. 
                        Research shows that CBT techniques can reduce relapse rates by up to 60% when applied consistently.
                      </p>
                    </div>
                    <div>
                      <h4 className="font-semibold text-lg mb-3">Mindfulness and Meditation</h4>
                      <p className="text-muted-foreground mb-4">
                        Regular mindfulness practice strengthens the anterior cingulate cortex, improving your ability 
                        to recognize and respond to urges without acting on them. Even 10 minutes daily can produce 
                        measurable changes in brain structure.
                      </p>
                    </div>
                    <div>
                      <h4 className="font-semibold text-lg mb-3">Physical Exercise and Recovery</h4>
                      <p className="text-muted-foreground">
                        Aerobic exercise increases BDNF (Brain-Derived Neurotrophic Factor), which accelerates 
                        neuroplasticity and supports the formation of healthy neural pathways. Exercise also naturally 
                        boosts dopamine levels in a balanced, sustainable way.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Today's Focus */}
                <div className="bg-gradient-primary/10 p-8 rounded-2xl border-l-4 border-primary mb-12">
                  <h3 className="text-2xl font-bold text-primary mb-4">Today's Focus: {dayData.title}</h3>
                  <p className="text-muted-foreground leading-relaxed mb-6">{dayData.reflection}</p>
                  <div className="bg-background/50 p-6 rounded-xl">
                    <h4 className="font-semibold mb-3">Recommended Activity</h4>
                    <p className="text-muted-foreground">{dayData.activity}</p>
                  </div>
                </div>

                {/* Self-Assessment */}
                <div className="bg-muted/30 p-8 rounded-2xl">
                  <h3 className="text-2xl font-bold mb-4">Self-Assessment & Reflection</h3>
                  <p className="text-muted-foreground leading-relaxed mb-6">
                    Take a moment to honestly evaluate your progress and emotional state. Self-awareness is a critical 
                    component of successful recovery, allowing you to recognize patterns and make informed decisions 
                    about your healing journey.
                  </p>
                  <div className="bg-background/50 p-6 rounded-xl">
                    <h4 className="font-semibold mb-3">Today's Self-Check Question</h4>
                    <p className="text-muted-foreground italic">"{dayData.selfCheck}"</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Navigation */}
            <div className="flex justify-between items-center">
              {dayNumber > 1 && (
                <Button
                  variant="outline"
                  onClick={() => navigate(`/blog/${dayNumber - 1}`)}
                  className="flex items-center space-x-2"
                >
                  <ArrowLeft className="w-4 h-4" />
                  <span>Day {dayNumber - 1}</span>
                </Button>
              )}
              <Button
                onClick={() => navigate(`/journey/${dayNumber}`)}
                className="bg-gradient-primary hover:shadow-glow"
              >
                Start Day {dayNumber} Journey
              </Button>
              {dayNumber < 120 && (
                <Button
                  variant="outline"
                  onClick={() => navigate(`/blog/${dayNumber + 1}`)}
                  className="flex items-center space-x-2"
                >
                  <span>Day {dayNumber + 1}</span>
                  <ArrowLeft className="w-4 h-4 rotate-180" />
                </Button>
              )}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default BlogPost;