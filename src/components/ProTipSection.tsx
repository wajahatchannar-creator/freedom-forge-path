import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Shield, Smartphone, Monitor, ExternalLink, Chrome, Download } from 'lucide-react';

interface ProTipSectionProps {
  proTip: string;
  day: number;
}

const getContentBlockingRecommendations = (day: number) => {
  const recommendations = [
    // Chrome Extensions
    {
      category: "Chrome Extensions",
      icon: <Chrome className="w-5 h-5" />,
      items: [
        {
          name: "BlockSite",
          description: "Block distracting websites and stay focused",
          link: "https://chrome.google.com/webstore/detail/blocksite-block-websites/eiimnmioipafcokbfikbljfdeojpcgbh",
          type: "Extension"
        },
        {
          name: "Cold Turkey Blocker",
          description: "Powerful website and app blocking tool",
          link: "https://chrome.google.com/webstore/detail/cold-turkey-blocker/ncldcbhpeplkfijdhnoepdgdnmjkckij",
          type: "Extension"
        },
        {
          name: "uBlock Origin",
          description: "Advanced ad blocker and content filter",
          link: "https://chrome.google.com/webstore/detail/ublock-origin/cjpalhdlnbpafiamejdnhcphjbkeiagm",
          type: "Extension"
        }
      ]
    },
    // Mobile Apps
    {
      category: "Mobile Apps",
      icon: <Smartphone className="w-5 h-5" />,
      items: [
        {
          name: "Qustodio (iOS/Android)",
          description: "Comprehensive parental control and self-monitoring",
          link: "https://apps.apple.com/app/qustodio/id1000043836",
          type: "App"
        },
        {
          name: "BlockerX (Android)",
          description: "Block adult content and track usage",
          link: "https://play.google.com/store/apps/details?id=com.blockerx",
          type: "App"
        },
        {
          name: "Covenant Eyes",
          description: "Accountability and filtering software",
          link: "https://www.covenanteyes.com/",
          type: "Service"
        }
      ]
    },
    // Desktop Software
    {
      category: "Desktop Software (Mac/Linux/Windows)",
      icon: <Monitor className="w-5 h-5" />,
      items: [
        {
          name: "Cold Turkey Pro",
          description: "Complete computer blocking solution",
          link: "https://getcoldturkey.com/",
          type: "Software"
        },
        {
          name: "Net Nanny",
          description: "Cross-platform family protection",
          link: "https://www.netnanny.com/",
          type: "Software"
        },
        {
          name: "Circle Home Plus",
          description: "Network-level filtering for all devices",
          link: "https://meetcircle.com/",
          type: "Hardware"
        }
      ]
    }
  ];

  // Rotate recommendations based on day to provide variety
  const dayIndex = (day - 1) % recommendations.length;
  return recommendations.slice(dayIndex).concat(recommendations.slice(0, dayIndex));
};

export const ProTipSection: React.FC<ProTipSectionProps> = ({ proTip, day }) => {
  const recommendations = getContentBlockingRecommendations(day);

  return (
    <Card className="bg-gradient-card border-0 shadow-elevated">
      <CardHeader>
        <CardTitle className="text-xl flex items-center space-x-3">
          <Shield className="w-6 h-6 text-primary" />
          <span className="bg-gradient-primary bg-clip-text text-transparent">
            Pro Tip of the Day
          </span>
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-6">
        {/* Daily Pro Tip */}
        <div className="bg-primary/10 p-6 rounded-xl border-l-4 border-primary">
          <p className="text-muted-foreground leading-relaxed">{proTip}</p>
        </div>

        {/* Content Blocking Recommendations */}
        <div className="space-y-4">
          <h4 className="text-lg font-semibold flex items-center space-x-2">
            <Shield className="w-5 h-5 text-accent" />
            <span>Recommended Content Blocking Tools</span>
          </h4>
          
          {recommendations.map((category, categoryIndex) => (
            <div key={categoryIndex} className="bg-muted/30 p-4 rounded-lg">
              <h5 className="font-medium mb-3 flex items-center space-x-2">
                {category.icon}
                <span>{category.category}</span>
              </h5>
              <div className="grid gap-3">
                {category.items.map((item, itemIndex) => (
                  <div key={itemIndex} className="bg-background/50 p-3 rounded-lg">
                    <div className="flex items-start justify-between">
                      <div className="flex-1">
                        <div className="flex items-center space-x-2 mb-1">
                          <h6 className="font-medium text-sm">{item.name}</h6>
                          <span className="px-2 py-0.5 bg-accent/20 text-accent text-xs rounded-full">
                            {item.type}
                          </span>
                        </div>
                        <p className="text-xs text-muted-foreground">{item.description}</p>
                      </div>
                      <Button
                        variant="ghost"
                        size="sm"
                        asChild
                        className="ml-3 h-8 w-8 p-0 hover:bg-primary/10"
                      >
                        <a
                          href={item.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          aria-label={`Open ${item.name}`}
                        >
                          <ExternalLink className="w-3 h-3" />
                        </a>
                      </Button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Additional Resources */}
        <div className="bg-gradient-success/10 p-4 rounded-lg border border-success/20">
          <h5 className="font-medium mb-2 text-success">💡 Quick Setup Guide</h5>
          <ul className="text-sm text-muted-foreground space-y-1">
            <li>1. Choose one tool from each category based on your devices</li>
            <li>2. Install and configure blocking rules for adult content</li>
            <li>3. Set up accountability by sharing access with a trusted friend</li>
            <li>4. Enable strict mode to prevent easy bypassing</li>
            <li>5. Regularly review and update your blocking lists</li>
          </ul>
        </div>

        <div className="bg-gradient-accent/10 p-4 rounded-lg border border-accent/20">
          <p className="text-sm text-muted-foreground">
            <strong className="text-accent">Remember:</strong> These tools are aids in your recovery journey. 
            The real strength comes from your commitment to change and the healthy habits you build each day.
          </p>
        </div>
      </CardContent>
    </Card>
  );
};

export default ProTipSection;