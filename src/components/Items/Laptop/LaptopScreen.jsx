import * as React from "react";
import styled, { css } from "styled-components";
import { cprops, vres } from "../../../mixin";
import DribbbleDesigns from "../../../images/dribbble.jpg";
import CodeGif from "../../../images/firstcodeloop.gif";

import {
  BackFace,
  BottomFace,
  FrontFace,
  LeftFace,
  RightFace,
  TopFace,
} from "../../Isometric/Cube";

const style = {
  front: css`
    &::before {
      content: "";
      position: absolute;
      width: 100%;
      height: 100%;
      background-size: cover;
      background-repeat: no-repeat;
      background-position: bottom;
    }
    border: ${vres(0.075)} solid black;
    a {
      opacity: 0;
      display: block;
      width: 100%;
      height: 100%;
    }
  `,
  back: css`
    background-color: #d7d7d7;
  `,
  right: css`
    background-color: #d7d7d7;
  `,
  left: css`
    background-color: #d7d7d7;
  `,
  top: css`
    background-color: #d7d7d7;
  `,
  bottom: css`
    background-color: #d7d7d7;
  `,
};

const CubeProps = cprops(2.92, 2, 0.025);

const Cube = styled.div`
  position: absolute;
  left: ${vres(5.995)};
  top: ${vres(4.476)};
  width: ${vres(2)};
  height: ${vres(2.5)};
  transform: translateZ(${vres(7.25)}) translateY(${vres(0.0125)})
    rotateX(10deg);
`;

const imageStyle = (isDribbble, styles) => css`
  ${styles}
  &::before {
    cursor: ${isDribbble ? "pointer" : "default"};
    background-image: url("${isDribbble ? DribbbleDesigns : CodeGif}");
  }
`;

const LaptopScreen = ({ isDribbble }) => (
  <Cube>
    <FrontFace {...CubeProps} styles={imageStyle(isDribbble, style.front)} />
    <BackFace {...CubeProps} styles={style.back} />
    <RightFace {...CubeProps} styles={style.right} />
    <LeftFace {...CubeProps} styles={style.left} />
    <TopFace {...CubeProps} styles={style.top} />
    <BottomFace {...CubeProps} styles={style.bottom} />
  </Cube>
);

export default LaptopScreen;
