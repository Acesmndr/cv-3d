import * as React from 'react';
import './subtitles.scss';

const SUBTITLES = [
  '',
  'My name is Aashish Manandhar',
  'I\'m a Software Engineer specializing in frontend application development.',
  'I wrote my first piece of code in 2009 when I was learning javascript',
  'That was when I fell in love with it',
  'I live in Kathmandu',
  'And have been working for a company with a beautiful mission',
  'I like learning and creating new things',
  'and am glad to have accomplished things',
  '',
]
const Subtitles = ({ currentIndex }) => {
  if(!SUBTITLES[currentIndex]) {
    return null;
  }
  return <div className="subtitle">{SUBTITLES[currentIndex]}</div>;
}

export default Subtitles;