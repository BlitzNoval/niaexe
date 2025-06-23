'use client';

import { useRef, useEffect, useState, useMemo } from 'react';
import { Canvas, useFrame, useThree } from '@react-three/fiber';
import { Text, Points, PointMaterial } from '@react-three/drei';
import * as THREE from 'three';
import { motion } from 'framer-motion';

// Matrix rain effect component
function MatrixRain({ count = 1000 }) {
	const mesh = useRef<THREE.Points>(null);
	const [positions, velocities] = useMemo(() => {
		const positions = new Float32Array(count * 3);
		const velocities = new Float32Array(count);
		
		for (let i = 0; i < count; i++) {
			positions[i * 3] = (Math.random() - 0.5) * 20;
			positions[i * 3 + 1] = Math.random() * 20;
			positions[i * 3 + 2] = (Math.random() - 0.5) * 20;
			velocities[i] = Math.random() * 0.02 + 0.01;
		}
		
		return [positions, velocities];
	}, [count]);

	useFrame(() => {
		if (!mesh.current) return;
		
		const positionsArray = mesh.current.geometry.attributes.position.array as Float32Array;
		
		for (let i = 0; i < count; i++) {
			positionsArray[i * 3 + 1] -= velocities[i];
			
			if (positionsArray[i * 3 + 1] < -10) {
				positionsArray[i * 3 + 1] = 10;
				positionsArray[i * 3] = (Math.random() - 0.5) * 20;
				positionsArray[i * 3 + 2] = (Math.random() - 0.5) * 20;
			}
		}
		
		mesh.current.geometry.attributes.position.needsUpdate = true;
	});

	return (
		<Points ref={mesh} positions={positions} stride={3} frustumCulled={false}>
			<PointMaterial
				transparent
				color="#00ff41"
				size={0.02}
				sizeAttenuation={true}
				depthWrite={false}
				opacity={0.8}
			/>
		</Points>
	);
}

// 3D Globe component
function Globe({ visitorCount }: { visitorCount: number }) {
	const meshRef = useRef<THREE.Mesh>(null);
	const groupRef = useRef<THREE.Group>(null);
	
	// Create globe with Matrix-style wireframe
	const globeGeometry = useMemo(() => new THREE.SphereGeometry(2, 32, 32), []);
	
	useFrame((state) => {
		if (groupRef.current) {
			groupRef.current.rotation.y += 0.005;
		}
		if (meshRef.current) {
			meshRef.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.3) * 0.1;
		}
	});

	// Create connection lines between points
	const connectionLines = useMemo(() => {
		const points = [];
		const numConnections = 50;
		
		for (let i = 0; i < numConnections; i++) {
			const phi1 = Math.random() * Math.PI * 2;
			const theta1 = Math.random() * Math.PI;
			const phi2 = Math.random() * Math.PI * 2;
			const theta2 = Math.random() * Math.PI;
			
			const x1 = 2 * Math.sin(theta1) * Math.cos(phi1);
			const y1 = 2 * Math.cos(theta1);
			const z1 = 2 * Math.sin(theta1) * Math.sin(phi1);
			
			const x2 = 2 * Math.sin(theta2) * Math.cos(phi2);
			const y2 = 2 * Math.cos(theta2);
			const z2 = 2 * Math.sin(theta2) * Math.sin(phi2);
			
			points.push(new THREE.Vector3(x1, y1, z1));
			points.push(new THREE.Vector3(x2, y2, z2));
		}
		
		return points;
	}, []);

	return (
		<group ref={groupRef}>
			{/* Main Globe Wireframe */}
			<mesh ref={meshRef} geometry={globeGeometry}>
				<meshBasicMaterial 
					color="#00ff41" 
					wireframe 
					transparent 
					opacity={0.6}
				/>
			</mesh>
			
			{/* Inner Glow Globe */}
			<mesh geometry={globeGeometry} scale={0.98}>
				<meshBasicMaterial 
					color="#003311" 
					transparent 
					opacity={0.3}
					side={THREE.BackSide}
				/>
			</mesh>
			
			{/* Connection Lines */}
			{connectionLines.map((_, index) => {
				if (index % 2 === 0 && connectionLines[index + 1]) {
					return (
						<line key={index}>
							<bufferGeometry>
								<bufferAttribute
									attach="attributes-position"
									count={2}
									array={new Float32Array([
										...connectionLines[index].toArray(),
										...connectionLines[index + 1].toArray()
									])}
									itemSize={3}
								/>
							</bufferGeometry>
							<lineBasicMaterial color="#00ff41" transparent opacity={0.4} />
						</line>
					);
				}
				return null;
			})}
			
			{/* Visitor Count Display */}
			<Text
				position={[0, 3, 0]}
				fontSize={0.3}
				color="#00ff41"
				anchorX="center"
				anchorY="middle"
				font="/fonts/matrix-font.woff"
			>
				ACTIVE VISITORS: {visitorCount.toLocaleString()}
			</Text>
			
			{/* Data Streams */}
			{Array.from({ length: 8 }, (_, i) => (
				<Text
					key={i}
					position={[
						3 * Math.cos((i / 8) * Math.PI * 2),
						0,
						3 * Math.sin((i / 8) * Math.PI * 2)
					]}
					rotation={[0, -(i / 8) * Math.PI * 2, 0]}
					fontSize={0.1}
					color="#00ff41"
					anchorX="center"
					anchorY="middle"
				>
					{Array.from({ length: 10 }, () => 
						Math.random() > 0.5 ? '1' : '0'
					).join('')}
				</Text>
			))}
		</group>
	);
}

