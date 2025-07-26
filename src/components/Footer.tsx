import React from "react";
import { Footer as FlowbiteFooter } from "flowbite-react";
import { BsLinkedin, BsGithub } from "react-icons/bs";

const Footer = () => {
	const handleLinkedinClick = () => {
		window.open("https://www.linkedin.com/in/aurelioventurelli/", "_blank");
	};

	const handleGithubClick = () => {
		window.open("https://github.com/venturelli-91", "_blank");
	};

	return (
		<>
			<div
				style={{
					display: "flex",
					flexDirection: "column",
					minHeight: "20vh",
				}}>
				<FlowbiteFooter
					container
					style={{ marginTop: "auto" }}>
					<FlowbiteFooter.Copyright
						href="#"
						by="Flowbite"
						year={2025}
						className="font-bold"
					/>
					<FlowbiteFooter.LinkGroup>
						<FlowbiteFooter.Link
							href="#"
							className="mr-4 mt-2 font-bold">
							About me
						</FlowbiteFooter.Link>
						<FlowbiteFooter.Link
							href="#"
							className="mr-4 mt-2 font-bold">
							Projects
						</FlowbiteFooter.Link>
						<FlowbiteFooter.Link
							href="#"
							className="mr-4 mt-2 font-bold">
							Contact
						</FlowbiteFooter.Link>
						<div className="flex gap-4">
							<BsLinkedin
								size={30}
								onClick={handleLinkedinClick}
								className="cursor-pointer"
							/>
							<BsGithub
								size={30}
								onClick={handleGithubClick}
								className="cursor-pointer"
							/>
						</div>
					</FlowbiteFooter.LinkGroup>
				</FlowbiteFooter>
			</div>
		</>
	);
};
export default Footer;
