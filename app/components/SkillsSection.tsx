'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';
import ParallaxWrapper from './ParallaxWrapper';

const skills = [
	{ name: 'React', category: 'Frontend' },
	{ name: 'Next.js', category: 'Frontend' },
	{ name: 'TypeScript', category: 'Language' },
	{ name: 'Node.js', category: 'Backend' },
	{ name: 'UI/UX Design', category: 'Design' },
	{ name: 'Figma', category: 'Design' },
	{ name: 'WordPress', category: 'CMS' },
	{ name: 'D3.js', category: 'Visualization' },
];

export default function SkillsSection() {
	const [hoveredSkill, setHoveredSkill] = useState<string | null>(null);

	return (
		<ParallaxWrapper speed={0.15}>
			<section className="py-12 md:py-20 px-4 max-w-7xl mx-auto">
				<motion.h2
					initial={{ opacity: 0, y: 20 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true }}
					transition={{ duration: 0.6 }}
					className="text-3xl md:text-4xl font-bold mb-8 md:mb-12 text-center text-foreground"
				>
					Skills & Technologies
				</motion.h2>

				<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
					{skills.map((skill, index) => (
						<motion.div
							key={skill.name}
							initial={{ opacity: 0, y: 20 }}
							whileInView={{ opacity: 1, y: 0 }}
							viewport={{ once: true }}
							transition={{ duration: 0.6, delay: index * 0.1 }}
							whileHover={{ y: -5, scale: 1.05 }}
							onHoverStart={() => setHoveredSkill(skill.name)}
							onHoverEnd={() => setHoveredSkill(null)}
							className="group relative bg-card border border-gray-800 dark:border-gray-700 rounded-xl p-6 hover:shadow-2xl transition-all duration-300 cursor-pointer"
						>
							{/* Skill Name */}
							<h3 className="text-lg font-semibold text-card-foreground mb-2 text-center">
								{skill.name}
							</h3>

							{/* Category */}
							<p className="text-sm text-gray-500 dark:text-gray-400 text-center">
								{skill.category}
							</p>

							{/* Hover Effect Overlay */}
							<motion.div
								className="absolute inset-0 bg-gradient-to-br from-primary/10 to-blue-500/10 rounded-xl"
								initial={{ opacity: 0 }}
								animate={{ opacity: hoveredSkill === skill.name ? 1 : 0 }}
								transition={{ duration: 0.3 }}
							/>
						</motion.div>
					))}
				</div>

			</section>
		</ParallaxWrapper>
	);
}