import mainBanner3 from '../../../assets/mainBanner3.json'
import loadingAnimation2 from '../../../assets/loadingAnimation2.json'
import Lottie from 'lottie-react'




function Podcasters(props) {
    const { data } = props;
    return (
        <>
            {data ?
                <>
                    <h1>Top Podcasters</h1>

                    <div className='miniContainer itemContainer  scrollable'>
                        <div className='songCardBanner'>
                            <Lottie animationData={mainBanner3} />
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

export default Podcasters;