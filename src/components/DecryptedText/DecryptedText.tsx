import React, { useState, useEffect, useRef, useCallback } from "react";

interface DecryptedTextProps {
	text: string;
	speed?: number;
	maxIterations?: number;
	characters?: string;
	className?: string;
	parentClassName?: string;
	encryptedClassName?: string;
	animateOn?: "hover" | "view";
	revealDirection?: "left" | "right" | "center";
}

const DecryptedText: React.FC<DecryptedTextProps> = ({
	text,
	speed = 50,
	maxIterations = 10,
	characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()_+-=[]{}|;:,.<>?",
	className = "",
	parentClassName = "",
	encryptedClassName = "",
	animateOn = "hover",
	revealDirection = "left",
}) => {
	const [displayText, setDisplayText] = useState(text);
	const [isRevealed, setIsRevealed] = useState(
		animateOn === "hover" ? false : false
	);
	const [isAnimating, setIsAnimating] = useState(false);
	const elementRef = useRef<HTMLSpanElement>(null);
	const intervalRef = useRef<NodeJS.Timeout | null>(null);

	const getRandomCharacter = useCallback(() => {
		return characters[Math.floor(Math.random() * characters.length)];
	}, [characters]);

	const animate = useCallback(() => {
		if (isAnimating) return;

		setIsAnimating(true);
		let iteration = 0;

		const animateStep = () => {
			setDisplayText(() => {
				return text
					.split("")
					.map((char, index) => {
						let revealIndex: number;
						if (revealDirection === "center") {
							const center = Math.floor(text.length / 2);
							revealIndex = Math.abs(index - center);
						} else if (revealDirection === "right") {
							revealIndex = text.length - 1 - index;
						} else {
							revealIndex = index;
						}

						if (revealIndex < iteration / 3) {
							return char;
						}

						return getRandomCharacter();
					})
					.join("");
			});

			if (iteration < text.length * 3 + maxIterations) {
				iteration++;
				intervalRef.current = setTimeout(animateStep, speed);
			} else {
				setDisplayText(text);
				setIsRevealed(true);
				setIsAnimating(false);
			}
		};

		animateStep();
	}, [
		isAnimating,
		text,
		revealDirection,
		maxIterations,
		speed,
		getRandomCharacter,
	]);

	const reset = useCallback(() => {
		if (intervalRef.current) {
			clearTimeout(intervalRef.current);
		}
		setIsRevealed(false);
		setIsAnimating(false);
		setDisplayText(text);
	}, [text]);

	useEffect(() => {
		if (animateOn === "view" && elementRef.current) {
			const observer = new IntersectionObserver(
				([entry]) => {
					if (entry.isIntersecting && !isRevealed && !isAnimating) {
						animate();
					}
				},
				{ threshold: 0.5 }
			);

			observer.observe(elementRef.current);

			return () => observer.disconnect();
		}
	}, [animateOn, isRevealed, isAnimating, animate]);

	useEffect(() => {
		return () => {
			if (intervalRef.current) {
				clearTimeout(intervalRef.current);
			}
		};
	}, []);

	const handleMouseEnter = () => {
		if (animateOn === "hover" && !isAnimating) {
			animate();
		}
	};

	const handleMouseLeave = () => {
		if (animateOn === "hover") {
			reset();
		}
	};

	return (
		<span
			ref={elementRef}
			className={`${parentClassName} ${
				isRevealed ? className : encryptedClassName
			}`}
			onMouseEnter={handleMouseEnter}
			onMouseLeave={handleMouseLeave}
			style={{
				fontFamily: "monospace",
				cursor: animateOn === "hover" ? "pointer" : "default",
			}}>
			{displayText}
		</span>
	);
};

export default DecryptedText;
