




import React from 'react';
import './footer.css';
import slackerLogo from '../../assets/slick_logo.png';

function Footer(){

    return (
        <>

<div class="wavybox"></div>
   <footer>
   <img className="slick-logo" src={slackerLogo} alt="Slick Logo" />
    <div class="footer-column">
        <h3>TECHNOLOGIES</h3>
        <ul>
            <li>React</li>
            <li>Redux</li>
            <li>JavaScript</li>
            <li>HTML/CSS</li>
            <li>Python</li>
            <li>PostgreSQL</li>
            <li>Flask</li>
            <li>Font Awesome</li>
            <li>Socket.io</li>
            <li>Render</li>
        </ul>

    </div>

    <div class="footer-column">
        <h3>PERSONAL LINKS</h3>
        <ul>
            <li><a href="https://www.linkedin.com/in/yiningmao/" target="_blank">LinkedIn</a></li>
            <li><a href="https://github.com/ymao21" target="_blank">Github</a></li>
        </ul>
    </div>

</footer>


        </>
    )

}


export default Footer
