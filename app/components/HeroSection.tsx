'use client';

import { motion } from 'framer-motion';
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
			
			{/* Enhanced spinning gradient background */}
			<motion.div 
				className="absolute inset-0 w-[200%] h-[200%] -top-1/2 -left-1/2"
				initial={{ opacity: 0, scale: 0.3, rotate: 0 }}
				animate={{ 
					opacity: [0, 0.7, 1],
					scale: [0.3, 1.2, 1],
					rotate: [0, 180, 360] 
				}}
				transition={{ 
					opacity: { duration: 1, delay: 1 },
					scale: { duration: 1.5, delay: 1 },
					rotate: { 
						duration: 30,
						repeat: Infinity,
						ease: "linear",
						delay: 2
					}
				}}
				style={{
					background: `
						conic-gradient(from 0deg, 
							rgba(147, 51, 234, 0.3) 0deg,
							rgba(59, 130, 246, 0.2) 60deg,
							rgba(167, 139, 250, 0.25) 120deg,
							rgba(99, 102, 241, 0.2) 180deg,
							rgba(139, 92, 246, 0.3) 240deg,
							rgba(124, 58, 237, 0.25) 300deg,
							rgba(147, 51, 234, 0.3) 360deg
						)
					`
				}}
			/>
			
			{/* Central star field background */}
			<motion.div 
				className="absolute inset-0"
				initial={{ opacity: 0 }}
				animate={{ opacity: 1 }}
				transition={{ duration: 1.5, delay: 1.5 }}
			>
				{Array.from({ length: 100 }).map((_, i) => (
					<motion.div
						key={`star-${i}`}
						className="absolute bg-white rounded-full"
						style={{
							top: `${Math.random() * 100}%`,
							left: `${Math.random() * 100}%`,
							width: `${1 + Math.random() * 2}px`,
							height: `${1 + Math.random() * 2}px`,
						}}
						animate={{ 
							opacity: [0.3, 1, 0.3],
							scale: [0.5, 1, 0.5]
						}}
						transition={{ 
							duration: 2 + Math.random() * 3,
							repeat: Infinity,
							delay: Math.random() * 2
						}}
					/>
				))}
			</motion.div>
			
			{/* Delayed blur overlay */}
			<motion.div 
				className="absolute inset-0"
				initial={{ opacity: 0 }}
				animate={{ opacity: 1 }}
				transition={{ duration: 2, delay: 3 }}
			>
				<div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(17,24,39,0.6),hsl(var(--background)))] backdrop-blur-sm" />
			</motion.div>

			<ParallaxWrapper speed={0.2} className="relative z-50 text-center">
				<motion.h1
					initial={{ y: 50, opacity: 0 }}
					animate={{ 
						y: 0, 
						opacity: 1,
						scale: [1, 1.02, 1]
					}}
					transition={{ 
						y: { duration: 0.8, delay: 2 },
						opacity: { duration: 0.8, delay: 2 },
						scale: { duration: 3, repeat: Infinity, ease: "easeInOut", delay: 4 }
					}}
					className="text-4xl md:text-7xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-600"
				>
					Liam Moodley
				</motion.h1>
				<motion.div
					initial={{ y: 50, opacity: 0 }}
					animate={{ y: 0, opacity: 1 }}
					transition={{ duration: 0.8, delay: 2.2 }}
					className="mb-6 px-4 text-center"
				>
					<motion.p 
						className="text-lg md:text-xl text-gray-300 mb-4"
						animate={{ 
							x: [0, 3, -3, 0],
							opacity: [1, 0.8, 1]
						}}
						transition={{ 
							duration: 4,
							repeat: Infinity,
							ease: "easeInOut",
							delay: 5
						}}
					>
						Interactive Web Developer & UI/UX Designer
					</motion.p>
					<motion.p 
						className="text-base md:text-lg text-gray-400 font-light italic"
						animate={{ 
							y: [0, 4, 0],
							scale: [1, 1.01, 1]
						}}
						transition={{ 
							duration: 3.5,
							repeat: Infinity,
							ease: "easeInOut",
							delay: 6
						}}
					>
						Coding To Connect. Designing for Humans.
					</motion.p>
				</motion.div>

				<motion.div
					initial={{ y: 50, opacity: 0 }}
					animate={{ y: 0, opacity: 1 }}
					transition={{ duration: 0.8, delay: 2.4 }}
					className="flex flex-col items-center gap-4 mb-6"
				>
					<motion.a
						href="mailto:niaexedev@gmail.com"
						className="flex items-center gap-2 px-4 py-2 bg-white/10 hover:bg-white/20 rounded-full transition-colors text-sm relative z-10"
						animate={{ 
							scale: [1, 1.02, 1],
							y: [0, -2, 0]
						}}
						whileHover={{ 
							scale: 1.02,
							y: -2
						}}
						transition={{ 
							duration: 5,
							repeat: Infinity,
							ease: "easeInOut",
							delay: 6
						}}
					>
						<motion.svg 
							className="w-4 h-4" 
							fill="currentColor" 
							viewBox="0 0 20 20"
							animate={{ 
								rotate: [0, 5, -5, 0]
							}}
							whileHover={{ 
								rotate: 0
							}}
							transition={{ 
								duration: 4,
								repeat: Infinity,
								ease: "easeInOut",
								delay: 8
							}}
						>
							<path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
							<path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
						</motion.svg>
						<span>niaexedev@gmail.com</span>
					</motion.a>

					<div className="flex gap-4 relative z-50">
						<motion.a 
							href="https://github.com/BlitzNoval" 
							target="_blank" 
							rel="noopener noreferrer" 
							className="transition-colors p-3 hover:bg-white/20 rounded-full relative z-50 cursor-pointer"
							animate={{ 
								y: [0, -3, 0],
								rotate: [0, 2, -2, 0]
							}}
							whileHover={{ 
								y: -3,
								rotate: 0
							}}
							transition={{ 
								duration: 5,
								repeat: Infinity,
								delay: 7
							}}
						>
							<svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
								<path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
							</svg>
						</motion.a>
						<motion.a 
							href="https://www.linkedin.com/in/liammoodley/" 
							target="_blank" 
							rel="noopener noreferrer" 
							className="transition-colors p-3 hover:bg-white/20 rounded-full relative z-50 cursor-pointer"
							animate={{ 
								y: [0, -3, 0],
								scale: [1, 1.1, 1]
							}}
							whileHover={{ 
								y: -3,
								scale: 1.1
							}}
							transition={{ 
								duration: 5,
								repeat: Infinity,
								delay: 7.5
							}}
						>
							<svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
								<path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
							</svg>
						</motion.a>
						<motion.a 
							href="https://www.figma.com/@liamjm" 
							target="_blank" 
							rel="noopener noreferrer" 
							className="transition-colors p-3 hover:bg-white/20 rounded-full relative z-50 cursor-pointer"
							animate={{ 
								y: [0, -3, 0],
								rotate: [0, -3, 3, 0]
							}}
							whileHover={{ 
								y: -3,
								rotate: 0
							}}
							transition={{ 
								duration: 5,
								repeat: Infinity,
								delay: 8
							}}
						>
							<svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
								<path d="M15.852 8.981h-4.588V0h4.588c2.476 0 4.49 2.014 4.49 4.49s-2.014 4.491-4.49 4.491zM12.735 7.51h3.117c1.665 0 3.019-1.355 3.019-3.019s-1.354-3.019-3.019-3.019h-3.117V7.51zm0 1.471H8.148c-2.476 0-4.49-2.015-4.49-4.491S5.672 0 8.148 0h4.588v8.981zm-4.587-7.51c-1.665 0-3.019 1.355-3.019 3.019s1.354 3.02 3.019 3.02h3.117V1.471H8.148zm4.587 15.019H8.148c-2.476 0-4.49-2.014-4.49-4.49s2.014-4.49 4.49-4.49h4.588v8.98zM8.148 8.981c-1.665 0-3.019 1.355-3.019 3.019s1.355 3.019 3.019 3.019h3.117v-6.038H8.148zm7.704 0c2.476 0 4.49 2.015 4.49 4.491s-2.014 4.49-4.49 4.49-4.49-2.015-4.49-4.491 2.014-4.491 4.49-4.491zm0 7.51c1.665 0 3.019-1.355 3.019-3.019s-1.355-3.019-3.019-3.019-3.019 1.355-3.019 3.019 1.354 3.019 3.019 3.019zM8.148 24c-2.476 0-4.49-2.015-4.49-4.491s2.014-4.49 4.49-4.49 4.49 2.015 4.49 4.49S10.624 24 8.148 24zm0-7.51c-1.665 0-3.019 1.355-3.019 3.019s1.355 3.019 3.019 3.019 3.019-1.355 3.019-3.019-1.354-3.019-3.019-3.019z"/>
							</svg>
						</motion.a>
						<motion.a 
							href="https://ljmoodley03.wixsite.com/liam-j-m-1/blog" 
							target="_blank" 
							rel="noopener noreferrer" 
							className="transition-colors p-3 hover:bg-white/20 rounded-full relative z-50 cursor-pointer"
							animate={{ 
								y: [0, -3, 0],
								rotate: [0, 4, -4, 0]
							}}
							whileHover={{ 
								y: -3,
								rotate: 0
							}}
							transition={{ 
								duration: 5,
								repeat: Infinity,
								delay: 8.5
							}}
						>
							<svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
								<path d="M13.663 6.956V3.478c0-.9-.731-1.63-1.63-1.63H1.63C.731 1.848 0 2.578 0 3.478v17.044c0 .9.731 1.63 1.63 1.63h10.403c.9 0 1.63-.731 1.63-1.63V17.87h8.707c.9 0 1.63-.731 1.63-1.63V8.587c0-.9-.731-1.63-1.63-1.63h-8.707z"/>
							</svg>
						</motion.a>
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
