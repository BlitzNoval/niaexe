const skillCategories = [
	{
		category: 'Frontend',
		skills: ['React', 'Next.js', 'TypeScript', 'HTML/CSS', 'JavaScript']
	},
	{
		category: 'Design',
		skills: ['UI/UX Design', 'Figma', 'Prototyping', 'Visual Design']
	},
	{
		category: 'Backend',
		skills: ['Node.js', 'API Development', 'Database Design']
	},
	{
		category: 'Tools',
		skills: ['WordPress', 'D3.js', 'Git', 'SEO']
	}
];

export default function SkillsSection() {
	return (
		<section className="px-6 md:px-12 lg:px-24 py-24 bg-black text-white">
			<div className="max-w-6xl">
				<h2 className="heading-lg text-white mb-24">
					Capabilities
				</h2>

				<div className="grid grid-cols-1 md:grid-cols-2 gap-16 lg:gap-24">
					{skillCategories.map((category) => (
						<div key={category.category} className="space-y-8">
							<h3 className="heading-md text-white">
								{category.category}
							</h3>
							<div className="space-y-4">
								{category.skills.map((skill) => (
									<div key={skill} className="body-lg text-gray-300">
										{skill}
									</div>
								))}
							</div>
						</div>
					))}
				</div>

				<div className="mt-32 max-w-3xl">
					<p className="body-lg text-gray-300 leading-relaxed">
						I focus on creating digital experiences that are both functional and beautiful. 
						From initial concept to final implementation, I work across the entire design and 
						development process to deliver solutions that connect with users and drive results.
					</p>
				</div>
			</div>
		</section>
	);
}