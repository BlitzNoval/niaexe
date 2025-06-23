import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import './globals.css';
import AnimatedCursor from './components/AnimatedCursor';
import ScrollProgress from './components/ScrollProgress';

const geistSans = Geist({
	variable: '--font-geist-sans',
	subsets: ['latin'],
});

const geistMono = Geist_Mono({
	variable: '--font-geist-mono',
	subsets: ['latin'],
});

export const metadata: Metadata = {
	title: 'Liam Moodley - Full-Stack Web Developer & UI/UX Designer',
	description:
		'Full-Stack Web Developer & UI/UX Designer from Johannesburg, South Africa. Creating digital solutions for businesses using CSS3, JavaScript, Next.js, D3.js, Node.js, SEO, WordPress, and modern design principles.',
	keywords: [
		'Software Developer',
		'Clean Code',
		'Minimal Design',
		'Modern Development',
		'Web Development',
		'User Experience',
		'Design Systems',
		'JavaScript',
		'TypeScript',
		'React',
		'Next.js',
		'Performance',
		'Accessibility',
		'Minimalist Portfolio',
		'Liam Moodley',
	],
	authors: [{ name: 'Liam Moodley' }],
	creator: 'Liam Moodley',
	openGraph: {
		title: 'Liam Moodley - Frontend & Backend Developer | UI/UX Designer Portfolio',
		description: 'Frontend & Backend Developer and UI/UX Designer from Johannesburg, South Africa. Explore my client work and development expertise.',
		url: 'https://niaexe.vercel.app',
		siteName: 'Liam Moodley - Portfolio',
		images: [
			{
				url: '/og-image.jpg',
				width: 1200,
				height: 630,
				alt: 'Liam Moodley - Modern Minimal Portfolio',
			},
		],
		locale: 'en_US',
		type: 'website',
	},
	twitter: {
		card: 'summary_large_image',
		title: 'Liam Moodley - Frontend & Backend Developer | UI/UX Designer',
		description: 'Frontend & Backend Developer and UI/UX Designer from Johannesburg, South Africa. Explore my client work and development expertise.',
		creator: '@liammoodley',
		images: ['/og-image.jpg'],
	},
	robots: {
		index: true,
		follow: true,
		googleBot: {
			index: true,
			follow: true,
			'max-video-preview': -1,
			'max-image-preview': 'large',
			'max-snippet': -1,
		},
	},
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<body className={`${geistSans.variable} ${geistMono.variable} antialiased cursor-none`}>
				<ScrollProgress />
				<AnimatedCursor />
				{children}
			</body>
		</html>
	);
}
