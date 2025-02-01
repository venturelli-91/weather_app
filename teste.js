const API_KEY = "1e94c68faa6b7bae9481908a1e331ac2";
const cidade = "Rio de Janeiro";

fetch(
	`https://api.openweathermap.org/data/2.5/weather?q=${cidade}&appid=${API_KEY}&units=metric&lang=pt`
)
	.then((response) => response.json())
	.then((data) => console.log(data))
	.catch((error) => console.error("Erro:", error));
