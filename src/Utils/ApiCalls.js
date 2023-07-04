import { rapidKey } from "./RapidKey";

const url = 'https://weatherapi-com.p.rapidapi.com/current.json?q=53.1%2C-0.13';
const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': rapidKey,
		'X-RapidAPI-Host': 'weatherapi-com.p.rapidapi.com'
	}
};

export const getAllClassic = async (setVal) => {
try {
    const response = await fetch(url, options);
	await response.json().then(response => {
        setVal([
            Math.round(response.current.temp_c), 
            Math.round(response.current.wind_mph),
            Math.round(response.current.precip_mm),
            Math.round(response.current.vis_miles),
            Math.round(response.current.uv)
        ]);
    });
} catch (error) {
	console.error(error);
}
}