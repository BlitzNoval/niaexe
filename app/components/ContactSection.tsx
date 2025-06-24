'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import ParallaxWrapper from './ParallaxWrapper';

export default function ContactSection() {
	return (
		<ParallaxWrapper speed={0.3}>
			<section className="py-12 md:py-20 px-4">
			<div className="max-w-3xl mx-auto text-center">
				<motion.h2
					initial={{ opacity: 0, y: 20 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true }}
					transition={{ duration: 0.6 }}
					className="text-3xl md:text-4xl font-bold mb-8"
				>
					Let&apos;s Connect
				</motion.h2>
				<motion.p
					initial={{ opacity: 0, y: 20 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true }}
					transition={{ duration: 0.6, delay: 0.2 }}
					className="text-gray-300 mb-6"
				>
					Have a project in mind? Let&apos;s create something amazing together.
				</motion.p>

				<motion.div
					initial={{ opacity: 0, y: 20 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true }}
					transition={{ duration: 0.6, delay: 0.3 }}
					className="flex items-center justify-center gap-2 text-gray-300 mb-8"
				>
					<svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
						<path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
					</svg>
					<span>Johannesburg, ZA</span>
				</motion.div>

				<motion.div
					initial={{ opacity: 0, y: 20 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true }}
					transition={{ duration: 0.6, delay: 0.4 }}
					className="flex justify-center mb-8"
				>
					<a
						href="mailto:niaexedev@gmail.com"
						className="group flex items-center gap-2 px-6 py-3 bg-white/5 rounded-full hover:bg-white/10 transition-colors"
					>
						<svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
							<path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
							<path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
						</svg>
						<span>Get in Touch</span>
					</a>
				</motion.div>

				<motion.div
					initial={{ opacity: 0, y: 20 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true }}
					transition={{ duration: 0.6, delay: 0.5 }}
					className="flex justify-center gap-6"
				>
					<a href="https://github.com/BlitzNoval" target="_blank" rel="noopener noreferrer" className="p-3 bg-white/5 rounded-full hover:bg-white/10 transition-colors">
						<Image 
							src="/github-logo-git-hub-icon-with-text-on-white-and-black-background-free-vector.jpg" 
							alt="GitHub" 
							width={24} 
							height={24} 
							className="rounded"
						/>
					</a>
					<a href="https://www.linkedin.com/in/liammoodley/" target="_blank" rel="noopener noreferrer" className="p-3 bg-white/5 rounded-full hover:bg-white/10 transition-colors">
						<Image 
							src="/LINKEDINLOGO.png" 
							alt="LinkedIn" 
							width={24} 
							height={24}
						/>
					</a>
					<a href="https://www.figma.com/@liamjm" target="_blank" rel="noopener noreferrer" className="p-3 bg-white/5 rounded-full hover:bg-white/10 transition-colors">
						<Image 
							src="/FIGMALOGO.png" 
							alt="Figma" 
							width={24} 
							height={24}
						/>
					</a>
					<a href="https://ljmoodley03.wixsite.com/liam-j-m-1/blog" target="_blank" rel="noopener noreferrer" className="p-3 bg-white/5 rounded-full hover:bg-white/10 transition-colors">
						<Image 
							src="/WIXLOGO.png" 
							alt="Wix" 
							width={24} 
							height={24}
						/>
					</a>
				</motion.div>
			</div>
			</section>
		</ParallaxWrapper>
	);
}
