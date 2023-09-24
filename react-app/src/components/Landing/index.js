import { useSelector } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { useState } from 'react';
import './Landing.css';
import landingPageImage from '../../assets/landingPage.png';

function Landing() {
    const user = useSelector(state => state.session.user);
    const [redirect, setRedirect] = useState(false);
    const demoData = () => {
        if (user)
            return (
                <>
                    {redirect && <Redirect to="/chat" />}
                    <div className='landing-demo-room-container'>
                        <div className='landing-demo-room'>
                            <div className='landing-demo-room-title'>Demo Server</div>
                            <div className='landing-demo-room-description'>This is a demo server</div>
                            <div className='landing-demo-room-enter-button' onClick={() => setRedirect(true)}>Enter</div>
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

        <h1 className='landingfirsth'>One Platform For Your Team and Your Work</h1>
        <h2 className='landingsecondh'>All the features work together so you can too.</h2>
        <h1 className='landingthirdh'>Discover a new way of working</h1>
        <h2 className='landingfourthh'>
          Bring the right people and information together in channels. Share ideas, make decisions and move work forward with a common purpose and place.
        </h2>
      </div>
      

    </div>

  </div>
                    <div className='social-footer'>
                        <div>
                            <div className='social-item'>
                                <a href='https://github.com/ymao21' target='_blank' >
                                    <img src='https://shields.io/badge/GitHub-Yining%20Mao-400d40?logo=github&style=plastic' alt='github' />
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
