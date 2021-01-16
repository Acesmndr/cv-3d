import * as React from 'react';
import './subtitles.scss';

const SUBTITLES = [
  'Use arrow keys to navigate the site',
  'My name is Aashish Manandhar',
  'I\'m a Software Engineer specializing in frontend application development.',
  'I got into programming back in 2009 when I first learnt JavaScript',
  'And then and there I fell in love with it.',
  'I\'m from Kathmandu, the city of temples',
  'and for the last five years, I\'ve been learning and growing at CloudFactory.',
  'Along the way I have gathered a lot of skills to my arsenal.',
  'I\'m good at things but I can\'t say that I have mastered anything just yet.',
  'Still, I do love crafting new things',
  'and find time to convert ideas into meaningful designs',
  'and perhaps write some technical blog posts.',
  'My interests include everything ranging from DC comics to doing stupid DIY projects',
  'and I\'m always excited to learn something new',
  'I\'d be happy to get to know you.',
]
const Subtitles = ({ currentIndex, isSafari }) => {
  if(!SUBTITLES[currentIndex]) {
    return null;
  }
  return <div className={`subtitle ${isSafari && 'safari-subtitles'}`}>{SUBTITLES[currentIndex]}</div>;
}

export default Subtitles;