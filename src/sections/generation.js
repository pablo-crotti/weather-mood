import { getMoodCode } from '../mood'
import { play } from './player'
import {timestampTransform, hoursAndMinutes } from '../lib/timestamp'
let songsCat = {
    "0": {
        "0": {
            "id": "1",
            "title": "STIMULI",
            "artist": "STARO",
            "duration": "03:34",
            "url": "https://mx3.ch/tracks/1tev/player_asset",
            "img": "https://mx3.ch/pictures/mx3/file/0093/3990/square_xlarge/annonce-1-1-copie.png?1567180444"
        },
        "1": {
            "id": "2",
            "title": "À l'aube de mes 30 ans",
            "artist": "Sophie de Quay",
            "duration": "02:42",
            "url": "https://mx3.ch/tracks/1yxU/player_asset",
		    "img": "https://mx3.ch/pictures/mx3/file/0098/0556/square_xlarge/230920_pochette-aube30ans-spotify.jpg?1604393216"
        },
        "2": {
            "id": "3",
            "title": "bittersweet",
            "artist": "asendorf",
            "duration": "03:31",
            "url": "https://mx3.ch/tracks/1BGW/player_asset",
		    "img": "https://mx3.ch/pictures/mx3/file/0100/7583/square_xlarge/cover_bittersweet.jpg?1623389578"
        },
        "3": {
            "id": "4",
            "title": "Cruel Love",
            "artist": "Prince Igor",
            "duration": "03:29",
            "url": "https://mx3.ch/tracks/1AgL/player_asset",
            "img": "https://mx3.ch/pictures/mx3/file/0099/5023/square_xlarge/cover-cruel-2.jpg?1613326337"
        },
        "4": {
            "id": "5",
            "title": "Bout U",
            "artist": "Mindboy",
            "duration": "03:29",
            "url": "https://mx3.ch/tracks/1sTu/player_asset",
            "img": "https://mx3.ch/pictures/mx3/file/0093/0691/square_xlarge/cover-bout-u.jpeg?1563094281"
        },
        "5": {
            "id": "6",
            "title": "Little Feelings",
            "artist": "[chuckles]",
            "duration": "03:35",
            "url": "https://mx3.ch/tracks/1zmp/player_asset",
            "img": "https://mx3.ch/pictures/mx3/file/0098/7558/square_xlarge/chevalfacefinal.png?1607699704"
        },
        "6": {
            "id": "7",
            "title": "Les bois de bouleaux",
            "artist": "Félicien LiA",
            "duration": "03:35",
            "url": "https://mx3.ch/tracks/CKb/player_asset",
            "img": "https://mx3.ch/pictures/mx3/file/0014/8935/square_xlarge/pochette-quand-l-homme-s-endort.jpg?1424117710"
        },
        "7": {
            "id": "8",
            "title": "Les bois de bouleaux",
            "artist": "Félicien LiA",
            "duration": "03:35",
            "url": "https://mx3.ch/tracks/CKb/player_asset",
            "img": "https://mx3.ch/pictures/mx3/file/0014/8935/square_xlarge/pochette-quand-l-homme-s-endort.jpg?1424117710"
        },
        "8": {
            "id": "9",
            "title": "Histoire de mélodie",
            "artist": "CHÂTEAU 9",
            "duration": "03:35",
            "url": "https://mx3.ch/tracks/1zL4/player_asset",
            "img": "https://mx3.ch/pictures/mx3/file/0099/0806/square_xlarge/vignette-histoire-de-melodies.png?1609315380"
        },
        "9": {
            "id": "10",
            "title": "Un monde meilleur (avec Lila Cruz)",
            "artist": "Albert de Gruffy",
            "duration": "03:35",
            "url": "https://mx3.ch/tracks/1q8F/player_asset",
            "img": "https://mx3.ch/pictures/mx3/file/0090/4923/square_xlarge/clandestin.jpg?1544623467"
        },
        "10": {
            "id": "11",
            "title": "Au Revoir",
            "artist": "SANDOR",
            "duration": "03:35",
            "url": "https://mx3.ch/tracks/1pa4/player_asset",
            "img": "https://mx3.ch/pictures/mx3/file/0089/3404/square_xlarge/au-revoir.jpg?1535707481"
        },
        "11": {
            "id": "12",
            "title": "Mauvaise Etoile",
            "artist": "Régis",
            "duration": "03:35",
            "url": "https://mx3.ch/tracks/1neg/player_asset",
            "img": "https://mx3.ch/pictures/mx3/file/0087/3690/square_xlarge/back-cover.jpg?1516735131"
        },
        "12": {
            "id": "13",
            "title": "DAISY & THE SHELL",
            "artist": "ZORG",
            "duration": "03:35",
            "url": "https://mx3.ch/tracks/28L/player_asset",
            "img": "https://mx3.ch/pictures/mx3/file/0000/8231/square_xlarge/zorg-web.jpg?1158165060"
        }
    },
    "1": {
        "0": {
            "id": "14",
            "title": "Rooftop",
            "artist": "Sophie de Quay",
            "duration": "04:07",
            "url": "https://mx3.ch/tracks/1CP7/player_asset",
            "img": "https://mx3.ch/pictures/mx3/file/0101/8556/square_xlarge/rooftop-sim-6.jpg?1633356085"
        },
        "1": {
            "id": "15",
            "title": "Your code",
            "artist": "Re-count",
            "duration": "04:47",
            "url": "https://mx3.ch/tracks/iO/player_asset",
            "img": "https://mx3.ch/pictures/mx3/file/0096/5477/square_xlarge/re-count-copertina-egocollective-jap.jpg?1589634039"
        },
        "2": {
            "id": "16",
            "title": "Va-et-vient",
            "artist": "Époque Bleue",
            "duration": "03:55",
            "url": "https://mx3.ch/tracks/1B74/player_asset",
            "img": "https://mx3.ch/pictures/mx3/file/0100/2388/square_xlarge/epoque-bleue_couloir-plus-flash.png?1619775461"
        },
        "3": {
            "id": "17",
            "title": "Talking To The Sun",
            "artist": "CRISTALLIN",
            "duration": "03:11",
            "url": "https://mx3.ch/tracks/1vPg/player_asset",
            "img": "https://mx3.ch/pictures/mx3/file/0095/7361/square_xlarge/ep_core_cover.jpg?1584436592"
        },
        "4": {
            "id": "18",
            "title": "Traveler",
            "artist": "Luca Aprile",
            "duration": "02:54",
            "url": "https://mx3.ch/tracks/1rNq/player_asset",
            "img": "https://mx3.ch/pictures/mx3/file/0091/9966/square_xlarge/luca-aprile-traveler_cover-3000x3000px.png?1553260729"
        },
        "5": {
            "id": "19",
            "title": "I'll be there",
            "artist": "Luca Aprile",
            "duration": "03:59",
            "url": "https://mx3.ch/tracks/1wWN/player_asset",
            "img": "https://mx3.ch/pictures/mx3/file/0096/6628/square_xlarge/i-ll-be-there_v02.jpg?1590733511"
        },
        "6": {
            "id": "20",
            "title": "Aurores",
            "artist": "SOFTEN",
            "duration": "04:32",
            "url": "https://mx3.ch/tracks/1gff/player_asset",
            "img": "https://mx3.ch/pictures/mx3/file/0080/2045/square_xlarge/151107_ep_cover.jpg?1449940431"
        },
        "7": {
            "id": "21",
            "title": "trinity (single edit)",
            "artist": "the shell",
            "duration": "03:35",
            "url": "https://mx3.ch/tracks/3sj/player_asset",
            "img": "https://mx3.ch/pictures/mx3/file/0001/3287/square_xlarge/live_3.jpg?1158661785"
        },
        "8": {
            "id": "22",
            "title": "Feathers",
            "artist": "Labrador City",
            "duration": "03:35",
            "url": "https://mx3.ch/tracks/oxq/player_asset",
            "img": "https://mx3.ch/pictures/mx3/file/0009/4328/square_xlarge/lc_single-cover_thumb.jpg?1292588396"
        },
        "9": {
            "id": "23",
            "title": "Le vent du nord",
            "artist": "YvesZ.",
            "duration": "03:35",
            "url": "https://mx3.ch/tracks/1ySL/player_asset",
            "img": "https://mx3.ch/pictures/mx3/file/0098/3322/square_xlarge/yvescoverz.jpg?1605862123"
        },
        "10": {
            "id": "24",
            "title": "If It Ain't Over",
            "artist": "Toyin",
            "duration": "03:35",
            "url": "https://mx3.ch/tracks/2UK/player_asset",
            "img": "https://mx3.ch/pictures/mx3/file/0031/8730/square_xlarge/DSC00110_copie.jpg?1399409314"
        },
        "11": {
            "id": "25",
            "title": "Cruel Love",
            "artist": "Prince Igor",
            "duration": "03:35",
            "url": "https://mx3.ch/tracks/1AgL/player_asset",
            "img": "https://mx3.ch/pictures/mx3/file/0099/5023/square_xlarge/cover-cruel-2.jpg?1613326337"
        },
        "12": {
            "id": "26",
            "title": "Occimmortel",
            "artist": "Todos Destinos",
            "duration": "03:35",
            "url": "https://mx3.ch/tracks/tU5/player_asset",
            "img": "https://mx3.ch/pictures/mx3/file/0011/4953/square_xlarge/TD_album_10ans.png?1330865414"
        },
        "13": {
            "id": "27",
            "title": "Vent sans frontière",
            "artist": "Morgoran",
            "duration": "03:35",
            "url": "https://mx3.ch/tracks/1qYS/player_asset",
            "img": "https://mx3.ch/pictures/mx3/file/0091/2003/square_xlarge/esquissepochette.jpg?1548003369"
        }
    },
    "2": {
        "0": {
            "id": "28",
            "title": "So Much to Learn",
            "artist": "Ghost Side",
            "duration": "03:11",
            "url": "https://mx3.ch/tracks/1g7J/player_asset",
            "img": "https://mx3.ch/pictures/mx3/file/0080/0897/square_xlarge/cover.jpg?1448873959"
        },
        "1": {
            "id": "29",
            "title": "Younger",
            "artist": "Luca Aprile",
            "duration": "03:11",
            "url": "https://mx3.ch/tracks/1Bb9/player_asset",
            "img": "https://mx3.ch/pictures/mx3/file/0100/2885/square_xlarge/younger_v01_r01.jpg?1620110913"
        },
        "2": {
            "id": "30",
            "title": "M'a Team",
            "artist": "US (UNKNOWN STORY)",
            "duration": "03:11",
            "url": "https://mx3.ch/tracks/1mws/player_asset",
            "img": "https://mx3.ch/pictures/mx3/file/0086/6456/square_xlarge/m-a-team-cover.png?1511523993"
        },
        "3": {
            "id": "31",
            "title": "MUSEUM",
            "artist": "STARO",
            "duration": "03:11",
            "url": "https://mx3.ch/tracks/1uO8/player_asset",
            "img": "https://mx3.ch/pictures/mx3/file/0094/7916/square_xlarge/vignette-02.jpg?1578317048"
        },
        "4": {
            "id": "32",
            "title": "She",
            "artist": "Rootwords",
            "duration": "03:11",
            "url": "https://mx3.ch/tracks/1hjo/player_asset",
            "img": "https://mx3.ch/pictures/mx3/file/0081/2555/square_xlarge/cover-inappropriatebehaviour-1000px.jpg?1457429272"
        },
        "5": {
            "id": "33",
            "title": "J'aime le feu",
            "artist": "Chien Bleu",
            "duration": "03:11",
            "url": "https://mx3.ch/tracks/1rFK/player_asset",
            "img": "https://mx3.ch/pictures/mx3/file/0091/8736/square_xlarge/cover_stream_1.jpg?1552299744"
        },
        "6": {
            "id": "34",
            "title": "Crossroads",
            "artist": "THE BEAUTY OF GEMINA",
            "duration": "03:11",
            "url": "https://mx3.ch/tracks/1hUx/player_asset",
            "img": "https://mx3.ch/pictures/mx3/file/0081/8872/square_xlarge/crossroads-cover-art-3000x3000.jpg?1464420556"
        },
        "7": {
            "id": "35",
            "title": "I Wanna Be",
            "artist": "Quentin Hannappe",
            "duration": "03:11",
            "url": "https://mx3.ch/tracks/AhW/player_asset",
            "img": "https://mx3.ch/pictures/mx3/file/0013/9496/square_xlarge/I_Wanna_Be_pochette.jpg?1395992205"
        },
        "8": {
            "id": "36",
            "title": "Je suis sous",
            "artist": "Pascal Schopfer",
            "duration": "03:11",
            "url": "https://mx3.ch/tracks/1Aal/player_asset",
            "img": "https://mx3.ch/pictures/mx3/file/0099/4166/square_xlarge/20210114_105629-1.jpg?1612524549"
        },
        "9": {
            "id": "37",
            "title": "La rue du chat qui pêche",
            "artist": "Recto Verso",
            "duration": "03:11",
            "url": "https://mx3.ch/tracks/40a/player_asset",
            "img": "https://mx3.ch/pictures/mx3/file/0001/5386/square_xlarge/chatquipeche.jpg?1159792518"
        },
        "10": {
            "id": "38",
            "title": "Ascenseur",
            "artist": "Chien Bleu",
            "duration": "03:11",
            "url": "https://mx3.ch/tracks/1psQ/player_asset",
            "img": "https://mx3.ch/pictures/mx3/file/0089/6872/square_xlarge/chienbleu_ascenseur_portrait_8.jpg?1538403531"
        },
        "11": {
            "id": "39",
            "title": "Mélodrame",
            "artist": "SILANCE",
            "duration": "03:11",
            "url": "https://mx3.ch/tracks/1Gve/player_asset",
            "img": "https://mx3.ch/pictures/mx3/file/0105/2218/square_xlarge/img_5378.jpg?1654248383"
        }
    },
    "3": {
        "0": {
            "id": "40",
            "title": "Never Get Enough Of You",
            "artist": "Amandine",
            "duration": "03:34",
            "url": "https://mx3.ch/tracks/1jzc/player_asset",
            "img": "https://mx3.ch/pictures/mx3/file/0100/8546/square_xlarge/i-want-you-artwork.jpg?1624271584" 
        },
        "1": {
            "id": "41",
            "title": "Le coeur tic tac",
            "artist": "YvesZ.",
            "duration": "03:34",
            "url": "https://mx3.ch/tracks/1x8T/player_asset",
            "img": "https://mx3.ch/pictures/mx3/file/0098/3336/square_xlarge/yvescoverz.jpg?1605863817" 
        },
        "2": {
            "id": "42",
            "title": "Graine d'Esprit",
            "artist": "Hermanos Perdidos",
            "duration": "03:34",
            "url": "https://mx3.ch/tracks/1B8T/player_asset",
            "img": "https://mx3.ch/pictures/mx3/file/0100/2553/square_xlarge/zeichenfla-eche-1-3x-100.jpg?1619815585" 
        },
        "4": {
            "id": "43",
            "title": "Bienvenue",
            "artist": "BASTOUN",
            "duration": "03:34",
            "url": "https://mx3.ch/tracks/1sW5/player_asset",
            "img": "https://mx3.ch/pictures/mx3/file/0093/1101/square_xlarge/bastoun_graphismealbum_exister_3000px.jpg?1563521171" 
        },
        "5": {
            "id": "44",
            "title": "Feathers",
            "artist": "Labrador City",
            "duration": "03:34",
            "url": "https://mx3.ch/tracks/oxq/player_asset",
            "img": "https://mx3.ch/pictures/mx3/file/0009/4328/square_xlarge/lc_single-cover_thumb.jpg?1292588396" 
        },
        "6": {
            "id": "45",
            "title": "Poupées",
            "artist": "Pascal Rinaldi",
            "duration": "03:34",
            "url": "https://mx3.ch/tracks/1ynA/player_asset",
            "img": "https://mx3.ch/pictures/mx3/file/0097/8972/square_xlarge/image-pour-digital.jpg?1603318712" 
        },
        "7": {
            "id": "46",
            "title": "cortex feat remy deroche(star du web)",
            "artist": "cortex",
            "duration": "03:34",
            "url": "https://mx3.ch/tracks/lTI/player_asset",
            "img": "https://mx3.ch/pictures/mx3/file/0008/4178/square_xlarge/CORTEX_TS_GANG2_NOIR_01_178x178.jpg?1272334411" 
        },
        "8": {
            "id": "47",
            "title": "LOVE FOR MY CITY",
            "artist": "Danitsa",
            "duration": "03:34",
            "url": "https://mx3.ch/tracks/1DzJ/player_asset",
            "img": "https://mx3.ch/pictures/mx3/file/0102/4812/square_xlarge/danitsa-sycle.jpg?1637918997" 
        },
        "9": {
            "id": "48",
            "title": "Elements",
            "artist": "The Homestories",
            "duration": "03:34",
            "url": "https://mx3.ch/tracks/Qwa/player_asset",
            "img": "https://mx3.ch/pictures/mx3/file/0096/4933/square_small/lgy5t5hm.jpg?1589199853" 
        },
        "10": {
            "id": "49",
            "title": "I've Been Out There",
            "artist": "MARY GO ROUND",
            "duration": "03:34",
            "url": "https://mx3.ch/tracks/BRW/player_asset",
            "img": "https://mx3.ch/pictures/mx3/file/0014/5572/square_xlarge/mgr_ep2015.jpg?1417829203" 
        },
        "11": {
            "id": "50",
            "title": "Regard de fille",
            "artist": "Époque Bleue",
            "duration": "03:34",
            "url": "https://mx3.ch/tracks/1yu9/player_asset",
            "img": "https://mx3.ch/pictures/mx3/file/0097/9903/square_xlarge/eepoque-bleue-peinture4.jpg?1603984667" 
        }

    },
    "4": {
        "0": {
            "id": "51",
            "title": "New Dawn",
            "artist": "Sophie de Quay",
            "duration": "03:34",
            "url": "https://mx3.ch/tracks/1x6s/player_asset",
            "img": "https://mx3.ch/pictures/mx3/file/0096/7884/square_xlarge/new-dawn-pochette-spotify.jpg?1592140785"
        },
        "1": {
            "id": "52",
            "title": "Stay at Home",
            "artist": "Bikini Beach",
            "duration": "02:42",
            "url": "https://mx3.ch/tracks/1xRd/player_asset",
		    "img": "https://mx3.ch/pictures/mx3/file/0097/4291/square_xlarge/a2058893030_10-2.jpg?1598960430"
        },
        "2": {
            "id": "53",
            "title": "Popsong",
            "artist": "Al Pride",
            "duration": "03:31",
            "url": "https://mx3.ch/tracks/rQr/player_asset",
		    "img": "https://mx3.ch/pictures/mx3/file/0010/7039/square_xlarge/AlPrideHelloBlueLight.jpg?1317175905"
        },
        "3": {
            "id": "54",
            "title": "Graine d'Esprit",
            "artist": "Hermanos Perdidos",
            "duration": "03:29",
            "url": "https://mx3.ch/tracks/1B8T/player_asset",
            "img" : "https://mx3.ch/pictures/mx3/file/0100/2553/square_xlarge/zeichenfla-eche-1-3x-100.jpg?1619815585"
        },
        "4": {
            "id": "55",
            "title": "MANGUE",
            "artist": "Mango Mango",
            "duration": "03:29",
            "url": "https://mx3.ch/tracks/1ACJ/player_asset",
            "img": "https://mx3.ch/pictures/mx3/file/0099/8037/square_xlarge/img_4145.jpg?1615734956"
        },
        "5": {
            "id": "56",
            "title": "Toi & Moi",
            "artist": "STEVANS",
            "duration": "03:35",
            "url": "https://mx3.ch/tracks/1zSJ/player_asset",
            "img": "https://mx3.ch/pictures/mx3/file/0099/1879/square_xlarge/s_toi-moi_3000x3000pxl.jpg?1610349424"
        },
        "6": {
            "id": "57",
            "title": "Regarde comme c'est beau",
            "artist": "Matthieu Monney",
            "duration": "03:35",
            "url": "https://mx3.ch/tracks/1nB9/player_asset",
            "img": "https://mx3.ch/pictures/mx3/file/0087/7428/square_xlarge/palm_101806_002.jpg?1518594475"
        }
    }
}


