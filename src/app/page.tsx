import { Hero } from "@/widgets/Hero/ui/Hero";
import { Section } from "@/shared/ui/Section/Section";
import { DemoSection } from "@/widgets/DemoSection/ui/DemoSection";
import { AboutSection } from "@/widgets/AboutSection/ui/AboutSection";
import { SmartText } from "@/shared/ui/SmartText/SmartText";

export default function Home() {
  return (
    <div className="bg-transparent text-[var(--text-primary)]">
      <main className="relative">
        <Hero />

        <DemoSection />

        <AboutSection />

        <Section id="contact" title="Contact Section">
          <div className="text-center">
            <SmartText>
              <p className="text-[2rem] text-[var(--text-secondary)]">
                Get in touch with us
              </p>
            </SmartText>
          </div>
        </Section>

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
