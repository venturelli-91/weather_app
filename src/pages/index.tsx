"use client";
import React from "react";
import "@/pages/_app";
import App from "@/App";
import { DarkThemeToggle } from "flowbite-react";
import Footer from "@/components/Footer";
import { Datepicker } from "flowbite-react";
import Bar from "@/components/Bar";
import IntroductionCard from "@/components/IntroductionCard";
export default function Home() {
	return (
		<React.StrictMode>
			<App />
			<IntroductionCard
				title="🌙 NoctisWeather: Monitoramento do Clima no Modo Noturno"
				description="O clima em tempo real, no escuro e com estilo. 
            Previsões precisas, sem ofuscar sua visão. 
            Seu guia meteorológico, sempre no modo noturno."
			/>
			<Datepicker />
			<DarkThemeToggle />
			<Footer />
			<Bar />
		</React.StrictMode>
	);
}