const template = document.querySelector('#generation-template')
const section = document.querySelector('#generation-section')

const getIP = async () => {

    try {
  
      const res = await fetch(`https://api.infoip.io`);
  
      const data = await res.json();
  
      console.log(data);
      return data
  
    } catch (e) {
  
      console.error(e.message);
  
    }
  
  };

function generatePlaylist(obj, numItems) {
    let items = Object.values(obj);
    let selectedItems = [];
    for (let i = 0; i < numItems && items.length > 0; i++) {
      const randomIndex = Math.floor(Math.random() * items.length);
      selectedItems.push(items[randomIndex]);
      items.splice(randomIndex, 1);
    }
    return selectedItems;
}

const getIcon = (weathercode) => {
    let name

    if (weathercode == 0) {
        name = '/01d@4x.0494e1ca.png'
    } else if (weathercode == 1 || weathercode == 2) {
        name = '/02d@4x.64457417.png'
    } else if (weathercode == 3) {
        name = '/03d@4x.c878fa9b.png'
    } else if (weathercode == 45 || weathercode == 48) {
        name = '/50d@4x.ab9dc3f3.png'
    } else if (weathercode == 51 || weathercode == 53 || weathercode == 55
        || weathercode == 56 || weathercode == 57) {
        name = '/04d@4x.0d3ee38b.png'
    } else if (weathercode == 61 || weathercode == 63 || weathercode == 65
        || weathercode == 66 || weathercode == 67) {
        name = '/10d@4x.573591b2.png'
    } else if (weathercode == 71 || weathercode == 73 || weathercode == 75
        || weathercode == 85 || weathercode == 86 || weathercode == 77) {
        name = '/13d@4x.8d27d1cc.png'
    } else if (weathercode == 80 || weathercode == 81 || weathercode == 82) {
        name = '/09d@4x.b763f084.png'
    } else if (weathercode == 95 || weathercode == 96 || weathercode == 99) {
        name = '/11d@4x.0450c7bc.png'
    } 
    console.log(name)
    return name
}

