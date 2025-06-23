'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';

interface ParallaxWrapperProps {
	children: React.ReactNode;
	speed?: number;
	className?: string;
}

export default function ParallaxWrapper({ children, speed = 0.5, className = '' }: ParallaxWrapperProps) {
	const ref = useRef<HTMLDivElement>(null);
	const { scrollYProgress } = useScroll({
		target: ref,
		offset: ['start end', 'end start']
	});

	const y = useTransform(scrollYProgress, [0, 1], [-100 * speed, 100 * speed]);

	return (
		<div ref={ref} className={className}>
			<motion.div style={{ y }}>
				{children}
			</motion.div>
		</div>
	);
}