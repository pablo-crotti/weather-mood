const BASE_URL = ' http://transport.opendata.ch/v1/locations?'




const loadJson = (url) => {
    return fetch(url).then((res) => res.json())
}

const getCity = async (position) => {
    // return loadJson(`${BASE_URL}x=${position.lat}&y=${position.long}&type=station `)
}

export { getCity }