import Features from "@/components/Features";
import Hero from "@/components/Hero";
import Pricing from "@/components/Pricing";
import Testimonials from "@/components/Testimonials";
import Stats from "@/components/Stats";
import UsageGraph from "@/components/UsageGraph";
import Footer from "@/components/Footer";
import CTA from "@/components/CTA";
import Navbar from "@/components/Navbar";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />
      <main className="flex-grow">
        <Hero />
        <Features />
        <Pricing />
        <Stats />
        <Testimonials />
        <UsageGraph />
        <CTA />
      </main>
      <Footer />
    </div>
  )
}

