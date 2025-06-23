'use client';

import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

export default function AnimatedCursor() {
	const [position, setPosition] = useState({ x: 0, y: 0 });
	const [isHovering, setIsHovering] = useState(false);
	const [isVisible, setIsVisible] = useState(false);

	useEffect(() => {
		const updatePosition = (e: MouseEvent) => {
			setPosition({ x: e.clientX, y: e.clientY });
		};

		const handleMouseEnter = () => setIsVisible(true);
		const handleMouseLeave = () => setIsVisible(false);

		document.addEventListener('mousemove', updatePosition);
		document.addEventListener('mouseenter', handleMouseEnter);
		document.addEventListener('mouseleave', handleMouseLeave);

		// Add hover detection for interactive elements
		const interactiveElements = document.querySelectorAll('a, button, [role="button"]');
		
		const handleHoverStart = () => setIsHovering(true);
		const handleHoverEnd = () => setIsHovering(false);

		interactiveElements.forEach(el => {
			el.addEventListener('mouseenter', handleHoverStart);
			el.addEventListener('mouseleave', handleHoverEnd);
		});

		return () => {
			document.removeEventListener('mousemove', updatePosition);
			document.removeEventListener('mouseenter', handleMouseEnter);
			document.removeEventListener('mouseleave', handleMouseLeave);
			
			interactiveElements.forEach(el => {
				el.removeEventListener('mouseenter', handleHoverStart);
				el.removeEventListener('mouseleave', handleHoverEnd);
			});
		};
	}, []);

	if (!isVisible) return null;

	return (
		<>
			{/* Main cursor dot */}
			<motion.div
				className="fixed top-0 left-0 pointer-events-none z-50 mix-blend-difference"
				style={{
					x: position.x - 4,
					y: position.y - 4,
				}}
				animate={{
					scale: isHovering ? 0.5 : 1,
				}}
				transition={{
					type: 'spring',
					stiffness: 500,
					damping: 28,
				}}
			>
				<div className="w-2 h-2 bg-white rounded-full" />
			</motion.div>

			{/* Outer cursor ring */}
			<motion.div
				className="fixed top-0 left-0 pointer-events-none z-40 mix-blend-difference"
				style={{
					x: position.x - 16,
					y: position.y - 16,
				}}
				animate={{
					scale: isHovering ? 1.5 : 1,
					opacity: isHovering ? 0.8 : 0.3,
				}}
				transition={{
					type: 'spring',
					stiffness: 300,
					damping: 30,
				}}
			>
				<div className="w-8 h-8 border border-white rounded-full" />
			</motion.div>
		</>
	);
}