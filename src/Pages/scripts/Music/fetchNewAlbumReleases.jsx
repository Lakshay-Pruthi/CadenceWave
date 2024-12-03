import { Link } from 'react-router-dom'



async function fetchProfile(token) {
    const result = await fetch(`https://api.spotify.com/v1/browse/new-releases?market=IN`, {
        method: "GET",
        headers: {
            Authorization: "Bearer  " + token,
        },
    });
    const data = await result.json();
    return data;
}

export async function loadNewAlbumReleases(token) {
    let Albums = await fetchProfile(token);
    Albums = Albums.albums.items;
    const images = [];
    for (let i = 0; i < Albums.length; i++) {
        const imgUrl = await Albums[i].images[0].url;
        const name = await Albums[i].name.replace(/[^\w\s]/g, '');
        const id = await Albums[i].id;
        images.push(
            <div key={i} className="songCardBanner">
                <Link to={`/CadenceWave/Music/album/${name}/${id}`}> <img src={imgUrl} /><p>{name}</p> </Link>
            </div>
        );
    }
    return images;
}
