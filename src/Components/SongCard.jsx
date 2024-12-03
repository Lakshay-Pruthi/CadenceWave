function SongCard(props) {
    const { title, previewUrl } = props;
    console.log(previewUrl);

    return (
        <div className="songCard">
            <p>● {title}</p>
            <div>
                {previewUrl ? "" : <p>Preview not available</p>}
                <a target="_block" href={previewUrl}><button style={{ 'background-color': 'white', 'padding': '5px 10px', 'border-radius': '50%', 'border': 'none', 'font-size': '20px' }} > ▶</button></a>
            </div>
        </div >
    )
}

export default SongCard;