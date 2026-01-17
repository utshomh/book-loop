import { Mail, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Card,
  CardContent,
  CardDescription,
  CardTitle,
} from "@/components/ui/card";

export function Newsletter() {
  return (
    <section className="">
      <Card className="max-w-5xl mx-auto border-border bg-card">
        <CardContent className="p-8 md:p-12 flex flex-col lg:flex-row items-center gap-8">
          <div className="flex-1 space-y-4 text-center lg:text-left">
            <CardTitle className="text-3xl md:text-4xl font-bold tracking-tight">
              Join the{" "}
              <span className="text-primary italic font-serif">well-read</span>{" "}
              circle.
            </CardTitle>
            <CardDescription className="text-base max-w-md mx-auto lg:mx-0">
              Curated rare finds, local trading tips, and sustainable reading
              news delivered to your inbox every Sunday.
            </CardDescription>
          </div>

          <div className="w-full lg:w-80 space-y-3">
            <div className="relative">
              <Mail className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <Input
                type="email"
                placeholder="yourname@email.com"
                className="pl-10"
              />
            </div>
            <Button className="w-full font-semibold gap-2">
              Subscribe
              <Send className="h-4 w-4" />
            </Button>
            <p className="text-[11px] text-center text-muted-foreground">
              Join 2,400+ readers. No spam, ever.
            </p>
          </div>
        </CardContent>
      </Card>
    </section>
  );
}
