'use client';

import HeroSection from './components/HeroSection';
import ProjectsSection from './components/ProjectsSection';
import SkillsSection from './components/SkillsSection';
import ContactSection from './components/ContactSection';
import ParallaxBackground from './components/ParallaxBackground';

export default function MinimalModernPortfolio() {
	return (
		<div className="min-h-screen bg-white text-black relative overflow-x-hidden">
			<ParallaxBackground />
			<div className="relative z-10">
				<HeroSection />
				<ProjectsSection />
				<SkillsSection />
				<ContactSection />
			</div>
		</div>
	);
}
