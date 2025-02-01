"use client";
import React from "react";
import "@/pages/_app";
import App from "@/App";
import Background from "@/components/Background";

export default function Home() {
	return (
		<React.StrictMode>
			<Background></Background>
			<App></App>
		</React.StrictMode>
	);
}
