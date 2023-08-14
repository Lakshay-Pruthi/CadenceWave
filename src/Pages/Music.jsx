import { useEffect, useState } from 'react'
import mainBanner2 from '../assets/mainBanner2.json'
import speakerMusic from '../assets/speakerMusic.json'
import Lottie from 'lottie-react'
import { NavLink } from 'react-router-dom'
import searchIcon from '../assets/search.png'
import { connect } from 'react-redux'
import { loadArtistsData } from './scripts/loadArtists'
import { loadRecommendedArtistsData } from './scripts/fetchRecommendedArtists'

function Music({ app_token }) {

    const [data, setData] = useState(null)
    const [recommendedData, setRecommendedData] = useState(null)


    useEffect(() => {
        async function displayArtists() {
            const token = app_token.token;
            const Data = await loadArtistsData(token);
            const RecommendedData = await loadRecommendedArtistsData(token)
            setData(Data);
            setRecommendedData(RecommendedData);
        }
        displayArtists();
    }, [])



    return (
        <>
            <div className="sub-Container">
                <h1 className="subHeading"><Lottie animationData={speakerMusic} />Music<Lottie animationData={speakerMusic} /></h1>
                <nav className='innerNav'>
                    <div>
                        <NavLink to={'/Music/:Artists'}>Artists</NavLink>
                        <NavLink to={'/Music/:Albums'}>Albums</NavLink>
                        <NavLink to={'/Music/:Playlists'}>Playlists</NavLink>
                        <NavLink to={'/Music/:Songs'}>Songs</NavLink>
                    </div>
                    <div className="searchbar">
                        <input type="text" placeholder='Search...' />
                        <img src={searchIcon} alt="" />
                    </div>
                </nav>
                <h1>Top Artists</h1>

                <div className='miniContainer itemContainer  scrollable'>
                    <div className='songCardBanner'>
                        <Lottie animationData={mainBanner2} />
                    </div>
                    {data}
                </div>
                <h1>Recommended Artists</h1>
                <div className='miniContainer itemContainer  scrollable'>
                    {recommendedData}
                </div>

            </div>
        </>
    )
}

const mapStateToProps = (state) => {
    return { app_token: state.reducers }
}

export default connect(mapStateToProps)(Music);