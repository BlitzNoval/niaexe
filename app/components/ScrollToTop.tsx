'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect } from 'react';

export default function ScrollToTop() {
	const [isVisible, setIsVisible] = useState(false);

	useEffect(() => {
		const toggleVisibility = () => {
			// Show button when user has scrolled down 300px
			if (window.scrollY > 300) {
				setIsVisible(true);
			} else {
				setIsVisible(false);
			}
		};

		window.addEventListener('scroll', toggleVisibility);

		return () => window.removeEventListener('scroll', toggleVisibility);
	}, []);

	const scrollToTop = () => {
		window.scrollTo({
			top: 0,
			behavior: 'smooth'
		});
	};

	return (
		<AnimatePresence>
			{isVisible && (
				<motion.button
					initial={{ opacity: 0, scale: 0.3, y: 100 }}
					animate={{ 
						opacity: 1, 
						scale: 1, 
						y: 0,
						rotate: [0, 5, -5, 0]
					}}
					exit={{ opacity: 0, scale: 0.3, y: 100 }}
					transition={{ 
						opacity: { duration: 0.3 },
						scale: { duration: 0.3 },
						y: { duration: 0.3 },
						rotate: { duration: 3, repeat: Infinity, ease: "easeInOut", delay: 1 }
					}}
					onClick={scrollToTop}
					className="fixed bottom-8 right-8 z-50 p-3 bg-primary text-primary-foreground rounded-full shadow-lg hover:shadow-xl hover:scale-110 transition-all duration-200 group"
					aria-label="Scroll to top"
				>
					<motion.svg 
						className="w-6 h-6"
						fill="none" 
						stroke="currentColor" 
						viewBox="0 0 24 24"
						animate={{ 
							y: [0, -2, 0]
						}}
						transition={{ 
							duration: 2,
							repeat: Infinity,
							ease: "easeInOut"
						}}
					>
						<path 
							strokeLinecap="round" 
							strokeLinejoin="round" 
							strokeWidth={2} 
							d="M5 10l7-7m0 0l7 7m-7-7v18" 
						/>
					</motion.svg>
				</motion.button>
			)}
		</AnimatePresence>
	);
}