// components/BuildSampleVideo.tsx
"use client";

interface BuildSampleVideoProps {
  src: string;
  caption: string;
}

export function BuildSampleVideo({ src, caption }: BuildSampleVideoProps) {
  return (
    <div className="space-y-2">
      <div className="overflow-hidden rounded-2xl border border-white/10 bg-black/60 shadow-lg shadow-black/40">
        <video
          src={src}
          controls
          playsInline
          muted
          className="h-full w-full object-cover"
        />
      </div>
      <p className="text-xs text-neutral-300">{caption}</p>
    </div>
  );
}
