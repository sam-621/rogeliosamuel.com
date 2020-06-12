import React from 'react';
import '../assets/styles/footer.css'
import GitHub from '../assets/Images/git.svg';
import Linkedin from '../assets/Images/linkedin.svg';
import Twitter from '../assets/Images/twitter.svg'
import FB from '../assets/Images/fbIcon.svg'

const Footer = () => {
    return(
        <footer id="contacto">
            <div className="Icons">
                
                <a 
                    href="https://github.com/rogeliosamuel621" target="_blank">
                    <img src={GitHub} alt=""/>
                </a>
                <a 
                    href="https://www.linkedin.com/in/rogelio-samuel-moreno-corrales/" 
                    target="_blank">
                    <img src={Linkedin} alt=""/>
                </a>
                <a 
                    href="https://twitter.com/RogelioSamuel2" 
                    target="_blank">
                    <img src={Twitter} alt=""/>
                </a>
                <a 
                    href="https://www.facebook.com/rogeliosamuel.morenocorrales" t
                    arget="_blank">
                    <img src={FB} alt=""/>
                </a>
            </div>
        </footer>
    );
}

export default Footer;