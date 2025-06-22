'use client';

import { motion } from 'framer-motion';
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
		tech: 'WordPress'
	},
	{
		id: 2,
		title: 'Fractional Agency',
		description: 'Marketing company platform showcasing fractional marketing services',
		image: '/Fractional.png',
		link: 'https://www.fractionalagency.co.za/',
		type: 'Business',
		tech: 'WordPress, Custom CSS'
	},
	{
		id: 3,
		title: 'Africa Matters Initiative',
		description: 'NGO platform promoting African development and community initiatives',
		image: '/AfricaMatters.png',
		link: 'https://www.fractionalagency.co.za/',
		type: 'WIX',
		tech: 'Responsiveness'
	},
	{
		id: 4,
		title: 'CROW Animal Rehabilitation',
		description: 'Wildlife rehabilitation center with donation and volunteer management',
		image: '/Crow.png',
		link: 'https://crowkzn.co.za/',
		type: 'UI/UX',
		tech: 'NGO Website'
	},
	{
		id: 5,
		title: 'University Portfolio Work',
		description: 'Collection of academic projects showcasing web development and design skills',
		image: '/Wix.png',
		link: 'https://ljmoodley03.wixsite.com/liam-j-m-1',
		type: 'NextJS & React',
		tech: 'CSS, D3.js'
	},
];

export default function ProjectsSection() {
	return (
		<section className="py-12 md:py-20 px-4 max-w-7xl mx-auto">
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
				{projects.map((project) => (
					<motion.div
						key={project.id}
						initial={{ opacity: 0, y: 20 }}
						whileInView={{ opacity: 1, y: 0 }}
						viewport={{ once: true }}
						transition={{ duration: 0.6, delay: project.id * 0.1 }}
						whileHover={{ scale: 1.02 }}
						className="group relative aspect-video bg-gradient-to-br from-purple-900/50 to-blue-900/50 rounded-xl overflow-hidden"
					>
						<Image src={project.image} alt={project.title} fill className="object-cover transition-transform group-hover:scale-105" />
						<div className="absolute inset-0 bg-black/50 group-hover:bg-black/30 transition-colors duration-300" />
						<div className="absolute inset-0 p-6 flex flex-col justify-end">
							<h3 className="text-xl font-bold mb-2">{project.title}</h3>
							<p className="text-gray-300 mb-3 text-sm">{project.description}</p>
							<div className="mb-3">
								<span className="text-xs px-2 py-1 bg-purple-600/20 text-purple-300 rounded-full mr-2">
									{project.type}
								</span>
								<span className="text-xs px-2 py-1 bg-green-600/20 text-green-300 rounded-full">
									{project.tech}
								</span>
							</div>
							<div className="flex gap-4">
								<Link href={project.link} target="_blank" rel="noopener noreferrer" className="text-sm px-4 py-2 bg-white/10 hover:bg-white/20 rounded-full transition-colors">
									Visit Website
								</Link>
							</div>
						</div>
					</motion.div>
				))}
			</div>
		</section>
	);
}
