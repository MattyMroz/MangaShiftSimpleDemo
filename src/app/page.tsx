import { Hero } from "@/widgets/Hero/ui/Hero";
import { Section } from "@/shared/ui/Section/Section";
import { DemoSection } from "@/widgets/DemoSection/ui/DemoSection";

export default function Home() {
  return (
    <div className="bg-transparent text-[var(--text-primary)]">
      <main className="relative">
        <Hero />

        <DemoSection />

        <Section id="updates" title="Updates Section">
          <div className="text-center">
            <p className="text-[2rem] text-[var(--text-secondary)]">
              Latest updates and news
            </p>
          </div>
        </Section>

        <Section id="about" title="About Section">
          <div className="text-center">
            <p className="text-[2rem] text-[var(--text-secondary)]">
              Learn more about us
            </p>
          </div>
        </Section>

        <Section id="contact" title="Contact Section">
          <div className="text-center">
            <p className="text-[2rem] text-[var(--text-secondary)]">
              Get in touch with us
            </p>
          </div>
        </Section>

        <Section id="faq" title="FAQ Section">
          <div className="text-center">
            <p className="text-[2rem] text-[var(--text-secondary)]">
              Frequently asked questions
            </p>
          </div>
        </Section>
      </main>
    </div>
  );
}
