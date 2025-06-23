'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';

export default function ParallaxLayers() {
	const ref = useRef<HTMLDivElement>(null);
	const { scrollYProgress } = useScroll({
		target: ref,
		offset: ['start end', 'end start']
	});

	// Different scroll speeds for 3D parallax effect
	const y1 = useTransform(scrollYProgress, [0, 1], [-300, 300]);
	const y2 = useTransform(scrollYProgress, [0, 1], [-200, 200]);
	const y3 = useTransform(scrollYProgress, [0, 1], [-100, 100]);
	const y4 = useTransform(scrollYProgress, [0, 1], [-50, 50]);
	const rotate1 = useTransform(scrollYProgress, [0, 1], [0, 360]);
	const rotate2 = useTransform(scrollYProgress, [0, 1], [0, -180]);
	const scale = useTransform(scrollYProgress, [0, 0.5, 1], [0.8, 1.2, 0.8]);

	return (
		<div ref={ref} className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
			{/* Layer 1 - Furthest back */}
			<motion.div
				className="absolute inset-0"
				style={{ y: y1 }}
			>
				<div className="absolute top-20 left-10 w-32 h-32 bg-gradient-to-r from-purple-500/10 to-blue-500/10 rounded-full blur-xl" />
				<div className="absolute top-96 right-20 w-24 h-24 bg-gradient-to-r from-blue-500/10 to-cyan-500/10 rounded-full blur-lg" />
				<div className="absolute bottom-40 left-1/4 w-28 h-28 bg-gradient-to-r from-purple-500/10 to-pink-500/10 rounded-full blur-xl" />
			</motion.div>

			{/* Layer 2 - Middle back */}
			<motion.div
				className="absolute inset-0"
				style={{ y: y2, rotate: rotate1 }}
			>
				<div className="absolute top-32 right-1/4 w-20 h-20 bg-gradient-to-r from-cyan-500/15 to-blue-500/15 rounded-full blur-md" />
				<div className="absolute bottom-60 left-1/3 w-16 h-16 bg-gradient-to-r from-purple-500/15 to-violet-500/15 rounded-full blur-md" />
				<div className="absolute top-1/2 left-1/2 w-12 h-12 bg-gradient-to-r from-pink-500/15 to-purple-500/15 rounded-full blur-sm" />
			</motion.div>

			{/* Layer 3 - Middle front */}
			<motion.div
				className="absolute inset-0"
				style={{ y: y3, scale }}
			>
				<div className="absolute top-1/4 left-1/5 w-6 h-6 bg-primary/20 rounded-full" />
				<div className="absolute top-3/4 right-1/5 w-4 h-4 bg-blue-500/20 rounded-full" />
				<div className="absolute bottom-1/4 left-3/4 w-8 h-8 bg-purple-500/20 rounded-full" />
			</motion.div>

			{/* Layer 4 - Closest */}
			<motion.div
				className="absolute inset-0"
				style={{ y: y4, rotate: rotate2 }}
			>
				<div className="absolute top-1/3 right-1/3 w-3 h-3 bg-primary/30 rounded-full" />
				<div className="absolute bottom-1/3 left-1/6 w-2 h-2 bg-cyan-500/30 rounded-full" />
				<div className="absolute top-2/3 left-2/3 w-4 h-4 bg-purple-500/30 rounded-full" />
			</motion.div>

			{/* Geometric shapes with 3D transform */}
			<motion.div
				className="absolute inset-0"
				style={{ y: y2 }}
			>
				<motion.div
					className="absolute top-40 left-1/2 w-16 h-16 border border-primary/20"
					style={{ 
						rotate: rotate1,
						scale: useTransform(scrollYProgress, [0, 1], [1, 1.5])
					}}
					animate={{
						rotateY: [0, 360],
					}}
					transition={{
						duration: 20,
						repeat: Infinity,
						ease: "linear"
					}}
				/>
				<motion.div
					className="absolute bottom-32 right-1/4 w-12 h-12 border border-blue-500/20 rotate-45"
					style={{ 
						y: y3,
						scale: useTransform(scrollYProgress, [0, 1], [0.5, 1.2])
					}}
					animate={{
						rotateX: [0, 360],
					}}
					transition={{
						duration: 15,
						repeat: Infinity,
						ease: "linear"
					}}
				/>
			</motion.div>

			{/* Floating particles with 3D effect */}
			<motion.div
				className="absolute inset-0"
				style={{ y: y1 }}
			>
				{Array.from({ length: 20 }, (_, i) => (
					<motion.div
						key={i}
						className="absolute w-1 h-1 bg-primary/40 rounded-full"
						style={{
							left: `${Math.random() * 100}%`,
							top: `${Math.random() * 100}%`,
						}}
						animate={{
							y: [0, -20, 0],
							opacity: [0.2, 0.8, 0.2],
							scale: [1, 1.5, 1],
						}}
						transition={{
							duration: 3 + Math.random() * 2,
							repeat: Infinity,
							delay: Math.random() * 2,
							ease: "easeInOut"
						}}
					/>
				))}
			</motion.div>
		</div>
	);
}