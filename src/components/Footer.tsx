import React from "react";
import { Footer as FlowbiteFooter } from "flowbite-react";
import { BsLinkedin, BsGithub } from "react-icons/bs";

const Footer = () => {
	const handleLinkedinClick = () => {
		window.location.href = "https://www.linkedin.com/in/aurelioventurelli/";
	};

	const handleGithubClick = () => {
		window.location.href = "https://github.com/venturelli-91";
	};

	return (
		<>
			<FlowbiteFooter container>
				<FlowbiteFooter.Copyright
					href="#"
					by="Flowbite"
					year={2025}
					className="font-bold"
				/>
				<FlowbiteFooter.LinkGroup>
					<FlowbiteFooter.Link href="#">About</FlowbiteFooter.Link>
					<FlowbiteFooter.Link href="#">Privacy Policy</FlowbiteFooter.Link>
					<FlowbiteFooter.Link href="#">Licensing</FlowbiteFooter.Link>
					<FlowbiteFooter.Link href="#">Contact</FlowbiteFooter.Link>
					<div className="flex gap-4">
						<BsLinkedin
							size={30}
							onClick={handleLinkedinClick}
						/>
						<BsGithub
							size={30}
							onClick={handleGithubClick}
						/>
					</div>
				</FlowbiteFooter.LinkGroup>
			</FlowbiteFooter>
		</>
	);
};

export default Footer;
