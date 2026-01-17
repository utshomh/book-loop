import { CTA } from "@/components/cta";
import { Hero } from "@/components/hero";
import { WhyUs } from "@/components/why-us";
import { Categories } from "@/components/categories";
import { FeaturedBooks } from "@/components/featured-books";
import { HowItWorks } from "@/components/how-it-works";
import { Newsletter } from "@/components/newsletter";

export default async function Home() {
  return (
    <div className="space-y-12">
      <Hero />
      <WhyUs />
      <CTA />
      <Categories />
      <FeaturedBooks />
      <HowItWorks />
      <Newsletter />
    </div>
  );
}
