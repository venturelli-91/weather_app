import React from "react";
import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import "@testing-library/jest-dom";
import App from "../../App";
import { useWeatherStore } from "../../store/weatherStore";

// Mock GSAP
jest.mock("gsap", () => ({
	gsap: {
		set: jest.fn(),
		to: jest.fn(),
	},
}));

// Mock fetch
global.fetch = jest.fn();

// Mock environment variable
process.env.NEXT_PUBLIC_WEATHER_API_KEY = "test-api-key";

describe("App Integration Test", () => {
	beforeEach(() => {
		(fetch as jest.Mock).mockClear();
		// Reset Zustand store before each test
		useWeatherStore.setState({
			data: null,
			loading: false,
			error: null,
		});
	});

	it("renders all main components", () => {
		render(<App />);

		// Verifica se o card principal está presente
		const card = document.querySelector('[data-testid="flowbite-card"]');
		expect(card).toBeInTheDocument();

		// Verifica se o input de busca está presente
		const input = screen.getByPlaceholderText("Digite o local aqui...");
		expect(input).toBeInTheDocument();

		// Verifica se o botão de busca está presente
		const searchButton = screen.getByText("Buscar");
		expect(searchButton).toBeInTheDocument();

		// Verifica se o cursor do TextType está presente
		const cursor = screen.getByText("|");
		expect(cursor).toBeInTheDocument();
	});

	it("shows weather data when search is successful", async () => {
		const mockWeatherData = {
			name: "São Paulo",
			main: {
				temp: 25,
				humidity: 70,
			},
			wind: {
				speed: 5,
			},
		};

		(fetch as jest.Mock).mockResolvedValueOnce({
			ok: true,
			json: async () => mockWeatherData,
		});

		render(<App />);

		const input = screen.getByPlaceholderText("Digite o local aqui...");
		const searchButton = screen.getByText("Buscar");

		// Digita uma cidade
		fireEvent.change(input, { target: { value: "São Paulo" } });

		// Clica em buscar
		fireEvent.click(searchButton);

		// Aguarda o nome da cidade aparecer
		await waitFor(() => {
			expect(screen.getByText("São Paulo")).toBeInTheDocument();
		});
	});

	it("handles search input correctly", () => {
		render(<App />);

		const input = screen.getByPlaceholderText(
			"Digite o local aqui..."
		) as HTMLInputElement;

		fireEvent.change(input, { target: { value: "Rio de Janeiro" } });

		expect(input.value).toBe("Rio de Janeiro");
	});

	it("shows loading state when searching", async () => {
		(fetch as jest.Mock).mockImplementationOnce(
			() => new Promise((resolve) => setTimeout(resolve, 100))
		);

		render(<App />);

		const input = screen.getByPlaceholderText("Digite o local aqui...");
		const searchButton = screen.getByText("Buscar");

		fireEvent.change(input, { target: { value: "Test City" } });
		fireEvent.click(searchButton);

		// Durante o loading, deve mostrar "Carregando"
		await waitFor(() => {
			expect(screen.getByText("Carregando")).toBeInTheDocument();
		});
	});

	it("shows error message when API fails", async () => {
		(fetch as jest.Mock).mockRejectedValueOnce(new Error("API Error"));

		render(<App />);

		const input = screen.getByPlaceholderText("Digite o local aqui...");
		const searchButton = screen.getByText("Buscar");

		fireEvent.change(input, { target: { value: "Invalid City" } });
		fireEvent.click(searchButton);

		await waitFor(() => {
			expect(
				screen.getByText("Cidade não encontrada ou erro na conexão")
			).toBeInTheDocument();
		});
	});

	it("shows initial state correctly", async () => {
		render(<App />);

		// Aguarda um pouco para garantir que o estado inicial seja renderizado
		await waitFor(() => {
			expect(
				screen.getByText("Digite uma cidade para começar")
			).toBeInTheDocument();
		});
	});
});
