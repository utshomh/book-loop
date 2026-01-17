import { Button } from "@/components/ui/button";

export function CTA() {
  return (
    <div className="w-full flex justify-center py-12">
      <div className="group inline-flex items-center gap-4 p-1.5 pl-6 bg-secondary/50 backdrop-blur-sm rounded-full border border-border transition-all hover:border-primary/20 hover:bg-secondary/80">
        <span className="text-sm font-semibold text-muted-foreground tracking-tight">
          Ready to join the community?
        </span>
        <Button size="lg" className="rounded-full h-12 px-8 font-semibold">
          Get Started Now
        </Button>
      </div>
    </div>
  );
}
