import React from 'react';
import './index.css';
import option1 from '../../assest/icons8-apple-pay.svg';
import option2 from '../../assest/icons8-google-pay-india.svg';
import option3 from '../../assest/icons8-mastercard.svg';
import option4 from '../../assest/icons8-visa.svg';
// import sendicon from '../../assest/send-icon.png';

function Footer() {
  return (
    <div className="footer">
      <div className="row">
        <div className="footer-col-1">
          <h4>CORPORATE INFO</h4>
          <ul>
            <li>Careers</li>
            <li>B2B</li>
            <li>Privacy Policy</li>
            <li>Terms & Condition</li>
            <li>Cookies</li>
          </ul>
        </div>
        <div className="footer-col-2">
          <h4>CUSTOMER SERVICE</h4>
          <ul>
            <li>FaQ</li>
            <li>Contact Us</li>
            <li>Sizing Charts</li>
          </ul>
        </div>
        <div className="footer-col-3">
          <h4>FOLLOW VANS:</h4>
          <ul>
            <i className="fab fa-twitter" />
            <i className="fab fa-facebook" />
            <i className="fab fa-youtube" />
            <i className="fab fa-whatsapp" />
          </ul>
        </div>
        <div className="footer-col-4">
          <h4>SIGN UP TO VANS NEWSLETTER:</h4>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut, minima!</p>
          <form>
            <input type="email" placeholder="Enter Your Email Address" required />
            <button type="submit">
              <i className="fas fa-paper-plane fa-2x" />
            </button>
          </form>
        </div>
      </div>
      <hr />
      <div className="copyright">
        <p>Developer:syedburhanali555@gmail.com</p>
        <div>
          <img src={option1} alt="" className="icon" />
          <img src={option2} alt="" />
          <img src={option3} alt="" />
          <img src={option4} alt="" />
        </div>
      </div>
    </div>
  );
}

export default Footer;
