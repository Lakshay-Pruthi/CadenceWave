import SongCard from "../../../Components/SongCard";

export async function _fetchAlbumSongs(token, id) {
    const result = await fetch(`https://api.spotify.com/v1/albums/${id}/tracks`, {
        method: "GET",
        headers: {
            Authorization: "Bearer  " + token,
        },
    });
    const data = await result.json();
    console.log(data);

    const Songs = data.items;

    const songs = [];
    for (let i = 0; i < Songs.length; i++) {
        const songName = await Songs[i].name;
        const previewUrl = await Songs[i].external_urls.spotify;
        songs.push(
            <SongCard key={i} title={songName} previewUrl={previewUrl} />
        );
    }
    return songs;
}

