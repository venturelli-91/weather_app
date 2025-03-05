import React, { JSX } from "react";
import { WeatherData } from "./WeatherData";

const HumidityPanel = ({ data }: { data: WeatherData }): JSX.Element => {
	return (
		<div className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow-md">
			<h2 className="text-s font-extrabold text-black dark:text-slate-100">
				Umidade:
			</h2>
			<p className="text-s font-semibold text-black dark:text-slate-100">
				{data.main?.humidity
					? `${data.main.humidity}%`
					: "Não foi possível obter os dados de umidade!"}
			</p>
		</div>
	);
};

export default HumidityPanel;
