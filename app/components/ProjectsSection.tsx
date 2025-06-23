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
		link: 'https://www.fractionalagency.co.za/',
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
		<section className="py-12 md:py-20 px-4 max-w-7xl mx-auto bg-background dark:bg-gray-900 light:bg-white transition-colors duration-300">
			<motion.h2
				initial={{ opacity: 0, y: 20 }}
				whileInView={{ opacity: 1, y: 0 }}
				viewport={{ once: true }}
				transition={{ duration: 0.6 }}
				className="text-3xl md:text-4xl font-bold mb-8 md:mb-12 text-center"
			>
				Featured Clients
			</motion.h2>

			<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
				{projects.map((project, index) => (
					<ParallaxWrapper speed={0.1 * (index % 3)} key={project.id}>
						<motion.div
							initial={{ opacity: 0, y: 20 }}
							whileInView={{ opacity: 1, y: 0 }}
							viewport={{ once: true }}
							transition={{ duration: 0.6, delay: project.id * 0.1 }}
							whileHover={{ scale: 1.02 }}
							className="group relative aspect-video bg-gradient-to-br from-purple-900/50 to-blue-900/50 dark:from-purple-800/60 dark:to-blue-800/60 light:from-purple-200/30 light:to-blue-200/30 rounded-xl overflow-hidden"
						>
						<Image src={project.image} alt={project.title} fill className="object-cover transition-transform group-hover:scale-105" />
						<div className="absolute inset-0 bg-black/60 group-hover:bg-black/40 transition-colors duration-300" />
						<div className="absolute inset-0 p-6 flex flex-col justify-end">
							<p className="text-white mb-3 text-sm font-medium leading-relaxed drop-shadow-lg">{project.description}</p>
							{project.note && (
								<p className="text-yellow-300 mb-2 text-xs font-medium">{project.note}</p>
							)}
							<div className="mb-3">
								<span className="text-xs px-2 py-1 bg-purple-600/20 text-purple-300 rounded-full mr-2">
									{project.type}
								</span>
								<span className="text-xs px-2 py-1 bg-green-600/20 text-green-300 rounded-full">
									{project.tech}
								</span>
							</div>
							<div className="flex justify-between items-center">
								{project.comingSoon ? (
									<span className="text-sm px-4 py-2 bg-gray-600/20 text-gray-400 rounded-full cursor-not-allowed">
										Coming Soon
									</span>
								) : (
									<Link href={project.link} target="_blank" rel="noopener noreferrer" className="text-sm px-4 py-2 bg-white/10 hover:bg-white/20 rounded-full transition-colors">
										Visit Website
									</Link>
								)}
								<span className="text-xs text-gray-200 font-medium drop-shadow-md">{project.client}</span>
							</div>
							</div>
						</motion.div>
					</ParallaxWrapper>
				))}
			</div>
		</section>
	);
}
