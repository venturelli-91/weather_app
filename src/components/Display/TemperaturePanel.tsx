import React, { JSX } from "react";
import { WeatherData } from "./WeatherData";

const TemperaturePanel = ({ data }: { data: WeatherData }): JSX.Element => {
	return (
		<div className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow-md">
			<h2 className="text-s font-extrabold text-black dark:text-slate-100">
				Temperatura:
			</h2>
			<p className="text-s font-semibold text-black dark:text-gray-100">
				{data.main?.temp
					? `${data.main.temp.toFixed(1)} °C`
					: "Não foi possível obter os dados de temperatura!"}
			</p>
		</div>
	);
};

export default TemperaturePanel;
