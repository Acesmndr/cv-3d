import React from "react";
import styled from "styled-components";
import { isChrome } from "../../mixin";
import CeilingLeft from "./CeilingLeft";
import CeilingRight from "./CeilingRight";
import Floor from "./Floor";
import LeftWall from "./LeftWall";
import RightWall from "./RightWall";

const Cube = styled.div`
  height: ${isChrome ? 28 : 20}vw;
  width: ${isChrome ? 28 : 20}vw;
`;

export const Room = ({ children, ...otherProps}) => {
  return (
    <Cube {...otherProps}>
      <CeilingLeft />
      <CeilingRight />
      <LeftWall />
      <RightWall />
      <Floor />
      {children}
    </Cube>
  );
};
