import React, { useState } from "react";
import "@/pages/_app";
import WindPanel from "./components/Display/WindPanel";
import HumidityPanel from "./components/Display/HumidityPanel";
import TemperaturePanel from "./components/Display/TemperaturePanel";
import { Card } from "flowbite-react";
import ShinyButton from "./components/ShinyButton/ShinyButton";
import TextType from "./components/TextType/TextType";
import { useWeather } from "./hooks/useWeather";

const App = () => {
	const [location, setLocation] = useState("");
	const { data, loading, error, searchWeather } = useWeather();

	const handleSearch = async () => {
		if (!location.trim()) return;
		await searchWeather(location);
		setLocation("");
	};

	return (
		<main className="card">
			<Card>
				<div className="w-full flex flex-col items-center sm:grid-cols-2">
					<TextType
						text={["Weather App", "Previsão do Tempo", "Clima Atual"]}
						as="h1"
						className="font-semibold text-4xl p-5"
						textColors={["#22c55e", "#3b82f6", "#f59e0b"]}
						typingSpeed={100}
						pauseDuration={2000}
						loop={true}
						showCursor={true}
						cursorCharacter="|"
					/>
					<TextType
						text="Confira como está o clima na sua cidade!"
						as="h2"
						className="text-2xl font-bold"
						typingSpeed={60}
						textColors={["#20B2AA"]}
						initialDelay={3000}
						loop={false}
						showCursor={false}
					/>
					<input
						type="text"
						className="input"
						value={location}
						placeholder="Digite o local aqui..."
						onChange={(e) => setLocation(e.target.value)}
					/>
					<ShinyButton onClick={handleSearch}>Buscar</ShinyButton>
					{loading && (
						<div className="flex items-center space-x-2 mt-2">
							<div className="animate-spin rounded-full h-4 w-4 border-b-2 border-blue-500"></div>
							<span className="text-sm font-bold text-gray-600">
								Carregando...
							</span>
						</div>
					)}
					{error && (
						<div className="mt-2 p-2 bg-red-100 border border-red-400 text-red-700 rounded">
							{error}
						</div>
					)}
				</div>
				<h2 className="panels font-extrabold text-3xl pt-5">
					{loading
						? "Carregando"
						: error
						? "Erro na busca"
						: data?.name
						? data.name
						: "Digite uma cidade para começar"}
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
			</Card>
		</main>
	);
};

export default App;
