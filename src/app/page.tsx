export default function Home() {
  return (
    <div className="bg-[var(--bg-primary)] text-[var(--text-primary)]">
      <main className="relative">
        {/* Home Section */}
        <section 
          id="home" 
          className="min-h-screen flex items-center justify-center bg-gradient-to-br from-[var(--bg-primary)] to-[var(--bg-secondary)]"
        >
          <div className="text-center px-8">
            <h1 className="text-[6rem] font-bold mb-8 bg-gradient-to-r from-[var(--primary)] to-[var(--secondary)] bg-clip-text text-transparent">
              Home Section
            </h1>
            <p className="text-[2.4rem] text-[var(--text-secondary)]">
              Scroll down to test navigation
            </p>
          </div>
        </section>

        {/* Demo Section */}
        <section 
          id="demo" 
          className="min-h-screen flex items-center justify-center bg-[var(--bg-secondary)]"
        >
          <div className="text-center px-8">
            <h2 className="text-[5rem] font-bold mb-6 bg-gradient-to-r from-[var(--primary)] to-[var(--secondary)] bg-clip-text text-transparent">
              Demo Section
            </h2>
            <p className="text-[2rem] text-[var(--text-secondary)]">
              This is the demo section
            </p>
          </div>
        </section>

        {/* Updates Section */}
        <section 
          id="updates" 
          className="min-h-screen flex items-center justify-center bg-gradient-to-br from-[var(--bg-secondary)] to-[var(--bg-tertiary)]"
        >
          <div className="text-center px-8">
            <h2 className="text-[5rem] font-bold mb-6 bg-gradient-to-r from-[var(--primary)] to-[var(--secondary)] bg-clip-text text-transparent">
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
          className="min-h-screen flex items-center justify-center bg-[var(--bg-tertiary)]"
        >
          <div className="text-center px-8">
            <h2 className="text-[5rem] font-bold mb-6 bg-gradient-to-r from-[var(--primary)] to-[var(--secondary)] bg-clip-text text-transparent">
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
          className="min-h-screen flex items-center justify-center bg-gradient-to-br from-[var(--bg-tertiary)] to-[var(--bg-secondary)]"
        >
          <div className="text-center px-8">
            <h2 className="text-[5rem] font-bold mb-6 bg-gradient-to-r from-[var(--primary)] to-[var(--secondary)] bg-clip-text text-transparent">
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
          className="min-h-screen flex items-center justify-center bg-[var(--bg-primary)]"
        >
          <div className="text-center px-8">
            <h2 className="text-[5rem] font-bold mb-6 bg-gradient-to-r from-[var(--primary)] to-[var(--secondary)] bg-clip-text text-transparent">
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
