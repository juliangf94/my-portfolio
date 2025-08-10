import React from 'react';
import { BsInstagram, BsLinkedin } from 'react-icons/bs';
import { FaFacebookF } from 'react-icons/fa';

const SocialMedia = () => (
  <div className="app__social">
    <div>
      <a href="https://www.linkedin.com/in/juliangf94/"><BsLinkedin /></a>
    </div>
    <div>
      <a href="https://www.facebook.com/julian.gonzalez.fernandez.22/"><FaFacebookF /></a>
    </div>
    <div>
      <a href="https://www.instagram.com/chuliangf94/"><BsInstagram /></a>
    </div>
  </div>
);

export default SocialMedia;