// Camera controller
function CameraController() {
	const { camera } = useThree();
	
	useFrame((state) => {
		camera.position.x = Math.cos(state.clock.elapsedTime * 0.1) * 8;
		camera.position.z = Math.sin(state.clock.elapsedTime * 0.1) * 8;
		camera.lookAt(0, 0, 0);
	});
	
	return null;
}

// Main Matrix Globe component
export default function MatrixGlobe() {
	const [visitorCount, setVisitorCount] = useState(1);
	const [mounted, setMounted] = useState(false);

	useEffect(() => {
		setMounted(true);
		
		// Simulate real-time visitor count
		const updateVisitors = () => {
			// In a real app, this would fetch from an API
			const baseCount = 847;
			const variation = Math.floor(Math.random() * 20) - 10;
			setVisitorCount(baseCount + variation);
		};

		updateVisitors();
		const interval = setInterval(updateVisitors, 3000);

		// Add visitor on mount (simulate current user)
		setTimeout(() => setVisitorCount(prev => prev + 1), 1000);

		return () => clearInterval(interval);
	}, []);

	if (!mounted) return null;

	return (
		<div className="absolute inset-0 overflow-hidden">
			{/* Matrix Background Effect */}
			<div className="absolute inset-0 bg-black">
				<div className="absolute inset-0 bg-gradient-to-b from-black via-green-950/20 to-black" />
				
				{/* Matrix Code Rain Background */}
				<div className="absolute inset-0 opacity-30">
					{Array.from({ length: 50 }, (_, i) => (
						<div
							key={i}
							className="absolute text-green-400 text-xs font-mono animate-pulse"
							style={{
								left: `${Math.random() * 100}%`,
								top: `${Math.random() * 100}%`,
								animationDelay: `${Math.random() * 2}s`,
								animationDuration: `${2 + Math.random() * 3}s`
							}}
						>
							{Array.from({ length: 5 }, () => 
								Math.random() > 0.5 ? '1' : '0'
							).join('')}
						</div>
					))}
				</div>
			</div>

			{/* Three.js Canvas */}
			<Canvas
				camera={{ position: [0, 0, 8], fov: 60 }}
				style={{ background: 'transparent' }}
			>
				<ambientLight intensity={0.2} />
				<pointLight position={[10, 10, 10]} color="#00ff41" intensity={0.5} />
				
				<MatrixRain count={500} />
				<Globe visitorCount={visitorCount} />
				<CameraController />
				
				{/* Fog for depth */}
				<fog attach="fog" args={['#000000', 5, 15]} />
			</Canvas>

			{/* UI Overlay */}
			<div className="absolute top-4 left-4 z-10">
				<motion.div
					initial={{ opacity: 0, x: -20 }}
					animate={{ opacity: 1, x: 0 }}
					transition={{ delay: 1 }}
					className="bg-black/80 border border-green-400 p-4 rounded font-mono text-green-400"
				>
					<div className="text-xs space-y-1">
						<div>SYSTEM STATUS: ONLINE</div>
						<div>MATRIX VERSION: 3.14.1</div>
						<div>GLOBAL CONNECTIONS: ACTIVE</div>
						<div className="text-green-300">
							VISITORS: <span className="text-green-400 font-bold">{visitorCount}</span>
						</div>
					</div>
				</motion.div>
			</div>

			{/* Data Streams UI */}
			<div className="absolute bottom-4 right-4 z-10">
				<motion.div
					initial={{ opacity: 0, y: 20 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ delay: 1.5 }}
					className="bg-black/80 border border-green-400 p-3 rounded font-mono text-green-400 text-xs"
				>
					<div>DATA STREAM: ACTIVE</div>
					<div className="mt-2 space-y-1">
						{Array.from({ length: 3 }, (_, i) => (
							<div key={i} className="flex items-center gap-2">
								<div className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
								<span>
									{Array.from({ length: 12 }, () => 
										Math.random() > 0.5 ? '1' : '0'
									).join('')}
								</span>
							</div>
						))}
					</div>
				</motion.div>
			</div>
		</div>
	);
}