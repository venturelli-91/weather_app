import React from "react";
import Image from "next/image";
import Img1 from "@/assets/clima2.jpg";

const Background = () => {
	return (
		<div className="">
			<Image
				src={Img1}
				alt="weather"
				objectFit="cover"
				layout="fill"
				className="-z-10 opacity-30"></Image>
		</div>
	);
};

export default Background;