const songListVis = (container, list, nb) => {
    let it
    if(nb) {
        it = nb
    } else {
        it = list.lenght
    }

    if (nb) {
        for (let i = 0; i < it; i++) {
            const songItem = `<div class="preview-item">
                <div class="album-img"><img src="${list[i].img}"></div>
                <div class="song-infos">
                    <h3>${list[i].title}</h3>
                    <p>${list[i].artist}</p>
                </div>
            </div>` 

            // console.log(songItem)
            container.insertAdjacentHTML('beforeend', songItem)
            console.log(container.innerHTML)
        }
    }
}

const generation = async (infos) => {
    section.replaceChildren()

    const content = template.content.cloneNode(true)
    const location =  await getIP()

    // const songItem = previewItem.content.cloneNode(true)
    // console.log(songItem)

    const playlist = generatePlaylist(songsCat[infos.mood], 5)

    content.querySelector('h2').innerText = `${infos.temp}°C`
    content.querySelector('img').src = getIcon(infos.weathercode)
    content.querySelector('p').innerText = `${location.city}, ${location.country_long}`

    const playlistContainer = content.querySelector('.playlist-container')
    playlistContainer.innerHTML = `<div class="playlist-img-wrapper">
        <div id="img-1" class="playlist-img-container">
            <img src="${playlist[0].img}">
        </div>
        <div id="img-2" class="playlist-img-container">
            <img src="${playlist[1].img}">
        </div>
        <div id="img-3" class="playlist-img-container">
            <img src="${playlist[2].img}">
        </div>
        <div id="img-4" class="playlist-img-container">
            <img src="${playlist[3].img}">
        </div>
    </div>
    <div class="playlist-txt-container">
        <h2>Your playlist is ready</h2>
        <button class="play">
            <span class="material-icons">play_arrow</span>
        </button>
    </div>
    </div> `
    
    const previewContainer = content.querySelector('.preview-container')
    let totalTime = 0
    playlist.forEach(song => {
        totalTime += timestampTransform(song.duration)
    })

    songListVis(previewContainer, playlist, 3)

    
    content.querySelector('.playlist-det p').innerText = `${playlist.length + 1} artists - ${hoursAndMinutes(totalTime)}`
    section.append(content)

    section.querySelector('.play').addEventListener('click', function() {
        play(playlist[0], playlist)
        window.location.hash = '#player'
    })

    section.querySelector('.change-mood-container input').value = infos.mood
    section.querySelector('.change-mood-container button').addEventListener('click', function() {

        const newInfos =  {
            "mood": parseInt(section.querySelector('.change-mood-container input').value),
            "weathercode": infos.weathercode, 
            "temp": infos.temp
        }
        generation(newInfos)
    })
}

const renderGeneration = async () => {
    const infos =  await getMoodCode()

    
    generation(infos)

}

export { renderGeneration, songListVis }

