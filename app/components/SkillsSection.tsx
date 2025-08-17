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
		<section className="px-6 md:px-12 lg:px-24 py-32 bg-black text-white">
			<div className="max-w-7xl mx-auto">
				<div className="text-center mb-20">
					<h2 className="heading-lg text-white mb-6">
						Capabilities
					</h2>
					<p className="body-lg text-gray-400 max-w-3xl mx-auto">
						The tools and technologies I use to bring ideas to life
					</p>
				</div>

				<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-16 mb-24">
					{skillCategories.map((category) => (
						<div key={category.category} className="space-y-8 text-center lg:text-left">
							<h3 className="text-xl font-semibold text-white mb-6">
								{category.category}
							</h3>
							<div className="space-y-4">
								{category.skills.map((skill) => (
									<div key={skill} className="text-gray-300 text-lg font-medium">
										{skill}
									</div>
								))}
							</div>
						</div>
					))}
				</div>

				<div className="text-center">
					<div className="max-w-4xl mx-auto bg-gray-900 rounded-2xl p-12">
						<p className="text-xl text-gray-300 leading-relaxed mb-8">
							I focus on creating digital experiences that are both functional and beautiful. 
							From initial concept to final implementation, I work across the entire design and 
							development process to deliver solutions that connect with users and drive results.
						</p>
						<div className="flex justify-center">
							<div className="w-16 h-px bg-gradient-to-r from-transparent via-gray-500 to-transparent"></div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}