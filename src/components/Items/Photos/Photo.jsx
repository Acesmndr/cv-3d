import * as React from "react";
import styled, { css } from "styled-components";
import { cprops, vres } from "../../../mixin";
import { white3 } from "../../../palette";
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
    background-color: black;
  `,
  back: css`
    background-color: black;
  `,
  right: css`
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: ${white3};
    border: ${vres(0.15)} solid #212121;
    &::before {
      content: "";
      position: absolute;
      width: 100%;
      height: 100%;
      background-size: contain;
      background-repeat: no-repeat;
      background-position-x: center;
      border: ${vres(0.1)} solid white;
    }
  `,
  left: css`
    background-color: black;
  `,
  top: css`
    background-color: black;
  `,
  bottom: css`
    background-color: black;
  `,
};

const imageStyle = (image, styles) => css`
  ${styles}
  &::before {
    background-image: url(${image});
  }
`;

const CubeProps = cprops(0.125, 1.11, 1.11);

const Cube = styled.div`
  position: absolute;
  left: ${vres(0.125)};
  top: ${vres(2)};
  width: ${vres(2)};
  height: ${vres(11)};
  &:nth-of-type(1) {
    top: ${vres(16)};
    transform: translateZ(${vres(9.26)}) translateX(${vres(1.25)}) rotateZ(5deg);
  }
  &:nth-of-type(2) {
    top: ${vres(20)};
    transform: translateZ(${vres(9.26)}) translateX(${vres(2.5)}) rotateZ(-15deg);
  }
`;

const Photo = ({ image }) => (
  <Cube>
    <FrontFace {...CubeProps} styles={style.front} />
    <BackFace {...CubeProps} styles={style.back} />
    <RightFace {...CubeProps} styles={imageStyle(image, style.right)} />
    <LeftFace {...CubeProps} styles={style.left} />
    <TopFace {...CubeProps} styles={style.top} />
    <BottomFace {...CubeProps} styles={style.bottom} />
  </Cube>
);

export default Photo;
