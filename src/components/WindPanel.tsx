import React, { JSX } from "react";
import { WeatherData } from "./WeatherData";

const WindPanel = ({ data }: { data: WeatherData }): JSX.Element => {
	return (
		<div className="p-4 bg-blue-100 rounded-lg shadow-md">
			<h2 className="text-xl font-bold">Velocidade dos ventos:</h2>
			<p className="text-2xl font-semibold">
				{data.wind?.speed
					? `${data.wind.speed} Km/h`
					: "Não foi possível obter os dados sobre os ventos!"}
			</p>
		</div>
	);
};

export default WindPanel;
