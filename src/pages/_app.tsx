import "@/styles/globals.css";
import type { AppProps } from "next/app";
import React from "react";
import { Flowbite } from "flowbite-react";

export default function App({ Component, pageProps }: AppProps) {
	return (
		<Flowbite>
			<div className="bg-white dark:bg-gray-900 min-h-screen text-black dark:text-white">
				<Component {...pageProps} />
			</div>
		</Flowbite>
	);
}
