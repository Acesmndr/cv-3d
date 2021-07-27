import * as React from "react";
import styled, { css } from "styled-components";
import { cprops, vres } from "../../../mixin";
import KeyboardLayout from "../../../images/keyboard.jpg";
import {
  black3,
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
    background-color: #d7d7d7;
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
    background-image: url(${KeyboardLayout});
    background-size: cover;
    background-size: contain;
    background-position-y: bottom;
    background-repeat: no-repeat;
    background-color: #d7d7d7;
  `,
  bottom: css`
    background-color: ${black3};
  `,
};

const CubeProps = cprops(2.92, 0.075, 0.972);

const Cube = styled.div`
  position: absolute;
  left: ${vres(6)};
  top: ${vres(4.506)};
  width: ${vres(2)};
  height: ${vres(2.5)};
  transform: translateZ(${vres(7.05)}); ;
`;

const LaptopBase = () => (
  <Cube>
    <FrontFace {...CubeProps} styles={style.front} />
    <BackFace {...CubeProps} styles={style.back} />
    <RightFace {...CubeProps} styles={style.right} />
    <LeftFace {...CubeProps} styles={style.left} />
    <TopFace {...CubeProps} styles={style.top} />
    <BottomFace {...CubeProps} styles={style.bottom} />
  </Cube>
);

export default LaptopBase;
