import * as React from "react";
import styled, { css } from "styled-components";
import { cprops, vres } from "../../../mixin";
import {
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
    background-color: ${black3};
  `,
  bottom: css`
    background-color: ${black3};
  `,
};

const CubeProps = cprops(0.15, 0.5, 3.515);

const Cube = styled.div`
  position: absolute;
  left: ${vres(0.01)};
  top: ${vres(-1)};
  width: ${vres(0.5)};
  height: ${vres(6)};
  transform: ${(props) =>
    props.top
      ? `translate3d(${vres(0.05)}, 0, ${vres(7.915)})`
      : `translate3d(${vres(0.05)}, 0, ${vres(-0.48)})`};
`;

const VerticalFrame = ({ top }) => (
  <Cube top={top}>
    <FrontFace {...CubeProps} styles={style.front} />
    <BackFace {...CubeProps} styles={style.back} />
    <RightFace {...CubeProps} styles={style.right} />
    <LeftFace {...CubeProps} styles={style.left} />
    <TopFace {...CubeProps} styles={style.top} />
    <BottomFace {...CubeProps} styles={style.bottom} />
  </Cube>
);

export default VerticalFrame;
