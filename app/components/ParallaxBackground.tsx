'use client';

import { useEffect, useState } from 'react';

export default function ParallaxBackground() {
	const [scrollY, setScrollY] = useState(0);

	useEffect(() => {
		const handleScroll = () => setScrollY(window.scrollY);
		window.addEventListener('scroll', handleScroll);
		return () => window.removeEventListener('scroll', handleScroll);
	}, []);

	return (
		<div className="fixed inset-0 pointer-events-none z-0">
			{/* Subtle gradient mesh */}
			<div 
				className="absolute inset-0 gradient-mesh"
				style={{
					transform: `translateY(${scrollY * 0.1}px)`,
				}}
			/>
			
			{/* Floating geometric shapes */}
			<div 
				className="absolute top-20 left-10 w-32 h-32 bg-gray-50 rotate-45 opacity-30"
				style={{
					transform: `translateY(${scrollY * 0.15}px) rotate(45deg)`,
				}}
			/>
			
			<div 
				className="absolute top-1/3 right-20 w-24 h-24 border-2 border-gray-200 rounded-full opacity-40"
				style={{
					transform: `translateY(${scrollY * -0.1}px)`,
				}}
			/>
			
			<div 
				className="absolute bottom-1/4 left-1/4 w-16 h-16 bg-gray-100 opacity-50"
				style={{
					transform: `translateY(${scrollY * 0.2}px)`,
				}}
			/>
			
			{/* Dot pattern overlay on scroll */}
			<div 
				className="absolute inset-0 dot-pattern opacity-20"
				style={{
					transform: `translateY(${scrollY * -0.05}px)`,
				}}
			/>
		</div>
	);
}