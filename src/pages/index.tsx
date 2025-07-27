"use client";
import React from "react";
import "@/pages/_app";
import App from "@/App";
import { DarkThemeToggle } from "flowbite-react";
import Footer from "@/components/Footer/Footer";
import { Datepicker } from "flowbite-react";
import Bar from "@/components/Display/Bar";
import IntroductionCard from "@/components/Display/IntroductionCard";
export default function Home() {
	return (
		<React.StrictMode>
			<IntroductionCard
				title="🌙 NocWeather: Monitoramento do Clima"
				description="NocWeather – Beleza e precisão em qualquer tempo."
			/>
			<Datepicker className="w-52 mt-6" />
			<DarkThemeToggle />
			<App />
			<Bar />
			<Footer />
		</React.StrictMode>
	);
}
