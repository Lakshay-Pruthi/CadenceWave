import Lottie from 'lottie-react'
import micPodcast from '../assets/micPodcast.json'
import { useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom'
import { connect } from 'react-redux'
import { loadPodcasts } from './scripts/loadPodcastCreators'

function Podcast({ app_token }) {


    const [data, setData] = useState(null)


    useEffect(() => {
        async function displayArtists() {
            const Data = await loadPodcasts(app_token.token);
            setData(Data);
        }
        displayArtists();
    }, [])

    return (
        <>
            <div className="sub-Container">
                <h1 className="subHeading"><Lottie animationData={micPodcast} />Podcast<Lottie animationData={micPodcast} /></h1>
                <nav className='innerNav'>
                    <div>
                        <NavLink to={'/Podcast/:Artists'}>Artists</NavLink>
                        <NavLink to={'/Podcast/:Albums'}>Albums</NavLink>
                        <NavLink to={'/Podcast/:Playlists'}>Playlists</NavLink>
                        <NavLink to={'/Podcast/:Songs'}>Songs</NavLink>
                    </div>
                    <div className="searchbar">
                        <input type="text" placeholder='Search...' />
                    </div>
                </nav>
                <div className='itemContainer miniContainer scrollable'>

                    {data}
                </div>
            </div>
        </>
    )
}

const mapStateToProps = (state) => {
    return { app_token: state.reducers }
}

export default connect(mapStateToProps)(Podcast);