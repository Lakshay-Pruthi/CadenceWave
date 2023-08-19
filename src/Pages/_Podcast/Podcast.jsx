import Lottie from 'lottie-react'
import micPodcast from '../../assets/micPodcast.json'
import { useEffect, useState } from 'react'
import { NavLink, useParams } from 'react-router-dom'
import { connect } from 'react-redux'
import { loadPoadcastersData } from '../scripts/Podcast/loadPodcastCreators'
import Podcasters from './MiniPages/Podcasters'
import searchIcon from '../../assets/search.png'
import { fetchAudioBooks } from '../scripts/Podcast/fetchAudioBooks'



function Podcast({ app_token }) {

    const { type } = useParams();

    const [data, setData] = useState(null)


    useEffect(() => {
        async function displayArtists() {
            let Data;
            if (type == ':Podcasters') Data = await loadPoadcastersData(app_token.token);
            else if (type == ':Audiobooks') Data = await fetchAudioBooks(app_token.token);
            setData(Data);
        }
        displayArtists();
    }, [app_token, type])

    return (
        <>
            <div className="sub-Container">
                <h1 className="subHeading"><Lottie animationData={micPodcast} />Podcast<Lottie animationData={micPodcast} /></h1>
                <nav className='innerNav'>
                    <div>
                        <NavLink to={'/CadenceWave/Podcast/:Podcasters'} >Podcasters</NavLink>
                        <NavLink to={''} className={'inactive'}>Audiobooks</NavLink>
                        <NavLink to={''} className={'inactive'}>Playlists</NavLink>
                        <NavLink to={''} className={'inactive'}>Motivational</NavLink>
                    </div>

                </nav>
                {type == ':Podcasters' ? <Podcasters data={data} /> : ''}
                {type == ':Audiobooks' ? <Podcasters data={data} /> : ''}

            </div>
        </>
    )
}

const mapStateToProps = (state) => {
    return { app_token: state.reducers }
}

export default connect(mapStateToProps)(Podcast);