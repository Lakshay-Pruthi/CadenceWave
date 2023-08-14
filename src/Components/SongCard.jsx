import play from '../assets/play.png'
function SongCard(props) {
    const { title } = props;
    return (
        <div className="songCard">
            {title}
            <img src={play} alt="" />
        </div>
    )
}

export default SongCard;