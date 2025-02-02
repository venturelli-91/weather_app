import React, { JSX } from "react";
import { WeatherData } from "./WeatherData";

const WindPanel = ({ data }: { data: WeatherData }): JSX.Element => {
	return (
		<div>
			<h2 className="text-xs font-bold">Velocidade dos ventos:</h2>
			<p className="text-s font-semibold">
				{data.wind?.speed
					? `${data.wind.speed} Km/h`
					: "Não foi possível obter os dados sobre os ventos!"}
			</p>
		</div>
	);
};

export default WindPanel;
