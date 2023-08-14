// import artistIdData from "../../data/artists.json";

// async function getArtistUrlString() {
//     let urlString = "";
//     for (const elem in artistIdData) {
//         urlString = urlString.concat(artistIdData[elem] + ",");
//     }
//     urlString = urlString.slice(0, urlString.length - 1);
//     return urlString;
// }

async function fetchProfile(token) {
    // const ids = await getArtistUrlString();
    const result = await fetch(`https://api.spotify.com/v1/artists/3TVXtAsR1Inumwj472S9r4`, {
        method: "GET",
        headers: {
            Authorization: "Bearer  " + token,
        },
    });
    const data = await result.json();
    return data;
}

export async function loadPodcasts(token) {
    let Artists = await fetchProfile(token);
    console.log(Artists);
    // const images = [];
    // for (let i = 0; i < Artists.length; i++) {
    //     const imgUrl = await Artists[i].images[2].url;
    //     images.push(
    //         <div key={i} className="songCardBanner">
    //             <img src={imgUrl} />
    //         </div>
    //     );
    // }
    // return images;
}
