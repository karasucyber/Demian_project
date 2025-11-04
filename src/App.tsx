import { Navbar } from "./components/Navbar";
import { VideoSection } from "./components/VideoSection";
import { ClassesSection } from "./components/ClassesSection";
import { StatsSection } from "./components/StatsSection";
import { InfrastructureSection } from "./components/InfrastructureSection";
import { ValuesSection } from "./components/ValuesSection";
import { InstructorsSection } from "./components/InstructorsSection";
import { ScheduleSection } from "./components/ScheduleSection";
import { TestimonialsSection } from "./components/TestimonialsSection";
import { PartnersSection } from "./components/PartnersSection";
import { CTASection } from "./components/CTASection";
import { Footer } from "./components/Footer";
import { FloatingSocialButtons } from "./components/FloatingSocialButtons";

export default function App() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <VideoSection />
      <StatsSection />
      <ClassesSection />
      <InfrastructureSection />
      <ValuesSection />
      <InstructorsSection />
      <ScheduleSection />
      <TestimonialsSection />
      <PartnersSection />
      <CTASection />
      <Footer />
      <FloatingSocialButtons />
    </div>
  );
}