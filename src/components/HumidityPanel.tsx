import React, { JSX } from "react";
import { WeatherData } from "./WeatherData";

const HumidityPanel = ({ data }: { data: WeatherData }): JSX.Element => {
	return (
		<div>
			<h2 className="text-s font-extrabold">Umidade:</h2>
			<p className="text-s font-semibold">
				{data.main?.humidity
					? `${data.main.humidity}%`
					: "Não foi possível obter os dados de umidade!"}
			</p>
		</div>
	);
};

export default HumidityPanel;
