import React, { JSX } from "react";
import { WeatherData } from "./WeatherData";

const TemperaturePanel = ({ data }: { data: WeatherData }): JSX.Element => {
	return (
		<div className="p-4 bg-blue-100 rounded-lg shadow-md">
			<h2 className="text-xl font-bold">Temperatura local:</h2>
			<p className="text-2xl font-semibold">
				{data.main?.temp
					? `${data.main.temp} C`
					: "Não foi possível obter os dados de temperatura!"}
			</p>
		</div>
	);
};

export default TemperaturePanel;
