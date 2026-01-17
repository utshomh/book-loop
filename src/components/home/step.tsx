"use client";

import {
  Search,
  MessageSquare,
  BadgeCheck,
  Camera,
  HandCoins,
  type LucideIcon,
} from "lucide-react";

const iconMap: Record<string, LucideIcon> = {
  search: Search,
  chat: MessageSquare,
  check: BadgeCheck,
  camera: Camera,
  earn: HandCoins,
};

interface StepProps {
  number: string;
  title: string;
  desc: string;
  iconName: string;
  colorClass: string;
}

export function Step({ number, title, desc, iconName, colorClass }: StepProps) {
  const Icon = iconMap[iconName] || Search;

  return (
    <div className="relative flex flex-col items-center group">
      <div className="relative w-20 h-20 mb-6 rounded-2xl flex items-center justify-center border-2 border-primary shadow-[4px_4px_0px_0px_rgba(var(--primary))] bg-background transition-transform group-hover:-translate-y-1">
        <Icon className={`w-10 h-10 ${colorClass}`} />
        <div className="absolute -bottom-2 -right-2 w-8 h-8 rounded-full bg-primary text-primary-foreground text-sm font-bold flex items-center justify-center border-2 border-background">
          {number}
        </div>
      </div>
      <h3 className="text-lg font-bold text-primary mb-2">{title}</h3>
      <p className="text-sm text-muted-foreground text-center max-w-45 leading-relaxed">
        {desc}
      </p>
    </div>
  );
}
