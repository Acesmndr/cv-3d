import * as React from "react";
import styled, { css } from "styled-components";
import { cprops, vres } from "../../../mixin";
import {
  black1,
  black2,
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
    background-color: ${black2};
  `,
  back: css`
    background-color: ${black3};
  `,
  right: css`
    background-color: ${black3};
  `,
  left: css`
    background-color: ${black3};
  `,
  top: css`
    background-image: linear-gradient(to right, ${black1}, ${black3});
  `,
  bottom: css`
    background-color: ${black3};
  `,
};

const CubeProps = cprops(0.55, 0.35, 2.2);

const Cube = styled.div`
  position: absolute;
  left: ${vres(1.75)};
  top: ${vres(1)};
  width: ${vres(2)};
  height: ${vres(2)};
  transform: ${(props) =>
    props.left
      ? `translateZ(${vres(-4)}) rotateZ(90deg) translateX(${vres(
          2
        )}) translateY(${vres(-0.5)})`
      : `translateZ(${vres(-4)})`};
`;

const Pedestal = ({ left }) => (
  <Cube left={left}>
    <FrontFace {...CubeProps} styles={style.front} />
    <BackFace {...CubeProps} styles={style.back} />
    <RightFace {...CubeProps} styles={style.right} />
    <LeftFace {...CubeProps} styles={style.left} />
    <TopFace {...CubeProps} styles={style.top} />
    <BottomFace {...CubeProps} styles={style.bottom} />
  </Cube>
);

export default Pedestal;
