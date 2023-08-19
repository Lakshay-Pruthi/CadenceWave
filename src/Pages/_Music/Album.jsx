import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { connect } from "react-redux";
import { _fetchAlbumSongs } from "../scripts/Music/fetchAlbumSongs";
import loadingAnimation2 from '../../assets/loadingAnimation2.json'
import Lottie from 'lottie-react'

function Album({ app_token }) {
    const { id, name } = useParams();
    const [Data, setData] = useState(null);
    useEffect(() => {
        async function fetchAtristData() {
            const data = await _fetchAlbumSongs(app_token.token, id);
            setData(data);
        }
        fetchAtristData();
    }, [id, app_token])
    return (
        <>
            <div className="sub-Container ">
                {Data ?
                    <div className="songContainer scrollable">
                        <h1>{name}</h1>
                        {Data}
                    </div>
                    :
                    <div className='loadingDiv'>
                        <Lottie animationData={loadingAnimation2} />
                    </div>
                }
            </div>
        </>
    )
}

const mapStateToProps = (state) => {
    return { app_token: state.reducers }
}

export default connect(mapStateToProps)(Album);