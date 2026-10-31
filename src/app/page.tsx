import { AboutSection } from "@/widgets/AboutSection/ui/AboutSection";
import { ContactSection } from "@/widgets/ContactSection/ui/ContactSection";
import { DemoSection } from "@/widgets/DemoSection/ui/DemoSection";
import { FAQSection } from "@/widgets/FAQSection/ui/FAQSection";
import { Footer } from "@/widgets/Footer/ui/Footer";
import { Hero } from "@/widgets/Hero/ui/Hero";

export default function Home() {
	return (
		<div className="bg-transparent text-[var(--text-primary)]">
			<main className="relative">
				<Hero />

				<DemoSection />

				<AboutSection />

				<ContactSection />

				<FAQSection />
			</main>

			<Footer />
		</div>
	);
}
