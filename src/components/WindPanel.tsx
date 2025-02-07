import React, { JSX } from "react";
import { WeatherData } from "./WeatherData";

const WindPanel = ({ data }: { data: WeatherData }): JSX.Element => {
	return (
		<div>
			<h2 className="text-s font-extrabold">Ventos:</h2>
			<p className="text-s font-semibold">
				{data.wind?.speed
					? `${data.wind.speed.toFixed(1)} Km/h`
					: "Não foi possível obter os dados sobre os ventos!"}
			</p>
		</div>
	);
};

export default WindPanel;
