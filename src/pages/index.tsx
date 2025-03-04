"use client";
import React from "react";
import "@/pages/_app";
import App from "@/App";
import Background from "@/components/Background";
import Footer from "@/components/Footer";
export default function Home() {
	return (
		<React.StrictMode>
			<Background></Background>
			<App></App>
			<Footer></Footer>
		</React.StrictMode>
	);
}
