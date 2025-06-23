'use client';

import HeroSection from './components/HeroSection';
import ProjectsSection from './components/ProjectsSection';
import SkillsSection from './components/SkillsSection';
import FigmaSection from './components/FigmaSection';
import ContactSection from './components/ContactSection';
import InteractiveBackground from './components/InteractiveBackground';
import ParallaxLayers from './components/ParallaxLayers';

export default function MinimalModernPortfolio() {
	return (
		<div className="min-h-screen bg-background text-foreground relative">
			<ParallaxLayers />
			<InteractiveBackground />
			<div className="relative z-10">
				<HeroSection />
				<ProjectsSection />
				<SkillsSection />
				<FigmaSection />
				<ContactSection />
			</div>
		</div>
	);
}
