import React, { JSX } from "react";
import { WeatherData } from "./WeatherData";

const TemperaturePanel = ({ data }: { data: WeatherData }): JSX.Element => {
	return (
		<div>
			<h2 className="text-s font-extrabold">Temperatura:</h2>
			<p className="text-s font-semibold">
				{data.main?.temp
					? `${data.main.temp.toFixed(1)} °C`
					: "Não foi possível obter os dados de temperatura!"}
			</p>
		</div>
	);
};

export default TemperaturePanel;
