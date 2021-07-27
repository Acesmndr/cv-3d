import * as React from "react";
import styled, { css } from "styled-components";
import { cprops, vres } from "../../../mixin";
import {
  black1,
  neon2,
} from "../../../palette";

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
    background-repeat: no-repeat;
    background-position: center;
    background-color: black;
    background-size: contain;
    &::before {
      content: "";
      position: absolute;
      top: ${vres(0)};
      left: ${vres(0)};
      width: ${vres(2.99)};
      height: ${vres(4)};
      background-origin: padding-box;
      background-image: linear-gradient(
        to bottom,
        rgba(${neon2}, 0.15),
        rgba(${neon2}, 0.15)
      );
    }
  `,
  back: css`
    background-color: ${black1};
  `,
  right: css`
    background-color: ${black1};
  `,
  left: css`
    background-color: ${black1};
  `,
  top: css`
    background-color: ${black1};
  `,
  bottom: css`
    background-color: ${black1};
  `,
};

const CubeProps = cprops(2.99, 4, 0.1);

const Cube = styled.div`
  position: absolute;
  left: ${props => vres(props.left)};
  top: ${vres(0)};
  width: ${vres(4)};
  height: ${vres(0.8)};
  transform: translateZ(${vres(10)}) translateY(${vres(2)}); ;
`;

const imageStyle = (image, styles) => css`
  ${styles}
  background-image: url(${image});
`;

const Certificate = ({image, fromLeft}) => {
  return (
  <Cube left={fromLeft}>
    <FrontFace {...CubeProps} styles={imageStyle(image, style.front)} />
    <BackFace {...CubeProps} styles={style.back} />
    <RightFace {...CubeProps} styles={style.right} />
    <LeftFace {...CubeProps} styles={style.left} />
    <TopFace {...CubeProps} styles={style.top} />
    <BottomFace {...CubeProps} styles={style.bottom} />
  </Cube>
)};

export default Certificate;
