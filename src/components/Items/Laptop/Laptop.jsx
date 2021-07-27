import * as React from 'react';
import './laptop.scss';
import LaptopBase from './LaptopBase';
import LaptopScreen from './LaptopScreen';

const Laptop = ({ currentIndex }) => (
  <>
    <LaptopScreen isDribbble={currentIndex > 7} />
    <LaptopBase />
  </>
);

export default Laptop;
