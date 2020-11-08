import * as React from 'react';
import './subtitles.scss';

const SUBTITLES = [
  'Use arrow keys to navigate the site',
  'My name is Aashish Manandhar',
  'I\'m a Software Engineer specializing in Frontend application development.',
  'I got into programming back in 2009 when I first learnt JavaScript programming',
  'And then and there I fell in love with it.',
  'I\'m from the city of temples, Kathmandu',
  'And for the last ~5 years, I\'ve been learning and growing at CloudFactory helping the company strive towards its mission',
  'Along the way I have gathered a lot of skills to my arsenal.',
  'I\'m good at things but I can\'t say that I have mastered anything yet.',
  'Still I do love crafting new things',
  'And find time to convert ideas into meaningful designs',
  'and perhaps write some technical blog posts.',
  'I\'m a huge DC comics fan who loves tinkering with DIY projects.',
  'Like this one',
  'I\'d be happy to get to know you.',
]
const Subtitles = ({ currentIndex }) => {
  if(!SUBTITLES[currentIndex]) {
    return null;
  }
  return <div className="subtitle">{SUBTITLES[currentIndex]}</div>;
}

export default Subtitles;