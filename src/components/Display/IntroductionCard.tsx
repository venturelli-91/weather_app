import React from "react";
import { Card } from "flowbite-react";
import DecryptedText from "@/components/DecryptedText";

interface IntroductionCardProps {
	title: string;
	description: string;
}

const IntroductionCard = ({ title, description }: IntroductionCardProps) => {
	return (
		<div>
			<Card className="mt-10">
				<h3 className="text-xl font-bold">
					<DecryptedText
						text={title}
						animateOn="view"
						revealDirection="center"
						speed={30}
						maxIterations={15}
						className="text-blue-600 dark:text-blue-400"
						encryptedClassName="text-gray-400"
					/>
				</h3>
				<p className="text-gray-700 dark:text-slate-100 dark:font-bold text-2xl">
					<DecryptedText
						text={description}
						animateOn="view"
						revealDirection="left"
						speed={20}
						maxIterations={10}
						className="text-gray-700 dark:text-slate-100"
						encryptedClassName="text-gray-400 dark:text-gray-600"
					/>
				</p>
			</Card>
		</div>
	);
};

export default IntroductionCard;
