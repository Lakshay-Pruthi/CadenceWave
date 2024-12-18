import artistIdData from "../../../data/Music/albums.json";
import { Link } from 'react-router-dom'


async function getArtistUrlString() {
    let urlString = "";
    for (const elem in artistIdData) {
        urlString = urlString.concat(artistIdData[elem] + ",");
    }
    urlString = urlString.slice(0, urlString.length - 1);
    return urlString;
}

async function fetchProfile(token) {
    const ids = await getArtistUrlString();
    const result = await fetch(`https://api.spotify.com/v1/albums?ids=${ids}`, {
        method: "GET",
        headers: {
            Authorization: "Bearer  " + token,
        },
    });
    const data = await result.json();
    return data;
}

export async function loadAlbumsData(token) {
    let Albums = await fetchProfile(token);
    Albums = Albums.albums;
    const images = [];
    for (let i = 0; i < Albums.length; i++) {
        const imgUrl = await Albums[i].images[0].url;
        const name = await Albums[i].name;
        const id = await Albums[i].id;
        images.push(
            <div key={i} className="songCardBanner">
                <Link to={`/CadenceWave/Music/album/${name}/${id}`}> <img src={imgUrl} /><p>{name}</p> </Link>
            </div>
        );
    }
    return images;
}
