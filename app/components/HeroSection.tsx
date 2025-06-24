'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import ParallaxWrapper from './ParallaxWrapper';
import Hero3DParallax from './Hero3DParallax';

export default function HeroSection() {
	return (
		<motion.section
			initial={{ opacity: 0 }}
			animate={{ opacity: 1 }}
			transition={{ duration: 1 }}
			className="h-screen flex items-center justify-center relative overflow-hidden bg-gradient-to-br from-background via-background to-background"
		>
			<Hero3DParallax />
			<ParallaxWrapper speed={0.3}>
				<div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 to-blue-900/20 dark:from-purple-900/30 dark:to-blue-900/30" />
			</ParallaxWrapper>
			<div className="absolute inset-0">
				<div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(17,24,39,0.7),hsl(var(--background)))]" />
			</div>

			<ParallaxWrapper speed={0.2} className="relative z-10 text-center">
				<motion.h1
					initial={{ y: 50 }}
					animate={{ y: 0 }}
					transition={{ duration: 0.8, delay: 0.2 }}
					className="text-4xl md:text-7xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-600"
				>
					Liam Moodley
				</motion.h1>
				<motion.div
					initial={{ y: 50, opacity: 0 }}
					animate={{ y: 0, opacity: 1 }}
					transition={{ duration: 0.8, delay: 0.4 }}
					className="mb-6 px-4 text-center"
				>
					<p className="text-lg md:text-xl text-gray-300 mb-4">
						Interactive Web Developer & UI/UX Designer
					</p>
					<p className="text-base md:text-lg text-gray-400 font-light italic">
						Coding To Connect. Designing for Humans.
					</p>
				</motion.div>

				<motion.div
					initial={{ y: 50, opacity: 0 }}
					animate={{ y: 0, opacity: 1 }}
					transition={{ duration: 0.8, delay: 0.5 }}
					className="flex flex-col items-center gap-4 mb-6"
				>
					<div className="flex items-center gap-2 text-gray-300">
						<svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
							<path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
						</svg>
						<span className="text-sm">Johannesburg, ZA</span>
					</div>

					<a
						href="mailto:niaexedev@gmail.com"
						className="flex items-center gap-2 px-4 py-2 bg-white/10 hover:bg-white/20 rounded-full transition-colors text-sm"
					>
						<svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
							<path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
							<path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
						</svg>
						<span>niaexedev@gmail.com</span>
					</a>

					<div className="flex gap-4">
						<a href="https://github.com/BlitzNoval" target="_blank" rel="noopener noreferrer" className="p-2 bg-white/10 hover:bg-white/20 rounded-full transition-colors">
							<Image 
								src="/github-logo-git-hub-icon-with-text-on-white-and-black-background-free-vector.jpg" 
								alt="GitHub" 
								width={20} 
								height={20} 
								className="rounded"
							/>
						</a>
						<a href="https://www.linkedin.com/in/liammoodley/" target="_blank" rel="noopener noreferrer" className="p-2 bg-white/10 hover:bg-white/20 rounded-full transition-colors">
							<Image 
								src="/LINKEDINLOGO.png" 
								alt="LinkedIn" 
								width={20} 
								height={20}
							/>
						</a>
						<a href="https://www.figma.com/@liamjm" target="_blank" rel="noopener noreferrer" className="p-2 bg-white/10 hover:bg-white/20 rounded-full transition-colors">
							<Image 
								src="/FIGMALOGO.png" 
								alt="Figma" 
								width={20} 
								height={20}
							/>
						</a>
						<a href="https://ljmoodley03.wixsite.com/liam-j-m-1/blog" target="_blank" rel="noopener noreferrer" className="p-2 bg-white/10 hover:bg-white/20 rounded-full transition-colors">
							<Image 
								src="/WIXLOGO.png" 
								alt="Wix" 
								width={20} 
								height={20}
							/>
						</a>
					</div>
				</motion.div>
			</ParallaxWrapper>

			<motion.div
				initial={{ y: 50, opacity: 0 }}
				animate={{ y: 0, opacity: 1 }}
				transition={{ duration: 0.8, delay: 0.6 }}
				className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
			>
				<div className="animate-bounce">
					<svg className="w-6 h-6 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
						<path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 14l-7 7m0 0l-7-7m7 7V3" />
					</svg>
				</div>
			</motion.div>
		</motion.section>
	);
}
