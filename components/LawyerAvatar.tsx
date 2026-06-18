"use client";

import { useState } from "react";

interface LawyerAvatarProps {
  photo: string;
  name: string;
  emoji: string;
}

export default function LawyerAvatar({ photo, name, emoji }: LawyerAvatarProps) {
  const [failed, setFailed] = useState(false);

  if (failed || !photo) {
    return (
      <div className="w-14 h-14 bg-amber-500/10 border border-amber-500/20 rounded-full flex items-center justify-center text-3xl flex-shrink-0">
        {emoji}
      </div>
    );
  }

  return (
    // eslint-disable-next-line @next/next/no-img-element
    <img
      src={photo}
      alt={name}
      width={56}
      height={56}
      onError={() => setFailed(true)}
      className="w-14 h-14 rounded-full object-cover border border-amber-500/30 flex-shrink-0"
    />
  );
}
