// src/components/Home/CallToAction.js
import React from 'react';
import './CallToAction.css';

const CallToAction = () => {
  return (
    <section class="alumni-and-cta">
    <div class="alumni-placed">
        <h3>Our Alumni's Placed At</h3>
        <div class="logo-grid">
            <img src="images/google.png" alt="Google"/>
            <img src="images/microsoft.jpg" alt="Microsoft"/>
            <img src="images/amazon.png" alt="Amazon"/>
            <img src="images/apple.png" alt="Apple"/>
            <img src="images/meta.jpg" alt="Meta"/>
            <img src="images/infosys.png" alt="Infosys"/>
            <img src="images/tcs.png" alt="TCS"/>
            <img src="images/wipro.png" alt="Wipro"/>
            <img src="images/hcl.png" alt="HCL"/>
            <img src="images/ibm.jpg" alt="IBM"/>
            <img src="images/ntt-data.png" alt="NTT DATA"/>
            <img src="images/ey.png" alt="EY"/>
            <img src="images/cognizant.png" alt="Cognizant"/>
            <img src="images/capgemini.png" alt="Cap Gemini"/>
            <img src="images/state-street.png" alt="State Street"/>
        </div>
    </div>
    <div class="call-to-action">
        <h3>Ready to Level Up?</h3>
        <p>Join thousands of successful alumni who have transformed their careers with our programs.</p>
        <button class="cta-button">Get Started Now</button>
    </div>
</section>



  );
};

export default CallToAction;
