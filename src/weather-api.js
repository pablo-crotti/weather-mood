// import { getCity } from './city-api'

const BASE_URL = 'https://api.open-meteo.com/v1/forecast?'

const getCoordinates = () => {
    return new Promise((res, rej) =>
      navigator.geolocation.getCurrentPosition(res, rej)
    )
}
  
const getPosition = async () => {
    const position = await getCoordinates();
    return {
      lat: position.coords.latitude,
      long: position.coords.longitude
    }
}

const loadJson = (url) => {
    return fetch(url).then((res) => res.json())
}

const aboutWeather = async (position) => {
  return loadJson(`${BASE_URL}latitude=${position.lat}&longitude=${position.long}&hourly=weathercode&models=icon_d2&current_weather=true `)
}

const getWeathercode = async () => {
    const position = await getPosition();
    const weatherApi = await aboutWeather(position)
    // console.log(1)
    // const cityApi = await getCity(position)
    
    // console.log(cityApi)
    return {
      'weather': weatherApi
    }

    
}

export { getWeathercode }



// 0 	Clear sky 
// 01d.png


// 1, 2,  	Mainly clear, partly cloudy, 
// 02d.png
// 3 and overcast


// 45, 48 	Fog and depositing rime fog
// 50d.png  


// 51, 53, 55 	Drizzle: Light, moderate, and dense intensity
// 56, 57 	Freezing Drizzle: Light and dense intensity
// 04d.png

// 61, 63, 65 	Rain: Slight, moderate and heavy intensity
// 66, 67 	Freezing Rain: Light and heavy intensity
// 10d.png 

// 71, 73, 75 	Snow fall: Slight, moderate, and heavy intensity
// 85, 86 	Snow showers slight and heavy
// 77 	Snow grains
// 13d.png

// 80, 81, 82 	Rain showers: Slight, moderate, and violent
// 09d.png

// 95 * 	Thunderstorm: Slight or moderate
// 96, 99 * 	Thunderstorm with slight and heavy hail
// 11d.png



