import Image from 'next/image';
import Link from 'next/link';

const projects = [
	{
		id: 1,
		title: 'People Solutions Hub',
		description: 'Professional HR company website with modern design and comprehensive functionality',
		image: '/PeopleSolutionsHub.png',
		link: 'https://peoplesolutionshub.com.au/',
		type: 'Business Website',
		tech: 'WordPress, SEO',
		client: 'People Solutions Hub'
	},
	{
		id: 2,
		title: 'Fractional Agency',
		description: 'Marketing company platform showcasing fractional marketing services',
		image: '/Fractional.png',
		link: 'https://www.fractionalagency.co.za/',
		type: 'Business Website',
		tech: 'WordPress, Custom CSS',
		client: 'Fractional Agency'
	},
	{
		id: 3,
		title: 'Africa Matters Initiative',
		description: 'NGO platform promoting African development and community initiatives',
		image: '/AfricaMatters.png',
		link: 'https://www.africamattersinitiative.com/',
		type: 'WIX',
		tech: 'Responsiveness',
		client: 'Africa Matters'
	},
	{
		id: 4,
		title: 'CROW Animal Rehabilitation',
		description: 'Wildlife rehabilitation center with donation and volunteer management',
		image: '/Crow.png',
		link: 'https://crowkzn.co.za/',
		type: 'UI/UX',
		tech: 'NGO Website',
		client: 'CROW KZN'
	},
	{
		id: 5,
		title: 'Developing Projects',
		description: 'Explore my personal blog and creative projects currently in development.',
		image: '/UnderDevelopmentGif.gif',
		link: 'https://ljmoodley03.wixsite.com/liam-j-m-1/blog',
		type: 'Personal Blog',
		tech: 'Wix Studio',
		client: 'Personal',
		note: 'In Development'
	},
];

export default function ProjectsSection() {
	return (
		<section className="px-6 md:px-12 lg:px-24 py-24">
			<div className="max-w-6xl">
				<h2 className="heading-lg mb-24">
					Selected Projects
				</h2>

				<div className="space-y-32">
					{projects.map((project, index) => (
						<div key={project.id} className="group">
							<div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
								<div className={`${index % 2 === 1 ? 'lg:order-2' : ''}`}>
									<div className="aspect-[4/3] relative bg-gray-100 overflow-hidden">
										<Image 
											src={project.image} 
											alt={project.title} 
											fill 
											className="object-cover"
										/>
									</div>
								</div>

								<div className={`space-y-8 ${index % 2 === 1 ? 'lg:order-1' : ''}`}>
									<div className="space-y-4">
										<h3 className="heading-md">
											{project.title}
										</h3>
										<p className="body-lg text-gray-600 max-w-lg">
											{project.description}
										</p>
									</div>

									<div className="flex flex-wrap gap-4">
										<span className="body-md text-black border border-black px-4 py-2">
											{project.type}
										</span>
										<span className="body-md text-gray-600">
											{project.tech}
										</span>
									</div>

									{project.note && (
										<div className="body-md text-black bg-yellow-100 px-4 py-2 inline-block">
											{project.note}
										</div>
									)}

									<Link 
										href={project.link} 
										target="_blank" 
										rel="noopener noreferrer" 
										className="inline-flex items-center gap-3 text-black hover:text-gray-600 transition-colors body-md group-hover:gap-4 transition-all"
									>
										Visit Website
										<svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
											<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
										</svg>
									</Link>
								</div>
							</div>
						</div>
					))}
				</div>
			</div>
		</section>
	);
}