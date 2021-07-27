import React from "react";
import styled from "styled-components";
import { vres } from "../../mixin";

export const FrontFace = styled.div`
  position: absolute;
  width: ${(props) => vres(props.width)};
  height: ${(props) => vres(props.height)};
  transform-origin: bottom left;
  transform: rotateX(-90deg)
    translateZ(${(props) => vres(-(props.height - (props.depth * 2)))});
  ${(props) => props.styles}
`;

export const BackFace = styled.div`
  position: absolute;
  width: ${(props) => vres(props.width)};
  height: ${(props) => vres(props.height)};
  transform-origin: top left;
  transform: rotateX(-90deg) rotateY(180deg)
    translateX(${(props) => vres(-props.width)})
    translateY(${(props) => vres(-props.height)});
  ${(props) => props.styles}
`;

export const RightFace = styled.div`
  position: absolute;
  width: ${(props) => vres(props.depth * 2)};
  height: ${(props) => vres(props.height)};
  transform-origin: top left;
  transform: rotateY(90deg) rotateZ(-90deg)
    translateZ(${(props) => vres(props.width)})
    translateX(${(props) => vres(-props.depth * 2)})
    translateY(${(props) => vres(-props.height)});
  ${(props) => props.styles}
`;

export const LeftFace = styled.div`
  position: absolute;
  width: ${(props) => vres(props.depth * 2)};
  height: ${(props) => vres(props.height)};
  transform-origin: top left;
  transform: rotateY(-90deg) rotateZ(90deg)
    translateY(${(props) => vres(-props.height)});
  ${(props) => props.styles}
`;

export const TopFace = styled.div`
  position: absolute;
  width: ${(props) => vres(props.width)};
  height: ${(props) => vres(props.depth * 2)};
  transform-origin: top left;
  transform: translateZ(${(props) => vres(props.height)});
  ${(props) => props.styles}
`;

export const BottomFace = styled.div`
  position: absolute;
  width: ${(props) => vres(props.width)};
  height: ${(props) => vres(props.depth * 2)};
  transform-origin: top left;
  transform: rotateY(180deg) translateX(${(props) => vres(-props.width)});
  ${(props) => props.styles}
`;

export const CubeTemplate = () => styled.div`
  position: absolute;
`;
