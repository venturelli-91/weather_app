import React, { JSX } from "react";
import { WeatherData } from "./WeatherData";

const WindPanel = ({ data }: { data: WeatherData }): JSX.Element => {
	return (
		<div className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow-md">
			<h2 className="text-s font-extrabold text-black dark:text-slate-100">
				Ventos:
			</h2>
			<p className="text-s font-semibold text-black dark:text-gray-100">
				{data.wind?.speed
					? `${data.wind.speed.toFixed(1)} Km/h`
					: "Não foi possível obter os dados sobre os ventos!"}
			</p>
		</div>
	);
};

export default WindPanel;
