import * as React from 'react';
import './monitor.scss';

const Monitor = ({ currentIndex }) => (
  <div className="monitor">
    <div className={`monitor__front face ${ currentIndex > 4 && 'projects'}`}> </div>
    <div className="monitor__back face"> </div>
    <div className="monitor__right face"> </div>
    <div className="monitor__left face"> </div>
    <div className="monitor__top face"> </div>
    <div className="monitor__bottom face"> </div>
  </div>
);

export default Monitor;