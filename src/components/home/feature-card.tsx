import { Card } from "@/components/ui/card";

interface FeatureCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  index: string;
}

export function FeatureCard({
  icon,
  title,
  description,
  index,
}: FeatureCardProps) {
  return (
    <Card className="group relative overflow-hidden border-border/50 bg-card/50 p-8 transition-all duration-300 hover:-translate-y-1 hover:border-primary/50 hover:shadow-xl hover:shadow-primary/5">
      <span className="absolute -right-2 -top-4 select-none text-8xl font-bold text-primary/5 transition-colors group-hover:text-primary/10">
        {index}
      </span>

      <div className="relative z-10 space-y-4">
        <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-secondary transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
          {icon}
        </div>

        <div className="space-y-2">
          <h3 className="text-xl font-bold tracking-tight text-primary">
            {title}
          </h3>
          <p className="text-sm leading-relaxed text-muted-foreground">
            {description}
          </p>
        </div>

        <div className="h-1 w-0 bg-accent transition-all duration-500 group-hover:w-full" />
      </div>
    </Card>
  );
}
