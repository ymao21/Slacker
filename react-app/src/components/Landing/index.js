import { useSelector } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { useState } from 'react';
import './Landing.css';
import landingPageImage from '../../assets/landingPage.png';
import landingPageGif from '../../assets/landingPage.gif';

function Landing() {
    const user = useSelector(state => state.session.user);
    const [redirect, setRedirect] = useState(false);
    const demoData = () => {
        if (user)
            return (
                <>
                    {redirect && <Redirect to="/chat" />}
                    <div className='landing-demo-room-container'>
                        {/* <div className='landing-demo-room'> */}
                            {/* <div className='landing-demo-room-title'>Demo Server</div> */}
                            {/* <div className='landing-demo-room-description'>This is a demo server</div> */}
                            <div className='landing-demo-room-enter-button' onClick={() => setRedirect(true)}>Enter Demo Server</div>
                        {/* </div> */}
                    </div>


                    <div className='landingpage'>

<div className='image-container'>
<img src={landingPageImage} alt="Landing Page"
   className='landingimage' />


<div className='text-container'>

<div class="container">
<h1 class="typed">Discover a new way of working</h1>
</div>

<img src={landingPageGif} alt="Landing gif"
   className='landinggif' />

<h2 className='landingsecondh'>All the features work together so you can too.</h2>

<h2 className='landingfourthh'>
Bring the right people and information together in channels. Share ideas, make decisions and move work forward with a common purpose and place.
</h2>
</div>
</div>
</div>

<div className='social-footer'>
    <div>
        <div className='social-item'>
            <a href='https://github.com/ymao21' class="github-button" >
                <img src="https://cdn-icons-png.flaticon.com/512/25/25231.png" alt='github' />

            Yining Mao
            </a>
        </div>


    </div>

</div>
                </>


            );
        if (!user)
            return (
                <>
                    <div className='landingpage'>

                    <div className='image-container'>
                    <img src={landingPageImage} alt="Landing Page"
                       className='landingimage' />


      <div className='text-container'>

      <div class="container">
      <h1 class="typed">Discover a new way of working</h1>
      </div>

      <img src={landingPageGif} alt="Landing gif"
                       className='landinggif' />

        <h2 className='landingsecondh'>All the features work together so you can too.</h2>

        <h2 className='landingfourthh'>
          Bring the right people and information together in channels. Share ideas, make decisions and move work forward with a common purpose and place.
        </h2>
      </div>
    </div>
  </div>

                    <div className='social-footer'>
                        <div>
                            <div className='social-item'>
                                <a href='https://github.com/ymao21' class="github-button" >
                                    <img src="https://cdn-icons-png.flaticon.com/512/25/25231.png" alt='github' />

                                Yining Mao
                                </a>
                            </div>


                        </div>

                    </div>
                </>
            );
    }

    return (
        <div>

            {demoData()}
            {/* {user && <Redirect to="/chat" />} */}
        </div>
    )
}
export default Landing;
