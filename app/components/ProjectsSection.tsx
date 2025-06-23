'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import ParallaxWrapper from './ParallaxWrapper';

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
		title: 'University Portfolio Work',
		description: 'Academic projects featuring web development and game design innovations',
		image: '/code.jpg',
		link: 'https://ljmoodley03.wixsite.com/liam-j-m-1',
		type: 'NextJS & React',
		tech: 'CSS, D3.js',
		client: 'Personal Work',
		note: 'Academic Projects'
	},
	{
		id: 6,
		title: 'Coming Soon',
		description: 'Exciting new projects in development. Stay tuned for updates.',
		image: '/laptop.jpg',
		link: '#',
		type: 'New Project',
		tech: 'Coming Soon',
		client: 'TBA',
		note: 'In Development',
		comingSoon: true
	},
];

export default function ProjectsSection() {
	return (
		<ParallaxWrapper speed={0.2}>
			<section className="py-12 md:py-20 px-4 max-w-7xl mx-auto">
				<motion.h2
					initial={{ opacity: 0, y: 20 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true }}
					transition={{ duration: 0.6 }}
					className="text-3xl md:text-4xl font-bold mb-8 md:mb-12 text-center text-foreground"
				>
					Featured Clients
				</motion.h2>

				<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
					{projects.map((project, index) => (
						<motion.div
							key={project.id}
							initial={{ opacity: 0, y: 20 }}
							whileInView={{ opacity: 1, y: 0 }}
							viewport={{ once: true }}
							transition={{ duration: 0.6, delay: index * 0.1 }}
							whileHover={{ y: -5, scale: 1.02 }}
							className="group bg-card border border-gray-800 dark:border-gray-700 light:border-gray-200 rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300"
						>
							{/* Image Container */}
							<div className="relative aspect-video overflow-hidden">
								<Image 
									src={project.image} 
									alt={project.title} 
									fill 
									className="object-cover transition-transform group-hover:scale-105" 
								/>
								<div className="absolute top-3 right-3">
									<span className="text-xs px-2 py-1 bg-black/80 text-white rounded-full font-medium">
										{project.client}
									</span>
								</div>
							</div>

							{/* Content Container */}
							<div className="p-6 space-y-4">
								<p className="text-card-foreground text-sm leading-relaxed">{project.description}</p>
								
								{project.note && (
									<p className="text-yellow-500 dark:text-yellow-400 text-xs font-medium bg-yellow-100 dark:bg-yellow-900/20 px-2 py-1 rounded-full inline-block">
										{project.note}
									</p>
								)}

								<div className="flex flex-wrap gap-2">
									<span className="text-xs px-3 py-1 bg-purple-100 dark:bg-purple-900/30 text-purple-700 dark:text-purple-300 rounded-full font-medium">
										{project.type}
									</span>
									<span className="text-xs px-3 py-1 bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-300 rounded-full font-medium">
										{project.tech}
									</span>
								</div>

								<div className="pt-2">
									{project.comingSoon ? (
										<span className="inline-flex items-center gap-2 px-4 py-2 bg-gray-100 dark:bg-gray-800 text-gray-500 dark:text-gray-400 rounded-full text-sm font-medium cursor-not-allowed">
											<div className="w-2 h-2 bg-yellow-400 rounded-full animate-pulse"></div>
											Coming Soon
										</span>
									) : (
										<Link 
											href={project.link} 
											target="_blank" 
											rel="noopener noreferrer" 
											className="inline-flex items-center gap-2 px-4 py-2 bg-primary text-primary-foreground rounded-full text-sm font-medium hover:bg-primary/90 transition-all duration-200 group-hover:scale-105"
										>
											<span>Visit Website</span>
											<svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
												<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
											</svg>
										</Link>
									)}
								</div>
							</div>
						</motion.div>
					))}
				</div>
			</section>
		</ParallaxWrapper>
	);
}