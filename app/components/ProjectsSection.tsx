'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';

const projects = [
	{
		id: 1,
		title: 'People Solutions Hub',
		description: 'Professional HR company website with modern design and comprehensive functionality',
		image: '/code.jpg',
		link: 'https://peoplesolutionshub.com.au/',
		type: 'Business Website',
		tech: 'WordPress, Custom CSS'
	},
	{
		id: 2,
		title: 'Fractional Agency',
		description: 'Marketing company platform showcasing fractional marketing services',
		image: '/laptop.jpg',
		link: 'https://www.fractionalagency.co.za/',
		type: 'Marketing Platform',
		tech: 'Next.js, React'
	},
	{
		id: 3,
		title: 'Africa Matters Initiative',
		description: 'NGO platform promoting African development and community initiatives',
		image: '/code.jpg',
		link: 'https://www.fractionalagency.co.za/',
		type: 'NGO Website',
		tech: 'WordPress, SEO'
	},
	{
		id: 4,
		title: 'CROW Animal Rehabilitation',
		description: 'Wildlife rehabilitation center with donation and volunteer management',
		image: '/laptop.jpg',
		link: 'https://crowkzn.co.za/',
		type: 'Non-Profit',
		tech: 'WordPress, UI/UX'
	},
	{
		id: 5,
		title: 'University Portfolio Work',
		description: 'Collection of academic projects showcasing web development and design skills',
		image: '/code.jpg',
		link: 'https://ljmoodley03.wixsite.com/liam-j-m-1',
		type: 'Academic Portfolio',
		tech: 'Wix, JavaScript, CSS'
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
