function SongCard(props) {
    const { title, previewUrl } = props;
    return (
        <div className="songCard">
            <p>● {title}</p>
            <div>
                {previewUrl ? "" : <p>Preview not available</p>}
                <audio id="audioPlayer" controls>
                    <source id="audioSource" src={previewUrl} type="audio/mpeg"></source>
                </audio>
            </div>

        </div>
    )
}

export default SongCard;