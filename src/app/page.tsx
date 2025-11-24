import { Button } from "@/shared/ui/Button/Button";
import { Hero } from "@/widgets/Hero/ui/Hero";
import { Section } from "@/shared/ui/Section/Section";

export default function Home() {
  return (
    <div className="bg-transparent text-[var(--text-primary)]">
      <main className="relative">
        <Hero />

        <Section id="demo" title="Demo Section">
          <div className="text-center flex flex-col items-center">
            <p className="text-[2rem] text-[var(--text-secondary)] mb-12">
              This is the demo section
            </p>
            <div className="flex gap-6 flex-wrap justify-center">
              <Button variant="primary">View Demo</Button>
              <Button variant="ghost">Documentation</Button>
            </div>
          </div>
        </Section>

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
