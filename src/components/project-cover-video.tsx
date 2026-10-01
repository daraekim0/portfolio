"use client";

import { useRef, useState } from "react";

type Props = {
  title: string;
  video: { src: string; poster: string; loopSrc?: string };
};

export function ProjectCoverVideo({ title, video }: Props) {
  const [introFinished, setIntroFinished] = useState(false);
  const backgroundRef = useRef<HTMLVideoElement>(null);

  if (!video.loopSrc) {
    return <video className="pending-hero" src={video.src} poster={video.poster} autoPlay muted loop playsInline preload="metadata" aria-label={`${title} animated project cover`} />;
  }

  return (
    <div className="pending-hero" role="img" aria-label={`${title} animated project cover`}>
      <video ref={backgroundRef} src={video.loopSrc} poster={video.poster} autoPlay muted loop playsInline preload="auto" aria-hidden="true" />
      {!introFinished && (
        <video
          className="pending-hero-intro"
          src={video.src}
          poster={video.poster}
          autoPlay
          muted
          playsInline
          preload="auto"
          aria-hidden="true"
          onPlaying={(event) => {
            const background = backgroundRef.current;
            if (background) background.currentTime = event.currentTarget.currentTime;
          }}
          onEnded={() => setIntroFinished(true)}
        />
      )}
    </div>
  );
}
