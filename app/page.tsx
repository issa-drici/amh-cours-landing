import { Comparison } from "@/components/landing/Comparison";
import { Curriculum } from "@/components/landing/Curriculum";
import { FAQ } from "@/components/landing/FAQ";
import { Hero } from "@/components/landing/Hero";
import { Instructor } from "@/components/landing/Instructor";
import { Methodology } from "@/components/landing/Methodology";
import { Pricing } from "@/components/landing/Pricing";
import { ProblemAgitation } from "@/components/landing/ProblemAgitation";
import { SocialProof } from "@/components/landing/SocialProof";
import { Testimonials } from "@/components/landing/Testimonials";
import { TypicalWeek } from "@/components/landing/TypicalWeek";
import { WhoIsThisFor } from "@/components/landing/WhoIsThisFor";
import { Navbar } from "@/components/landing/Navbar";
import { Footer } from "@/components/landing/Footer";
import { FinalCTA } from "@/components/landing/FinalCTA";

export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white selection:bg-amber-500/30">
      <Navbar />

      {/* PHASE 1: ATTENTION (The Hook) */}
      <Hero />
      <SocialProof />

      {/* PHASE 2: INTEREST & PAIN (Why you failed before) */}
      <div id="douleur">
        {/* Agitate the problem first */}
        <ProblemAgitation />
        {/* Anchor value immediately with comparison */}
        <Comparison />
      </div>

      {/* PHASE 3: DESIRE (The Solution & The Guide) */}
      <div id="methode">
        {/* The unique mechanism */}
        <Methodology />
        {/* The Mentor */}
        <Instructor />
      </div>

      {/* PHASE 4: CONVICTION (Validation) */}
      <div id="validation">
        {/* Is it for me? */}
        <WhoIsThisFor />
        {/* Proof it works */}
        <Testimonials />
      </div>

      {/* PHASE 5: LOGIC (The Logistics) */}
      <div id="programme">
        {/* Visual routine */}
        <TypicalWeek />
        {/* Syllabus */}
        <Curriculum />
      </div>

      {/* PHASE 6: ACTION (The Offer) */}
      <div id="pricing">
        <Pricing />
      </div>

      <div id="faq">
        <FAQ />
      </div>

      <FinalCTA />

      <Footer />
    </main>
  );
}
