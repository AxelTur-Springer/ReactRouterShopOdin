import React from 'react';
import "../Styling/Pages/Contact.css"

const Contact = () => {
    return (
        <div className='ContactContainer'>
            <div>
                <p>Contact</p>
                <p className='me'>Me!</p>
            </div>
            <div class="ContainerIcon">
                <div id="social-test">
                    <ul class="social">
                        <li>
                            <a href="https://github.com/AxelTur-Springer/ReactRouterShopOdin"><i class="fa fa-github" aria-hidden="true"></i></a>
                        </li>
                        <li>
                            <a href="https://www.instagram.com/axel.turspringer/"> <i class="fa fa-instagram" aria-hidden="true"></i></a>
                        </li>
                        <li>
                            <a href="https://www.facebook.com/axel.turspringer/"> <i class="fa fa-facebook" aria-hidden="true"></i></a>
                        </li>
                        <li>
                            <a href="https://mail.google.com/mail/u/0/?fs=1&tf=cm&source=mailto&su=Buisness+inquiry&to=axel.turspringer@gmail.com&body=Hello+Axel+Tur+Springer"><i class="fa fa-envelope"></i></a>
                        </li>
                        
                       
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default Contact;
