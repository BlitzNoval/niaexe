'use client';

import HeroSection from './components/HeroSection';
import ProjectsSection from './components/ProjectsSection';
import SkillsSection from './components/SkillsSection';
import FigmaSection from './components/FigmaSection';
import ContactSection from './components/ContactSection';
import InteractiveBackground from './components/InteractiveBackground';
import ParallaxLayers from './components/ParallaxLayers';
import ScrollToTop from './components/ScrollToTop';
import Link from 'next/link';

export default function MinimalModernPortfolio() {
	return (
		<div className="min-h-screen bg-background text-foreground relative">
			<ParallaxLayers />
			<InteractiveBackground />
			
			{/* Navigation */}
			<nav className="fixed top-4 right-4 z-50">
				<Link 
					href="/quote" 
					className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-full font-semibold transition-all shadow-lg hover:shadow-xl"
				>
					Get Quote 💰
				</Link>
			</nav>
			
			<div className="relative z-10">
				<HeroSection />
				<ProjectsSection />
				<SkillsSection />
				<FigmaSection />
				<ContactSection />
			</div>
			<ScrollToTop />
		</div>
	);
}
