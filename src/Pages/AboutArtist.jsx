import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { connect } from "react-redux";
import { _fetchArtistData } from "./scripts/fetchArtistData";

function AboutArtist({ app_token }) {
    const { id } = useParams();
    const [Data, setData] = useState(null);
    useEffect(() => {
        async function fetchAtristData() {
            const data = await _fetchArtistData(app_token.token, id);
            setData(data);
        }
        fetchAtristData();
    }, [id])
    return (
        <>
            <div className="sub-Container ">
                <h1 className="centerHeading">Albums</h1>

                <div className="itemContainer scrollable">

                    {Data}
                </div>
            </div>
        </>
    )
}

const mapStateToProps = (state) => {
    return { app_token: state.reducers }
}

export default connect(mapStateToProps)(AboutArtist);