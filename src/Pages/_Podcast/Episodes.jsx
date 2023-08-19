import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { connect } from "react-redux";
import loadingAnimation2 from '../../assets/loadingAnimation2.json'
import Lottie from 'lottie-react'
import { _fetchPodcastEpisodes } from "../scripts/Podcast/fetchPodcastEpisodes";

function Episodes({ app_token }) {
    const { id, name } = useParams();
    const [Data, setData] = useState(null);
    useEffect(() => {
        async function fetchAtristData() {
            const data = await _fetchPodcastEpisodes(app_token.token, id);
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

export default connect(mapStateToProps)(Episodes);