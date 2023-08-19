import { Link } from 'react-router-dom'




async function fetchProfile(token) {
    const id = '7vk5e3vY1uw9plTHJAMwjN'
    const result = await fetch(`https://api.spotify.com/v1/artists/${id}/related-artists`, {
        method: "GET",
        headers: {
            Authorization: "Bearer  " + token,
        },
    });
    const data = await result.json();
    return data;
}

export async function loadRecommendedArtistsData(token) {
    let Artists = await fetchProfile(token);
    Artists = Artists.artists;
    const images = [];
    for (let i = 0; i < Artists.length; i++) {
        const imgUrl = await Artists[i].images[2].url;
        const name = await Artists[i].name;
        const id = await Artists[i].id;
        images.push(
            <div key={i} className="songCardBanner">
                <Link to={`/about/artist/${id}`}> <img src={imgUrl} /><p>{name}</p> </Link>
            </div>
        );
    }
    return images;
}
