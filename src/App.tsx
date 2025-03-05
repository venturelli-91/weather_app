import React, { useState } from "react";
import "@/pages/_app";
import WindPanel from "./components/WindPanel";
import HumidityPanel from "./components/HumidityPanel";
import TemperaturePanel from "./components/TemperaturePanel";
import { WeatherData } from "./components/WeatherData";

const App = () => {
	const [data, setData] = useState<WeatherData | null>(null);
	const [location, setLocation] = useState("");
	const [loading, setLoading] = useState(false);
	const API_KEY = process.env.NEXT_PUBLIC_WEATHER_API_KEY;
	const url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${API_KEY}&units=metric&lang=pt`;

	const searchLocation = async () => {
		if (!location) return;
		setLoading(true);

		try {
			setData(null);

			const response = await fetch(url);
			if (!response.ok) {
				throw new Error("Erro ao buscar dados!");
			}

			const result = await response.json();
			setData(result);
		} catch (error) {
			console.log("A solicitação não foi executada corretamente", error);
		} finally {
			setLoading(false);
			setLocation("");
		}
	};
	//usar async/await é mais moderno hoje.

	return (
		<main className="container dark:bg-black">
			<div className="w-full flex flex-col items-center sm:grid-cols-2">
				<h1 className="font-black text-xl p-5">Weather App</h1>
				<p className="text-sm font-bold">
					Confira como está o clima na sua cidade!
				</p>
				<input
					type="text"
					className="input"
					value={location}
					placeholder="Digite o local aqui..."
					onChange={(e) => setLocation(e.target.value)}
				/>
				<button
					className="button"
					onClick={searchLocation}>
					Buscar
				</button>
				{loading && <p className="text-sm font-bold text-gray-800"></p>}
			</div>
			<h2 className="font-extrabold text-3xl m-5">
				{loading
					? "Carregando"
					: data?.name
					? data.name
					: "Cidade não encontrada!"}
			</h2>
			<div className="panels">
				<div className="text-center">
					{data && <TemperaturePanel data={data} />}
				</div>
				<div className="text-center">{data && <WindPanel data={data} />}</div>
				<div className="text-center">
					{data && <HumidityPanel data={data} />}
				</div>
			</div>
		</main>
	);
};

export default App;
