import { Link } from "react-router-dom";

export async function _fetchArtistData(token, id) {
    const result = await fetch(`https://api.spotify.com/v1/artists/${id}/albums`, {
        method: "GET",
        headers: {
            Authorization: "Bearer  " + token,
        },
    });
    const data = await result.json();

    const Albums = data.items;
    const images = [];
    for (let i = 0; i < Albums.length; i++) {
        let name = await Albums[i].name.replace(/[^\w\s]/g, '');
        let fullName = name;
        if (name.length > 30) name = name.substring(0, 15) + '...'
        const imgUrl = await Albums[i].images[0].url;
        const id = await Albums[i].id;
        images.push(
            <div key={i} className="songCardBanner">
                <Link to={`/CadenceWave/Music/album/${fullName}/${id}`}> <img src={imgUrl} /><p>{name}</p> </Link>
            </div>
        );
    }
    return images;
}

