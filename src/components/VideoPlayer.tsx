import React from 'react';

interface VideoPlayerProps {
  videoId: string;
  title: string;
}

export const VideoPlayer: React.FC<VideoPlayerProps> = ({ videoId, title }) => {
  return (
    <div className="w-full bg-gradient-card rounded-lg p-4 shadow-soft">
      <h3 className="text-lg font-semibold mb-4 text-foreground">Recovery Video</h3>
      <div className="relative aspect-video bg-muted rounded-lg overflow-hidden">
        <iframe
          width="100%"
          height="100%"
          src={`https://www.youtube.com/embed/${videoId}`}
          title={title}
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
          className="absolute inset-0"
        />
      </div>
      <p className="text-sm text-muted-foreground mt-2">
        This educational video provides additional insights and motivation for your recovery journey.
      </p>
    </div>
  );
};