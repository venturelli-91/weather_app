import React, { JSX } from "react";
import { WeatherData } from "./WeatherData";

const HumidityPanel = ({ data }: { data: WeatherData }): JSX.Element => {
	return (
		<div className="p-4 bg-blue-100 rounded-lg shadow-md">
			<h2 className="text-xl font-bold">Umidade</h2>
			<p className="text-2xl font-semibold">
				{data.main?.humidity
					? `${data.main.humidity}%`
					: "Não foi possível obter os dados de umidade!"}
			</p>
		</div>
	);
};

export default HumidityPanel;
