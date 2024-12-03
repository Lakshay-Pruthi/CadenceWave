import mainBanner4 from '../../../assets/mainBanner4.json'
import loadingAnimation2 from '../../../assets/loadingAnimation2.json'
import Lottie from 'lottie-react'




function Albums(props) {
    const { data, newReleases } = props;
    return (
        <>
            {data ?
                <>
                    <h1>New Releases</h1>

                    <div className='miniContainer itemContainer  scrollable'>
                        {newReleases}
                    </div>

                    <h1>Top Albums</h1>

                    <div className='miniContainer itemContainer  scrollable'>
                        <div className='songCardBanner'>
                            <Lottie animationData={mainBanner4} />
                        </div>
                        {data}
                    </div>

                </>

                :
                <div className='loadingDiv'>
                    <Lottie animationData={loadingAnimation2} />
                </div>
            }

        </>
    )
}

export default Albums;