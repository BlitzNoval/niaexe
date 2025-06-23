'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';
import ParallaxWrapper from './ParallaxWrapper';

const skills = [
	{ name: 'React', level: 90, icon: '⚛️', category: 'Frontend' },
	{ name: 'Next.js', level: 85, icon: '🚀', category: 'Frontend' },
	{ name: 'TypeScript', level: 80, icon: '📘', category: 'Language' },
	{ name: 'Node.js', level: 75, icon: '🟢', category: 'Backend' },
	{ name: 'UI/UX Design', level: 95, icon: '🎨', category: 'Design' },
	{ name: 'Figma', level: 90, icon: '🎯', category: 'Design' },
	{ name: 'WordPress', level: 85, icon: '📝', category: 'CMS' },
	{ name: 'D3.js', level: 70, icon: '📊', category: 'Visualization' },
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
							{/* Skill Icon */}
							<motion.div
								className="text-4xl mb-4 text-center"
								animate={{
									rotate: hoveredSkill === skill.name ? 360 : 0,
									scale: hoveredSkill === skill.name ? 1.2 : 1,
								}}
								transition={{ duration: 0.5 }}
							>
								{skill.icon}
							</motion.div>

							{/* Skill Name */}
							<h3 className="text-lg font-semibold text-card-foreground mb-2 text-center">
								{skill.name}
							</h3>

							{/* Category */}
							<p className="text-xs text-gray-500 dark:text-gray-400 mb-4 text-center">
								{skill.category}
							</p>

							{/* Progress Bar */}
							<div className="relative">
								<div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
									<motion.div
										className="bg-gradient-to-r from-purple-500 to-blue-500 h-2 rounded-full"
										initial={{ width: 0 }}
										whileInView={{ width: `${skill.level}%` }}
										viewport={{ once: true }}
										transition={{ duration: 1, delay: index * 0.1 }}
									/>
								</div>
								<motion.span
									className="text-xs font-medium text-primary mt-1 block text-center"
									initial={{ opacity: 0 }}
									whileInView={{ opacity: 1 }}
									transition={{ delay: 1 + index * 0.1 }}
								>
									{skill.level}%
								</motion.span>
							</div>

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

				{/* Interactive Tech Stack Visualization */}
				<motion.div
					initial={{ opacity: 0, y: 20 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true }}
					transition={{ duration: 0.6, delay: 0.5 }}
					className="mt-16 text-center"
				>
					<h3 className="text-xl font-semibold text-foreground mb-6">
						Interactive Stack
					</h3>
					<div className="flex flex-wrap justify-center gap-4">
						{skills.map((skill) => (
							<motion.span
								key={skill.name}
								whileHover={{ scale: 1.1, y: -2 }}
								whileTap={{ scale: 0.95 }}
								className="px-4 py-2 bg-primary/10 border border-primary/20 rounded-full text-primary cursor-pointer transition-all duration-200 hover:bg-primary/20"
							>
								{skill.icon} {skill.name}
							</motion.span>
						))}
					</div>
				</motion.div>
			</section>
		</ParallaxWrapper>
	);
}