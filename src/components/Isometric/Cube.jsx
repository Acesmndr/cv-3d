import React from "react";
import styled from "styled-components";

export const FrontFace = styled.div`
  position: absolute;
  width: ${(props) => props.width}vw;
  height: ${(props) => props.height}vw;
  transform-origin: bottom left;
  transform: rotateX(-90deg)
    translateZ(${(props) => -(props.height - (props.depth * 2))}vw);
  ${(props) => props.styles}
`;

export const BackFace = styled.div`
  position: absolute;
  width: ${(props) => props.width}vw;
  height: ${(props) => props.height}vw;
  transform-origin: top left;
  transform: rotateX(-90deg) rotateY(180deg)
    translateX(${(props) => -props.width}vw)
    translateY(${(props) => -props.height}vw);
  ${(props) => props.styles}
`;

export const RightFace = styled.div`
  position: absolute;
  width: ${(props) => props.depth * 2}vw;
  height: ${(props) => props.height}vw;
  transform-origin: top left;
  transform: rotateY(90deg) rotateZ(-90deg)
    translateZ(${(props) => props.width}vw)
    translateX(${(props) => -props.depth * 2}vw)
    translateY(${(props) => -props.height}vw);
  ${(props) => props.styles}
`;

export const LeftFace = styled.div`
  position: absolute;
  width: ${(props) => props.depth * 2}vw;
  height: ${(props) => props.height}vw;
  transform-origin: top left;
  transform: rotateY(-90deg) rotateZ(90deg)
    translateY(${(props) => -props.height}vw);
  ${(props) => props.styles}
`;

export const TopFace = styled.div`
  position: absolute;
  width: ${(props) => props.width}vw;
  height: ${(props) => props.depth * 2}vw;
  transform-origin: top left;
  transform: translateZ(${(props) => props.height}vw);
  ${(props) => props.styles}
`;

export const BottomFace = styled.div`
  position: absolute;
  width: ${(props) => props.width}vw;
  height: ${(props) => props.depth * 2}vw;
  transform-origin: top left;
  transform: rotateY(180deg) translateX(${(props) => -props.width}vw);
  ${(props) => props.styles}
`;

export const CubeTemplate = () => styled.div`
  position: absolute;
`;
