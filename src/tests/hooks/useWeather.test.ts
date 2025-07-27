import { renderHook, act, waitFor } from "@testing-library/react";
import { useWeather } from "../../hooks/useWeather";
import { useWeatherStore } from "../../store/weatherStore";

global.fetch = jest.fn();

process.env.NEXT_PUBLIC_WEATHER_API_KEY = "test-api-key";

describe("useWeather Hook with Zustand", () => {
	beforeEach(() => {
		(fetch as jest.Mock).mockClear();
		useWeatherStore.setState({
			data: null,
			loading: false,
			error: null,
		});
	});

	it("initializes with correct default values", () => {
		const { result } = renderHook(() => useWeather());

		expect(result.current.data).toBeNull();
		expect(result.current.loading).toBe(false);
		expect(result.current.error).toBeNull();
	});

	it("successfully fetches weather data", async () => {
		const mockWeatherData = {
			name: "São Paulo",
			main: { temp: 25, humidity: 70 },
			wind: { speed: 5 },
		};

		(fetch as jest.Mock).mockResolvedValueOnce({
			ok: true,
			json: async () => mockWeatherData,
		});

		const { result } = renderHook(() => useWeather());

		await act(async () => {
			await result.current.searchWeather("São Paulo");
		});

		expect(result.current.data).toEqual(mockWeatherData);
		expect(result.current.loading).toBe(false);
		expect(result.current.error).toBeNull();
	});

	it("handles API errors correctly", async () => {
		(fetch as jest.Mock).mockRejectedValueOnce(new Error("API Error"));

		const { result } = renderHook(() => useWeather());

		await act(async () => {
			await result.current.searchWeather("Invalid City");
		});

		expect(result.current.data).toBeNull();
		expect(result.current.loading).toBe(false);
		expect(result.current.error).toBe(
			"Cidade não encontrada ou erro na conexão"
		);
	});

	it("clears error when clearError is called", async () => {
		const { result } = renderHook(() => useWeather());

		await act(async () => {
			(fetch as jest.Mock).mockRejectedValueOnce(new Error("API Error"));
			await result.current.searchWeather("Invalid City");
		});

		expect(result.current.error).toBe(
			"Cidade não encontrada ou erro na conexão"
		);

		act(() => {
			result.current.clearError();
		});

		expect(result.current.error).toBeNull();
	});

	it("sets loading to true during API call", async () => {
		(fetch as jest.Mock).mockImplementationOnce(
			() =>
				new Promise((resolve) =>
					setTimeout(
						() =>
							resolve({
								ok: true,
								json: async () => ({ name: "Test" }),
							}),
						100
					)
				)
		);

		const { result } = renderHook(() => useWeather());

		act(() => {
			result.current.searchWeather("Test City");
		});

		expect(result.current.loading).toBe(true);

		await waitFor(() => {
			expect(result.current.loading).toBe(false);
		});
	});
});
