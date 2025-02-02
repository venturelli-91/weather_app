import React, { JSX } from "react";
import { WeatherData } from "./WeatherData";

const TemperaturePanel = ({ data }: { data: WeatherData }): JSX.Element => {
	return (
		<div>
			<h2 className="text-xs font-bold">Temperatura local:</h2>
			<p className="text-sm font-semibold">
				{data.main?.temp
					? `${data.main.temp} C`
					: "Não foi possível obter os dados de temperatura!"}
			</p>
		</div>
	);
};

export default TemperaturePanel;
