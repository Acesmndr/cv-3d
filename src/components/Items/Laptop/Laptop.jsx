import * as React from 'react';
import './laptop.scss';

const Laptop = ({ currentIndex }) => (
  <div className="laptop">
    <div className="laptop-screen">
      <div className={`laptop-screen__front face ${currentIndex > 4 && 'dribbble'}`}> </div>
      <div className="laptop-screen__back face"> </div>
      <div className="laptop-screen__right face"> </div>
      <div className="laptop-screen__left face"> </div>
      <div className="laptop-screen__top face"> </div>
      <div className="laptop-screen__bottom face"> </div>
    </div>
    <div className="laptop-base">
      <div className="laptop-base__front face"> </div>
      <div className="laptop-base__back face"> </div>
      <div className="laptop-base__right face"> </div>
      <div className="laptop-base__left face"> </div>
      <div className="laptop-base__top face"> </div>
      <div className="laptop-base__bottom face"> </div>
    </div>
  </div>
);

export default Laptop;