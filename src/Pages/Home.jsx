import mainBanner from '../assets/mainBanner1.json'
import logoAnimation from '../assets/logoAnimation.json'
import Lottie from 'lottie-react'
import { _getToken } from './scripts/getToken'
import { useEffect } from 'react'
import { connect } from 'react-redux'
import { app_token } from '../redux/actions/actions'
import { Link } from 'react-router-dom'

function Home({ app_token }) {

    useEffect(() => {
        async function loadToken() {
            const token = await _getToken();
            app_token(token);
        }
        loadToken();
    }, [])




    return (
        <>

            <div id='homeOuter'>
                <Lottie animationData={mainBanner} />
                <div id='logoContainer'>
                    <h1 id='mainHeading'>CadenceWave<Lottie animationData={logoAnimation} /></h1>
                    <p id='mainText'>...Stream the Sounds of Life</p>
                    <div id='btnGroup'>
                        <button className='btnPrimary'><Link to={'/Music'}>Music</Link></button>
                        <button className='btnPrimary'><Link to={'/Podcast'}>Podcast</Link></button>
                        <button className='btnPrimary'><Link to={'/Comedy'}>Comedy</Link></button>
                        <button className='btnPrimary'><Link to={'/Spritual'}>Spritual</Link></button>
                    </div>
                </div>
            </div>
        </>
    )
}

const mapStateToProps = (state) => {
    return { data: state.reducers };

}
const mapDispatchToProps = (dispatch) => ({
    app_token: (token) => (dispatch(app_token(token)))
})

export default connect(mapStateToProps, mapDispatchToProps)(Home);