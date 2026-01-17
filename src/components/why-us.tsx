import { Recycle, Users, Wallet } from "lucide-react";
import { FeatureCard } from "@/components/feature-card";

export function WhyUs() {
  return (
    <section className="overflow-hidden">
      <div className="space-y-8">
        <div className="flex flex-col items-center text-center space-y-4">
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-primary max-w-3xl">
            Building a sustainable future for <br />
            <span className="italic font-serif text-foreground">
              every reader.
            </span>
          </h2>

          <p className="text-muted-foreground max-w-xl text-lg">
            We aren&apos;t just a store; we are a community-powered movement to
            keep knowledge circulating.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
          <FeatureCard
            index="01"
            icon={<Wallet className="h-7 w-7" />}
            title="Save Money"
            description="Access an infinite library without the retail price tag. We make high-quality reading affordable for everyone."
          />
          <FeatureCard
            index="02"
            icon={<Recycle className="h-7 w-7" />}
            title="Eco-Friendly"
            description="Reduce paper waste and carbon emissions. Every pre-loved book is a win for our planet's forests."
          />
          <FeatureCard
            index="03"
            icon={<Users className="h-7 w-7" />}
            title="Community First"
            description="Buy directly from neighbors and local collectors. Turn your bookshelf into a local conversation."
          />
        </div>
      </div>
    </section>
  );
}
