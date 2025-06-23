'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';

export default function Hero3DParallax() {
	const ref = useRef<HTMLDivElement>(null);
	const { scrollYProgress } = useScroll({
		target: ref,
		offset: ['start start', 'end start']
	});

	// 3D parallax transforms
	const rotateX = useTransform(scrollYProgress, [0, 1], [0, 15]);
	const rotateY = useTransform(scrollYProgress, [0, 1], [0, -10]);
	const scale = useTransform(scrollYProgress, [0, 1], [1, 0.8]);
	const z1 = useTransform(scrollYProgress, [0, 1], [0, -100]);
	const z2 = useTransform(scrollYProgress, [0, 1], [0, -200]);
	const z3 = useTransform(scrollYProgress, [0, 1], [0, -300]);

	return (
		<div ref={ref} className="absolute inset-0 pointer-events-none overflow-hidden">
			{/* 3D Layer 1 - Closest */}
			<motion.div
				className="absolute inset-0"
				style={{
					rotateX,
					rotateY,
					scale,
					z: z1,
					transformStyle: 'preserve-3d',
					perspective: 1000,
				}}
			>
				<div className="absolute top-1/4 left-1/4 w-32 h-32 bg-gradient-to-br from-purple-500/20 to-transparent rounded-full blur-xl" />
				<div className="absolute bottom-1/3 right-1/4 w-24 h-24 bg-gradient-to-br from-blue-500/20 to-transparent rounded-full blur-lg" />
			</motion.div>

			{/* 3D Layer 2 - Middle */}
			<motion.div
				className="absolute inset-0"
				style={{
					rotateX: useTransform(scrollYProgress, [0, 1], [0, 25]),
					rotateY: useTransform(scrollYProgress, [0, 1], [0, -15]),
					scale: useTransform(scrollYProgress, [0, 1], [1, 0.6]),
					z: z2,
					transformStyle: 'preserve-3d',
				}}
			>
				<motion.div
					className="absolute top-1/2 left-1/2 w-20 h-20"
					style={{
						x: '-50%',
						y: '-50%',
					}}
					animate={{
						rotateZ: [0, 360],
					}}
					transition={{
						duration: 30,
						repeat: Infinity,
						ease: 'linear'
					}}
				>
					<div className="w-full h-full border-2 border-primary/30 rounded-full" />
					<div className="absolute top-1/2 left-1/2 w-1/2 h-1/2 border border-blue-500/30 rounded-full transform -translate-x-1/2 -translate-y-1/2" />
				</motion.div>
			</motion.div>

			{/* 3D Layer 3 - Furthest */}
			<motion.div
				className="absolute inset-0"
				style={{
					rotateX: useTransform(scrollYProgress, [0, 1], [0, 35]),
					rotateY: useTransform(scrollYProgress, [0, 1], [0, -20]),
					scale: useTransform(scrollYProgress, [0, 1], [1, 0.4]),
					z: z3,
					transformStyle: 'preserve-3d',
				}}
			>
				{/* Floating geometric shapes */}
				<motion.div
					className="absolute top-20 left-20 w-16 h-16 border border-purple-500/20"
					animate={{
						rotateX: [0, 360],
						rotateY: [0, -360],
					}}
					transition={{
						duration: 20,
						repeat: Infinity,
						ease: 'linear'
					}}
				/>
				<motion.div
					className="absolute bottom-20 right-20 w-12 h-12 border border-blue-500/20 rotate-45"
					animate={{
						rotateZ: [45, 405],
						rotateX: [0, 180],
					}}
					transition={{
						duration: 15,
						repeat: Infinity,
						ease: 'linear'
					}}
				/>
			</motion.div>

			{/* Depth indicators */}
			<motion.div
				className="absolute inset-0"
				style={{
					scale: useTransform(scrollYProgress, [0, 1], [1, 2]),
					opacity: useTransform(scrollYProgress, [0, 0.5, 1], [0.1, 0.3, 0]),
				}}
			>
				{Array.from({ length: 15 }, (_, i) => (
					<motion.div
						key={i}
						className="absolute w-2 h-2 bg-primary/20 rounded-full"
						style={{
							left: `${10 + Math.random() * 80}%`,
							top: `${10 + Math.random() * 80}%`,
						}}
						animate={{
							scale: [1, 1.5, 1],
							opacity: [0.2, 0.6, 0.2],
							z: [0, 50, 0],
						}}
						transition={{
							duration: 4 + Math.random() * 3,
							repeat: Infinity,
							delay: Math.random() * 2,
							ease: 'easeInOut'
						}}
					/>
				))}
			</motion.div>
		</div>
	);
}