import React from 'react'
import './Footer.css'
import footer_logo from '../../assets/RoshanLogo.png'
import instagram_icon from '../../assets/instagram_icon.png'
import pintester_icon from '../../assets/pintester_icon.png'
import whatsApp_icon from '../../assets/whatsapp_icon.png'

const Footer = () => {
  return (
    <div className='footer'>
        <div className="footer-logo">
            <img src={footer_logo} alt="footer_logo"/>
            <p>SHOPPER</p>
        </div>
        <ul className="footer-links">
            <li>Company</li>
            <li>Products</li>
            <li>Offices</li>
            <li>About</li>
            <li>Contact</li>
        </ul>
        <div className="footer-social-icons">
            <div className="footer-icons-container">
                <img src={instagram_icon} alt="instagram_icon" />
            </div>
            <div className="footer-icons-container">
                <img src={pintester_icon} alt="pintester_icon" />
            </div>
            <div className="footer-icons-container">
                <img src={whatsApp_icon} alt="whatsApp_icon" />
            </div>
        </div>
        <div className="footer-copyright">
            <hr />
            <p>Copyright © 2022-2023 Shopper Company S.L. All rights reserved.</p>
        </div>
    </div>
  )
}

export default Footer