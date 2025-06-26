import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import ProjectsShowcase from "@/components/ProjectsShowcase";
import SkillsSection from "@/components/SkillsSection";
import ContactForm from "@/components/ContactForm";
import Header from "@/components/Header";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Header />
      <main>
        <HeroSection />
        <AboutSection />
        <ProjectsShowcase />
        <SkillsSection />
        <ContactForm />
      </main>
    </div>
  );
};

export default Index;
