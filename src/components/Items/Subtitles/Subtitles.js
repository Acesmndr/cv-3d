import * as React from "react";
import styled from "styled-components";
import { isChrome, vres } from "../../../mixin";

const Subtitle = styled.div`
  position: fixed;
  background: black;
  padding: 12px;
  font-size: 3vh;
  color: white;
  opacity: 0.75;
  min-width: ${isChrome ? "50vw" : vres(12.5)};
  left: ${isChrome ? "50%" : "75%"};
  transform: ${isChrome ? "translateX(-50%)" : `translateZ(${vres(25)})`};
  margin-left: auto;
  margin-right: auto;
  text-align: center;
  border-radius: 2px;
  bottom: ${props => props.isSafari ? '10vh' : '-15vh'};
`;

const SUBTITLES = [
  "Use arrow keys to navigate the site",
  "My name is Aashish Manandhar",
  "I'm a Software Engineer specializing in frontend application development.",
  "I got into programming back in 2009 when I first learnt JavaScript",
  "And then and there I fell in love with it.",
  "I'm from Kathmandu, the city of temples",
  "and for the last five years, I've been learning and growing at CloudFactory.",
  "Along the way I have gathered a lot of skills to my arsenal.",
  "I'm good at things but I can't say that I have mastered anything just yet.",
  "Still, I do love crafting new things",
  "and find time to convert ideas into meaningful designs",
  "and perhaps write some technical blog posts.",
  "My interests include everything ranging from DC comics to doing stupid DIY projects",
  "and I'm always excited to learn something new",
  "I'd be happy to get to know you.",
];
const Subtitles = ({ currentIndex, isSafari }) => {
  console.log(isSafari, 'hello');
  if (!SUBTITLES[currentIndex]) {
    return null;
  }
  return (
    <Subtitle isSafari={isSafari}>
      {SUBTITLES[currentIndex]}
    </Subtitle>
  );
};

export default Subtitles;
