import React from "react";
import { Card } from "flowbite-react";

interface IntroductionCardProps {
	title: string;
	description: string;
}

const IntroductionCard = ({ title, description }: IntroductionCardProps) => {
	return (
		<div>
			<Card className="mt-10">
				<h4 className="text-xl font-bold">{title}</h4>
				<p className="text-gray-700 dark:text-slate-100 dark:font-bold">
					{description}
				</p>
			</Card>
		</div>
	);
};

export default IntroductionCard;
