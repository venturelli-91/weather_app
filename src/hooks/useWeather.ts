import { useWeatherStore } from "../store/weatherStore";

export const useWeather = () => {
	const { data, loading, error, searchWeather, clearError, clearData } =
		useWeatherStore();

	return {
		data,
		loading,
		error,
		searchWeather,
		clearError,
		clearData,
	};
};
