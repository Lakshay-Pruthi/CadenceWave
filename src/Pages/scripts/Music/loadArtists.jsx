import artistIdData from "../../../data/Music/artists.json";
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
  const result = await fetch(`https://api.spotify.com/v1/artists?ids=${ids}`, {
    method: "GET",
    headers: {
      Authorization: "Bearer  " + token,
    },
  });
  const data = await result.json();
  return data;
}

export async function loadArtistsData(token) {
  let Artists = await fetchProfile(token);
  console.log(Artists);

  Artists = Artists.artists;
  const images = [];
  for (let i = 0; i < Artists.length; i++) {
    const imgUrl = await Artists[i].images[2].url;
    const name = await Artists[i].name;
    const id = await Artists[i].id;
    images.push(
      <div key={i} className="songCardBanner">
        <Link to={`/CadenceWave/Music/about/artist/${id}`}> <img src={imgUrl} /><p>{name}</p> </Link>
      </div>
    );
  }
  return images;
}
