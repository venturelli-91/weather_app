import React from "react";
import Image from "next/image";
import Img1 from "@/assets/clima.jpeg";

const Background = () => {
	return (
		<div className="">
			<Image
				src={Img1}
				alt="weather"
				objectFit="cover"
				layout="fill"
				className="-z-10 opacity-20"></Image>
		</div>
	);
};

export default Background;
