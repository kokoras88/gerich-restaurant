import React from 'react';
import images from "../../constants/images";
import './Chef.css';
import {SubHeading} from "../../components";

const Chef = () => (
  <div className='app__bg app__wrapper section__padding'>


    <div className='app__wrapper_img app__space__wrapper-reverse'>
      <img src={images.chef} alt="chef" />
    </div>

    <div className="app__wrapper_info">
      <SubHeading  title="Chef's Word"/>
      <h1 className="headtext__cormorant">What we Believe In</h1>


      <div className='app__chef-content'>
        <div className="app__chef-content_quote">
          <img src={images.quote} alt="quote" />
          <p className="p__opensans">Lorem ipsum dolor sit amet cooriosam ullam deleniti fuga ut voluptate
          esse autem maiores nihil, repellat totam soluta consequatur provident? Id soluta voluptatem veritatis tenetur? Eaque!</p>
        </div>
        <p className="p__opensans">Lorem ipsum dolor sit amet cooriosam ullam deleniti fuga ut voluptate
          esse autem maiores nihil, repellat totam soluta consequatur provident? Id soluta voluptatem veritatis tenetur? Eaque!</p>
      </div>

    <div className="app__chef-sign">
      <p>KEvin Luo</p>
      <p className='p__opensans'>Chef & Founder</p>
      <img src={images.sign} alt="sign" />
    </div>


    </div>
  </div>
);

export default Chef;
