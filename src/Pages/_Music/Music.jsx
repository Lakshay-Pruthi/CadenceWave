import { useEffect, useState } from 'react'
import speakerMusic from '../../assets/speakerMusic.json'
import Lottie from 'lottie-react'
import { NavLink, useParams } from 'react-router-dom'
import searchIcon from '../../assets/search.png'
import { connect } from 'react-redux'
import { loadArtistsData } from '../scripts/Music/loadArtists'
import { loadRecommendedArtistsData } from '../scripts/Music/fetchRecommendedArtists'
import Artists from './MiniPages/Artists'
import { loadAlbumsData } from '../scripts/Music/fetchAlbums'
import Albums from './MiniPages/Albums'
import { loadNewAlbumReleases } from '../scripts/Music/fetchNewAlbumReleases'

function Music({ app_token }) {
    const { type } = useParams();

    const [data, setData] = useState(null)
    const [otherData, setOtherData] = useState(null)



    useEffect(() => {
        async function displayArtists() {
            const token = app_token.token;
            let Data;
            let OtherData;

            if (type == ":Artists") {
                Data = await loadArtistsData(token);
                OtherData = await loadRecommendedArtistsData(token)
            } else if (type == ':Albums') {
                Data = await loadAlbumsData(token);
                OtherData = await loadNewAlbumReleases(token);
            }
            setData(Data);
            setOtherData(OtherData);
        }
        displayArtists();
    }, [app_token, type])






    return (
        <>
            <div className="sub-Container">
                <h1 className="subHeading"><Lottie animationData={speakerMusic} />Music<Lottie animationData={speakerMusic} /></h1>
                <nav className='innerNav'>
                    <div>
                        <NavLink to={'/Music/:Artists'}>Artists</NavLink>
                        <NavLink to={'/Music/:Albums'}>Albums</NavLink>
                        <NavLink to={''} className={'inactive'}>Playlists</NavLink>
                        <NavLink to={''} className={'inactive'}>Songs</NavLink>
                    </div>

                </nav>

                {type == ':Artists' ? <Artists data={data} recommendedData={otherData} /> : ''}
                {type == ':Albums' ? <Albums data={data} newReleases={otherData} /> : ''}

            </div>
        </>
    )
}

const mapStateToProps = (state) => {
    return { app_token: state.reducers }
}

export default connect(mapStateToProps)(Music);