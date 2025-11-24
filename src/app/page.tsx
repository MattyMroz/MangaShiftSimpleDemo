import { Button } from "@/shared/ui/Button/Button";

export default function Home() {
  return (
    <div className="bg-transparent text-[var(--text-primary)]">
      <main className="relative">
        {/* Home Section */}
        <section
          id="home"
          className="min-h-screen flex items-center justify-center bg-transparent"
        >
          <div className="text-center px-8 flex flex-col items-center">
            <h1 className="text-[6rem] font-bold mb-8 text-[var(--text-primary)]">
              Home Section
            </h1>
            <p className="text-[2.4rem] text-[var(--text-secondary)] mb-12">
              Scroll down to test navigation
            </p>
            <div className="flex gap-6">
              <Button variant="primary">Get Started</Button>
              <Button variant="ghost">Learn More</Button>
            </div>
          </div>
        </section>

        {/* Demo Section */}
        <section
          id="demo"
          className="min-h-screen flex items-center justify-center bg-transparent"
        >
          <div className="text-center px-8 flex flex-col items-center">
            <h2 className="text-[5rem] font-bold mb-6 text-[var(--text-primary)]">
              Demo Section
            </h2>
            <p className="text-[2rem] text-[var(--text-secondary)] mb-12">
              This is the demo section
            </p>
            <div className="flex gap-6">
              <Button variant="primary">View Demo</Button>
              <Button variant="ghost">Documentation</Button>
            </div>
          </div>
        </section>

        {/* Updates Section */}
        <section
          id="updates"
          className="min-h-screen flex items-center justify-center bg-transparent"
        >
          <div className="text-center px-8">
            <h2 className="text-[5rem] font-bold mb-6 text-[var(--text-primary)]">
              Updates Section
            </h2>
            <p className="text-[2rem] text-[var(--text-secondary)]">
              Latest updates and news
            </p>
          </div>
        </section>

        {/* About Section */}
        <section
          id="about"
          className="min-h-screen flex items-center justify-center bg-transparent"
        >
          <div className="text-center px-8">
            <h2 className="text-[5rem] font-bold mb-6 text-[var(--text-primary)]">
              About Section
            </h2>
            <p className="text-[2rem] text-[var(--text-secondary)]">
              Learn more about us
            </p>
          </div>
        </section>

        {/* Contact Section */}
        <section
          id="contact"
          className="min-h-screen flex items-center justify-center bg-transparent"
        >
          <div className="text-center px-8">
            <h2 className="text-[5rem] font-bold mb-6 text-[var(--text-primary)]">
              Contact Section
            </h2>
            <p className="text-[2rem] text-[var(--text-secondary)]">
              Get in touch with us
            </p>
          </div>
        </section>

        {/* FAQ Section */}
        <section
          id="faq"
          className="min-h-screen flex items-center justify-center bg-transparent"
        >
          <div className="text-center px-8">
            <h2 className="text-[5rem] font-bold mb-6 text-[var(--text-primary)]">
              FAQ Section
            </h2>
            <p className="text-[2rem] text-[var(--text-secondary)]">
              Frequently asked questions
            </p>
          </div>
        </section>
      </main>
    </div>
  );
}
