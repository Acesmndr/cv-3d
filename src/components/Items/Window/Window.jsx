import * as React from 'react';
import './window.scss';

const Window = () => (
  <div className="window">
    <div className="window-panel">
      <div className="window-panel__front face"> </div>
      <div className="window-panel__back face"> </div>
      <div className="window-panel__right face"> </div>
      <div className="window-panel__left face"> </div>
      <div className="window-panel__top face"> </div>
      <div className="window-panel__bottom face"> </div>
    </div>
    <div className="frame-left">
      <div className="frame-left__front face"> </div>
      <div className="frame-left__back face"> </div>
      <div className="frame-left__right face"> </div>
      <div className="frame-left__left face"> </div>
      <div className="frame-left__top face"> </div>
      <div className="frame-left__bottom face"> </div>
    </div>
    <div className="frame-right">
      <div className="frame-right__front face"> </div>
      <div className="frame-right__back face"> </div>
      <div className="frame-right__right face"> </div>
      <div className="frame-right__left face"> </div>
      <div className="frame-right__top face"> </div>
      <div className="frame-right__bottom face"> </div>
    </div>
    <div className="frame-top">
      <div className="frame-top__front face"> </div>
      <div className="frame-top__back face"> </div>
      <div className="frame-top__right face"> </div>
      <div className="frame-top__left face"> </div>
      <div className="frame-top__top face"> </div>
      <div className="frame-top__bottom face"> </div>
    </div>
    <div className="frame-bottom">
      <div className="frame-bottom__front face"> </div>
      <div className="frame-bottom__back face"> </div>
      <div className="frame-bottom__right face"> </div>
      <div className="frame-bottom__left face"> </div>
      <div className="frame-bottom__top face"> </div>
      <div className="frame-bottom__bottom face"> </div>
    </div>
  </div>
);

export default Window;