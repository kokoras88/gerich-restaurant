import React from 'react';
import  SubHeading  from "../SubHeading/SubHeading";
import './Newsletter.css';

const Newsletter = () => (
  <div className='app__newsletter'>
    <div className="app__newsletter-heading">
      <SubHeading title="News Letter"/>
      <div className="headtext__cormorant">Subscribe To Our Newsletter</div>
      <p className='p__opensans'>And never Miss Latest Updates</p>
    </div>
    <div className="app__newsletter-input flex__center" >
      <input type="email"  placeholder='Enter your email address'/>
      <button className='custom__button'>Subscribe</button>
    </div>
  </div>
);

export default Newsletter;
