import { CTA } from "@/components/home/cta";
import { Hero } from "@/components/home/hero";
import { WhyUs } from "@/components/home/why-us";
import { Categories } from "@/components/home/categories";
import { FeaturedBooks } from "@/components/home/featured-books";
import { HowItWorks } from "@/components/home/how-it-works";
import { Newsletter } from "@/components/home/newsletter";

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
