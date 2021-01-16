import * as React from 'react';
import './identity-card.scss';

const IdentityCard = () => (
  <div className="identity-card">
    <div className="identity-card__front face"> </div>
    <div className="identity-card__back face"> </div>
    <div className="identity-card__right face"> </div>
    <div className="identity-card__left face"> </div>
    <div className="identity-card__top face"> </div>
    <div className="identity-card__bottom face"></div>
  </div>
);

export default IdentityCard;