import Blogs from "@/components/blogs";
import Carousel from "@/components/carousel";
import CtaMultiple from "@/components/cta-multiple";
import Discover from "@/components/discover";
import Faq from "@/components/faq";
import Features from "@/components/features";
import Hero from "@/components/hero";
import PageMarquee from "@/components/page-marquee";
import Pricing from "@/components/pricing";
import SingleCta from "@/components/single-cta";
import Tools from "@/components/tools";

export default function Home() {
  return (
    <>
      <Hero />
      <PageMarquee />
      <Discover />
      <CtaMultiple />
      <Features />
      <Pricing />
      <Tools />
      <Carousel />
      <Faq />
      <Blogs />
      <SingleCta />
    </>
  );
}
