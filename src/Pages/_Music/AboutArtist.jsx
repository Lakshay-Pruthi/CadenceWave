import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { connect } from "react-redux";

import { _fetchArtistData } from "../scripts/Music/fetchArtistData";
import loadingAnimation2 from '../../assets/loadingAnimation2.json'
import Lottie from 'lottie-react'
function AboutArtist({ app_token }) {
    const { id } = useParams();
    const [Data, setData] = useState(null);
    useEffect(() => {
        async function fetchAtristData() {
            const data = await _fetchArtistData(app_token.token, id);
            setData(data);
        }
        fetchAtristData();
    }, [id, app_token])
    return (
        <>
            <div className="sub-Container ">
                <h1 className="centerHeading">Albums</h1>
                {Data ?
                    <div className="itemContainer scrollable">

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

export default connect(mapStateToProps)(AboutArtist);