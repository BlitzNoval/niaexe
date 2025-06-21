'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';

export default function FigmaSection() {
	return (
		<section className="py-12 md:py-20 px-4 bg-gradient-to-b from-purple-900/20 to-black">
			<div className="max-w-4xl mx-auto text-center">
				<motion.h2
					initial={{ opacity: 0, y: 20 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true }}
					transition={{ duration: 0.6 }}
					className="text-3xl md:text-4xl font-bold mb-8"
				>
					UI/UX Design Portfolio
				</motion.h2>
				
				<motion.p
					initial={{ opacity: 0, y: 20 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true }}
					transition={{ duration: 0.6, delay: 0.2 }}
					className="text-gray-300 mb-8 text-lg"
				>
					Explore my design work and creative process on Figma
				</motion.p>

				<motion.div
					initial={{ opacity: 0, scale: 0.95 }}
					whileInView={{ opacity: 1, scale: 1 }}
					viewport={{ once: true }}
					transition={{ duration: 0.6, delay: 0.3 }}
					className="bg-white/5 rounded-2xl p-8 border border-white/10 backdrop-blur-sm"
				>
					<div className="flex flex-col md:flex-row items-center gap-8">
						<div className="flex-1 text-left">
							<h3 className="text-2xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-600">
								Design Systems & Prototypes
							</h3>
							<p className="text-gray-300 mb-6">
								View my complete design portfolio featuring user interfaces, design systems, prototypes, and creative explorations. 
								From wireframes to high-fidelity mockups, see how I approach design challenges.
							</p>
							<div className="flex flex-wrap gap-3 mb-6">
								<span className="px-3 py-1 bg-purple-600/20 text-purple-300 rounded-full text-sm">UI Design</span>
								<span className="px-3 py-1 bg-pink-600/20 text-pink-300 rounded-full text-sm">UX Research</span>
								<span className="px-3 py-1 bg-blue-600/20 text-blue-300 rounded-full text-sm">Prototyping</span>
								<span className="px-3 py-1 bg-green-600/20 text-green-300 rounded-full text-sm">Design Systems</span>
							</div>
						</div>
						
						<div className="flex-shrink-0">
							<svg className="w-24 h-24 text-white/20" viewBox="0 0 24 24" fill="currentColor">
								<path d="M15.852 8.981h-4.588V0h4.588c2.476 0 4.49 2.014 4.49 4.49s-2.014 4.491-4.49 4.491zM12.735 7.51h3.117c1.665 0 3.019-1.355 3.019-3.02s-1.354-3.02-3.02-3.02h-3.116v6.04zm0 1.471H8.148c-2.476 0-4.49-2.015-4.49-4.491S5.672 0 8.148 0h4.588v8.981zm-4.587-7.51c-1.666 0-3.02 1.355-3.02 3.02s1.354 3.02 3.02 3.02h3.117V1.471H8.148zm4.587 15.019H8.148c-2.476 0-4.49-2.014-4.49-4.49s2.014-4.49 4.49-4.49h4.588v8.98zM8.148 8.981c-1.666 0-3.02 1.354-3.02 3.019s1.354 3.02 3.02 3.02h3.117V8.981H8.148zM8.172 24c-2.489 0-4.515-2.014-4.515-4.49s2.026-4.49 4.515-4.49 4.515 2.014 4.515 4.49S10.661 24 8.172 24zm0-7.509c-1.665 0-3.019 1.355-3.019 3.019s1.354 3.02 3.019 3.02 3.019-1.355 3.019-3.02-1.354-3.019-3.019-3.019zM19.481 24c-2.489 0-4.515-2.014-4.515-4.49s2.026-4.49 4.515-4.49 4.515 2.014 4.515 4.49S21.97 24 19.481 24zm0-7.509c-1.665 0-3.019 1.355-3.019 3.019s1.354 3.02 3.019 3.02 3.019-1.355 3.019-3.02-1.354-3.019-3.019-3.019z"/>
							</svg>
						</div>
					</div>
					
					<Link
						href="https://www.figma.com/@liamjm"
						target="_blank"
						rel="noopener noreferrer"
						className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-500 hover:to-pink-500 rounded-full font-semibold transition-all duration-300 transform hover:scale-105"
					>
						<svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
							<path d="M15.852 8.981h-4.588V0h4.588c2.476 0 4.49 2.014 4.49 4.49s-2.014 4.491-4.49 4.491zM12.735 7.51h3.117c1.665 0 3.019-1.355 3.019-3.02s-1.354-3.02-3.02-3.02h-3.116v6.04zm0 1.471H8.148c-2.476 0-4.49-2.015-4.49-4.491S5.672 0 8.148 0h4.588v8.981zm-4.587-7.51c-1.666 0-3.02 1.355-3.02 3.02s1.354 3.02 3.02 3.02h3.117V1.471H8.148zm4.587 15.019H8.148c-2.476 0-4.49-2.014-4.49-4.49s2.014-4.49 4.49-4.49h4.588v8.98zM8.148 8.981c-1.666 0-3.02 1.354-3.02 3.019s1.354 3.02 3.02 3.02h3.117V8.981H8.148zM8.172 24c-2.489 0-4.515-2.014-4.515-4.49s2.026-4.49 4.515-4.49 4.515 2.014 4.515 4.49S10.661 24 8.172 24zm0-7.509c-1.665 0-3.019 1.355-3.019 3.019s1.354 3.02 3.019 3.02 3.019-1.355 3.019-3.02-1.354-3.019-3.019-3.019zM19.481 24c-2.489 0-4.515-2.014-4.515-4.49s2.026-4.49 4.515-4.49 4.515 2.014 4.515 4.49S21.97 24 19.481 24zm0-7.509c-1.665 0-3.019 1.355-3.019 3.019s1.354 3.02 3.019 3.02 3.019-1.355 3.019-3.02-1.354-3.019-3.019-3.019z"/>
						</svg>
						View My Figma Portfolio
					</Link>
				</motion.div>
			</div>
		</section>
	);
}