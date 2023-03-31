import { getWeathercode } from './weather-api'

const moods = {
    0: [57, 63, 65, 66, 67, 77, 81, 82, 99],
    1: [48, 53, 55, 56, 61, 75, 80, 95, 96],
    2: [45, 51, 73, 85, 86],
    3: [3, 71],
    4: [0, 1, 2]
}
  
const findMood = (weatherCode, temp) => {
    let mood_w
    let mood_t
    for (let i = 0; i < Object.keys(moods).length; i++) {
      if (moods[i].includes(weatherCode)) {
        mood_w = i
      }
    }
    if (!mood_w) {
      mood_w = 2
    }
  
    if (temp <= 4) {
      mood_t = 0
    } else if (temp >= 20) {
      mood_t = 4
    } else {
      mood_t = 2
    }

    let average = (mood_w + mood_t) / 2
    
    if (average > 2) {
        return Math.ceil(average)
    } else {
        return Math.floor(average)
    }  
}
  
const getMoodCode = async () => {
    const weatherApi = await getWeathercode()
  
    const weathercode = weatherApi.weather.current_weather.weathercode
    const temp = weatherApi.weather.current_weather.temperature
  
    moodCode = findMood(weathercode, temp)
  
    if (moodCode >= 0) {
      return {
        'mood': moodCode,
        'weathercode': weathercode,
        'temp': temp
      }
      
    } else {
      return -1
    }
} 


export { getMoodCode }