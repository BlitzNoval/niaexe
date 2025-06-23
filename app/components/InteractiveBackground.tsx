'use client';

import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

interface Particle {
	id: number;
	x: number;
	y: number;
	vx: number;
	vy: number;
	size: number;
}

export default function InteractiveBackground() {
	const [particles, setParticles] = useState<Particle[]>([]);
	const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

	useEffect(() => {
		// Initialize particles
		const initialParticles = Array.from({ length: 50 }, (_, i) => ({
			id: i,
			x: Math.random() * window.innerWidth,
			y: Math.random() * window.innerHeight,
			vx: (Math.random() - 0.5) * 0.5,
			vy: (Math.random() - 0.5) * 0.5,
			size: Math.random() * 3 + 1,
		}));
		setParticles(initialParticles);

		// Mouse tracking
		const handleMouseMove = (e: MouseEvent) => {
			setMousePosition({ x: e.clientX, y: e.clientY });
		};

		window.addEventListener('mousemove', handleMouseMove);

		// Animation loop
		const animate = () => {
			setParticles(prev => prev.map(particle => {
				const newX = particle.x + particle.vx;
				const newY = particle.y + particle.vy;

				// Bounce off edges
				if (newX <= 0 || newX >= window.innerWidth) particle.vx *= -1;
				if (newY <= 0 || newY >= window.innerHeight) particle.vy *= -1;

				return {
					...particle,
					x: Math.max(0, Math.min(window.innerWidth, newX)),
					y: Math.max(0, Math.min(window.innerHeight, newY)),
				};
			}));
		};

		const interval = setInterval(animate, 50);

		return () => {
			window.removeEventListener('mousemove', handleMouseMove);
			clearInterval(interval);
		};
	}, []);

	return (
		<div className="fixed inset-0 pointer-events-none z-0 opacity-30">
			{particles.map((particle) => {
				const distance = Math.sqrt(
					Math.pow(mousePosition.x - particle.x, 2) + 
					Math.pow(mousePosition.y - particle.y, 2)
				);
				const isNearMouse = distance < 100;

				return (
					<motion.div
						key={particle.id}
						className="absolute rounded-full bg-primary"
						style={{
							x: particle.x,
							y: particle.y,
							width: particle.size,
							height: particle.size,
						}}
						animate={{
							scale: isNearMouse ? 2 : 1,
							opacity: isNearMouse ? 0.8 : 0.3,
						}}
						transition={{
							type: 'spring',
							stiffness: 300,
							damping: 30,
						}}
					/>
				);
			})}
		</div>
	);
}