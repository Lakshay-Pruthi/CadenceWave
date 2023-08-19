import mainBanner2 from '../../../assets/mainBanner2.json'
import loadingAnimation2 from '../../../assets/loadingAnimation2.json'
import Lottie from 'lottie-react'




function Artists(props) {
    const { data, recommendedData } = props;
    return (
        <>
            {data ?
                <>
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
                </>

                :
                <div className='loadingDiv'>
                    <Lottie animationData={loadingAnimation2} />
                </div>
            }

        </>
    )
}

export default Artists;