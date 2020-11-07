import * as React from 'react';
import './identity-card.scss';

const IdentityCard = () => (
  <div class="identity-card">
    <div class="identity-card__front face"> </div>
    <div class="identity-card__back face"> </div>
    <div class="identity-card__right face"> </div>
    <div class="identity-card__left face"> </div>
    <div class="identity-card__top face"> </div>
    <div class="identity-card__bottom face"></div>
  </div>
);

export default IdentityCard;