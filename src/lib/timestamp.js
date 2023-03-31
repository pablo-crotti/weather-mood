const timestampTransform = (time) => {
    const now = new Date()
    const timeString = time
    const [minutes, seconds] = timeString.split(":")
    now.setMinutes(minutes)
    now.setSeconds(seconds)
    const timestamp = now.getTime()
    return timestamp
}

const hoursAndMinutes = (timestamp) => {
    const date = new Date(timestamp)
    const hours = date.getHours()
    const minutes = date.getMinutes()
    return `${hours}h${minutes}min`
}

export default function formatTimestamp(timestamp) {
    timestamp = parseInt(timestamp, 10)
    let hours   = Math.floor(timestamp / 3600)
    let minutes = Math.floor((timestamp - (hours * 3600)) / 60)
    let seconds = timestamp - (hours * 3600) - (minutes * 60)
  
    if (minutes < 10) minutes = "0" + minutes
    if (seconds < 10) seconds = "0" + seconds
    return minutes + ':' + seconds
}

  
export {timestampTransform, hoursAndMinutes, formatTimestamp }