import SongCard from "../../../Components/SongCard";

export async function _fetchPodcastEpisodes(token, id) {
    const result = await fetch(`https://api.spotify.com/v1/shows/${id}/episodes?market=IN`, {
        method: "GET",
        headers: {
            Authorization: "Bearer  " + token,
        },
    });
    const data = await result.json();
    const Songs = data.items;
    const songs = [];
    for (let i = 0; i < Songs.length; i++) {
        const songName = await Songs[i].name;
        const previewUrl = await Songs[i].audio_preview_url;
        songs.push(
            <SongCard key={i} title={songName} previewUrl={previewUrl} />
        );
    }
    return songs;
}

