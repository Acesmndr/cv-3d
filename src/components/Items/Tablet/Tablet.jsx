import * as React from 'react';
import './tablet.scss';

const Tablet = () => (
  <div className="tablet">
    <div className="tablet__front face"></div>
    <div className="tablet__back face"></div>
    <div className="tablet__right face"></div>
    <div className="tablet__left face"></div>
    <div className="tablet__top face"><a className="tablet-link" href="https://medium.com/@acesmndr" referrerPolicy="no-referrer no-follow">Medium</a></div>
    <div className="tablet__bottom face"></div>
  </div>
);

export default Tablet;