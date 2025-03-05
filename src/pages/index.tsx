"use client";
import React from "react";
import "@/pages/_app";
import App from "@/App";
import { DarkThemeToggle } from "flowbite-react";
import Footer from "@/components/Footer";
import { Datepicker } from "flowbite-react";
import Bar from "@/components/Bar";
export default function Home() {
	return (
		<React.StrictMode>
			<DarkThemeToggle />
			<App />
			<Footer />
			<Datepicker />
			<Bar />
		</React.StrictMode>
	);
}
