import React, { useState } from "react";
import "@/pages/_app";
import axios from "axios";
import WindPanel from "./components/WindPanel";
import HumidityPanel from "./components/HumidityPanel";
import TemperaturePanel from "./components/TemperaturePanel";
import { WeatherData } from "./components/WeatherData";

const App = () => {
	const [data, setData] = useState<WeatherData | null>(null);
	const [location, setLocation] = useState("");
	const API_KEY = process.env.NEXT_PUBLIC_WEATHER_API_KEY;
	const url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${API_KEY}&units=metric&lang=pt`;

	const searchLocation = () => {
		if (location) {
			axios
				.get(url)
				.then((response) => {
					setData(response.data);
					console.log(response.data);
				})
				.catch(() => {
					console.error("A solicitação não foi realizada corretamente!");
				});
		}
	};

	return (
		<main className="w-96 h-72 bg-slate-400 flex flex-col justify-between items-center absolute top-1/3 left-1/3 rounded-full p-6">
			<div className="w-full flex flex-col items-center">
				<h1 className="font-black">Cidade</h1>
				<p>Confira como está o clima na sua cidade!</p>
				<input
					type="text"
					className="rounded-3xl w-40 h-10 font-thin mt-2 p-4 bg-gray-200 text-center"
					placeholder="Digite o local aqui..."
					onChange={(e) => setLocation(e.target.value)}
				/>
				<button
					className="rounded-3xl bg-green-500 w-20 font-bold h-10 text-sm text-white mt-2"
					onClick={searchLocation}>
					Buscar
				</button>
			</div>

			<h2 className="font-thin">
				{data?.main?.name
					? `${data.main.name}`
					: `Não foi possível obter os dados da cidade!`}
			</h2>

			<div className="flex flex-row gap-2 items-center">
				<div>{data && <TemperaturePanel data={data} />}</div>

				<div>{data && <WindPanel data={data} />}</div>

				<div>{data && <HumidityPanel data={data} />}</div>
			</div>
		</main>
	);
};

export default App;

/* 
dados de umidade:
{data.main.humidity}

dados dos ventos:
{data.wind.speed}

dados de temperatura:
{data.main.temp}

*/
