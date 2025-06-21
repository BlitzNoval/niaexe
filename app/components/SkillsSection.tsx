'use client';

import { motion } from 'framer-motion';

const skills = [
	{ name: 'CSS3 & Styling', category: 'Frontend' },
	{ name: 'JavaScript ES6+', category: 'Programming' },
	{ name: 'Next.js & React', category: 'Frameworks' },
	{ name: 'D3.js Data Visualization', category: 'Specialized' },
	{ name: 'Node.js Backend', category: 'Backend' },
	{ name: 'SEO Optimization', category: 'Marketing' },
	{ name: 'WordPress Development', category: 'CMS' },
	{ name: 'UI/UX Design', category: 'Design' }
];

export default function SkillsSection() {
	return (
		<section className="py-12 md:py-20 bg-gradient-to-b from-black to-purple-900/20">
			<div className="max-w-7xl mx-auto px-4">
				<motion.h2
					initial={{ opacity: 0, y: 20 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true }}
					transition={{ duration: 0.6 }}
					className="text-3xl md:text-4xl font-bold mb-8 md:mb-12 text-center"
				>
					Skills & Technologies
				</motion.h2>

				<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
					{skills.map((skill, index) => (
						<motion.div
							key={skill.name}
							initial={{ opacity: 0, scale: 0.8 }}
							whileInView={{ opacity: 1, scale: 1 }}
							viewport={{ once: true }}
							transition={{ duration: 0.4, delay: index * 0.1 }}
							whileHover={{ scale: 1.05 }}
							className="bg-white/5 rounded-xl p-6 text-center hover:bg-white/10 transition-colors border border-white/10"
						>
							<div className="mb-2">
								<span className="text-xs px-2 py-1 bg-blue-600/20 text-blue-300 rounded-full">
									{skill.category}
								</span>
							</div>
							<h3 className="text-lg font-semibold text-white">{skill.name}</h3>
						</motion.div>
					))}
				</div>
			</div>
		</section>
	);
}
