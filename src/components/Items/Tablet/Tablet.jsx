import * as React from 'react';
import './tablet.scss';

const Tablet = () => (
  <div class="tablet">
    <div class="tablet__front face"></div>
    <div class="tablet__back face"></div>
    <div class="tablet__right face"></div>
    <div class="tablet__left face"></div>
    <div class="tablet__top face"><a className="tablet-link" href="https://medium.com/@acesmndr" referrerPolicy="no-referrer no-follow">Medium</a></div>
    <div class="tablet__bottom face"></div>
  </div>
);

export default Tablet;