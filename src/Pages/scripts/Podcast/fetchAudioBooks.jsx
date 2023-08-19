import artistIdData from "../../../data/Podcast/AudioBooks.json";
import { Link } from "react-router-dom";


async function getPodcastersUrlString() {
    let urlString = "";
    for (const elem in artistIdData) {
        urlString = urlString.concat(artistIdData[elem] + ",");
    }
    urlString = urlString.slice(0, urlString.length - 1);
    return urlString;
}

async function fetchProfile(token) {
    const ids = await getPodcastersUrlString();
    const result = await fetch(`https://api.spotify.com/v1/shows?ids=${ids}&market=US`, {
        method: "GET",
        headers: {
            Authorization: "Bearer  " + token,
        },
    });
    const data = await result.json();
    return data;
}

export async function fetchAudioBooks(token) {
    let Shows = await fetchProfile(token);
    Shows = Shows.shows;
    const images = [];
    for (let i = 0; i < Shows.length; i++) {
        const imgUrl = await Shows[i].images[0].url;
        const name = await Shows[i].name;
        const id = await Shows[i].id;
        images.push(
            <div key={i} className="songCardBanner">
                <Link to={`/CadenceWave/Podcast/${name}/${id}`}> <img src={imgUrl} /><p>{name}</p> </Link>
            </div>
        );
    }
    return images;
}
