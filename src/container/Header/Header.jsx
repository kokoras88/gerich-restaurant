import React from 'react';
import images from "../../constants/images";
import './Header.css';
import SubHeading from '../../components/SubHeading/SubHeading';

const Header = () => (
  <div className='app__header app__wrapper section__padding' id="home">

    <div className="app__wrapper_info">
        <SubHeading title='Chase the new flavor' />
        <h1 className='app__header-h1'>The key to Fine Dinning</h1>
        <p className='p__opensans' style={{margin: '2rem 0'}}>Sit tellus lobortis sed senectus vivamus moliestie. Condimentum volutpat morbi facillisis quam scelerisque sapien. Et, penatibus aliquam amet tellus</p>
        <button type='button' className='custom__button'>Explore MEnu</button>
      </div>

    <div className='app__wrapper_img'>
      <img src={images.welcome} alt="welcome" />
    </div>

  </div>
);

export default Header;
