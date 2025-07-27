import { create } from "zustand";
import { devtools } from "zustand/middleware";
import { WeatherData } from "../components/Display/WeatherData";

interface WeatherState {
	data: WeatherData | null;
	loading: boolean;
	error: string | null;
	searchWeather: (location: string) => Promise<void>;
	clearError: () => void;
	clearData: () => void;
	setLoading: (loading: boolean) => void;
}

export const useWeatherStore = create<WeatherState>()(
	devtools(
		(set) => ({
			data: null,
			loading: false,
			error: null,

			searchWeather: async (location: string) => {
				if (!location.trim()) return;

				const API_KEY = process.env.NEXT_PUBLIC_WEATHER_API_KEY;
				const url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${API_KEY}&units=metric&lang=pt`;

				set({ loading: true, error: null }, false, "searchWeather/start");

				try {
					set({ data: null }, false, "searchWeather/clearData");

					const response = await fetch(url);
					if (!response.ok) {
						throw new Error("Erro ao buscar dados!");
					}

					const result = await response.json();
					set({ data: result, loading: false }, false, "searchWeather/success");
				} catch (error) {
					const errorMessage = "Cidade não encontrada ou erro na conexão";
					set(
						{ error: errorMessage, loading: false },
						false,
						"searchWeather/error"
					);
					console.error("Erro na busca:", error);
				}
			},

			clearError: () => set({ error: null }, false, "clearError"),
			clearData: () => set({ data: null }, false, "clearData"),
			setLoading: (loading: boolean) => set({ loading }, false, "setLoading"),
		}),
		{
			name: "weather-store", // Nome para DevTools
		}
	)
);
