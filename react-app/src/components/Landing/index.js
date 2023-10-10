import { useSelector } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { useState } from 'react';
import './Landing.css';
import ImageRotator from './imageRotater';
import landingPageGif from '../../assets/landingPage.gif';
import Footer from './footer';

function Landing() {
    const user = useSelector(state => state.session.user);
    const [redirect, setRedirect] = useState(false);
    const demoData = () => {
        if (user)
    return (
                <>


                    {redirect && <Redirect to="/chat" />}


                    <div className='landing-demo-room-container'>

                            <div className='landing-demo-room-enter-button' onClick={() => setRedirect(true)}>Launch Demo Server</div>
                    </div>

                    <div className='landingpage'>

  <div className='landingContainer'>

    <div className='image-container'>
      <img src={landingPageGif} alt="Landing gif" className='landinggif' />
    </div>
    <div className='text-container'>
    <h1 class="typed">Discover a new way of working</h1>

      <h2 className='landingfourthh'>
        Bring the right people and information together in channels. Share ideas, make decisions and move work forward with a common purpose and place.
      </h2>

    </div>

  </div>

</div>

</>
);

if (!user)
            return (
                <>

<div className='landingpage'>

  <div className='landingContainer'>

    <div className='image-container'>
      <img src={landingPageGif} alt="Landing gif" className='landinggif' />
    </div>
    <div className='text-container'>
    <h1 class="typed">Discover a new way of working</h1>

      <h2 className='landingfourthh'>
        Bring the right people and information together in channels. Share ideas, make decisions and move work forward with a common purpose and place.
      </h2>

    </div>

  </div>

</div>


                    <div className='landingContainer2'>

                    <div class="landingContainer2-content">
                    <h1>Choose how you want to work </h1>

                    <p>In Slacker, you will no longer be slacking!
                        You can easily chat with all your friends and coworkers. You've got
                        all the flexibility to work when, where and how it's best for you.</p>
                </div>
                <div className='landingContainer2-image'><ImageRotator /></div>
                    </div>




                    <Footer/>
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
