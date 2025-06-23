'use client';

import HeroSection from './components/HeroSection';
import ProjectsSection from './components/ProjectsSection';
import SkillsSection from './components/SkillsSection';
import FigmaSection from './components/FigmaSection';
import ContactSection from './components/ContactSection';

export default function MinimalModernPortfolio() {
	return (
		<div className="min-h-screen matrix-bg relative">
			<HeroSection />
			<ProjectsSection />
			<SkillsSection />
			<FigmaSection />
			<ContactSection />
		</div>
	);
}
