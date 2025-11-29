import { Hero } from "@/widgets/Hero/ui/Hero";
import { Section } from "@/shared/ui/Section/Section";
import { DemoSection } from "@/widgets/DemoSection/ui/DemoSection";
import { AboutSection } from "@/widgets/AboutSection/ui/AboutSection";
import { ContactSection } from "@/widgets/ContactSection/ui/ContactSection";
import { SmartText } from "@/shared/ui/SmartText/SmartText";

export default function Home() {
  return (
    <div className="bg-transparent text-[var(--text-primary)]">
      <main className="relative">
        <Hero />

        <DemoSection />

        <AboutSection />

        <ContactSection />

        <Section id="faq" title="FAQ Section">
          <div className="text-center">
            <SmartText>
              <p className="text-[2rem] text-[var(--text-secondary)]">
                Frequently asked questions
              </p>
            </SmartText>
          </div>
        </Section>
      </main>
    </div>
  );
}
