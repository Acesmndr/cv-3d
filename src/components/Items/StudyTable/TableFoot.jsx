import * as React from "react";
import styled, { css } from "styled-components";
import { cprops, vres } from "../../../mixin";
import { black1, black2, black3 } from "../../../palette";
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
    background-color: ${black3};
  `,
  back: css`
    background-color: ${black3};
  `,
  right: css`
    background-color: darken(${black3}, 20);
  `,
  left: css`
    background-color: ${black2};
  `,
  top: css`
    background-color: ${black1};
  `,
  bottom: css`
    background-color: ${black3};
    &::before {
      content: "";
      position: absolute;
      width: 600%;
      height: 200%;
      top: 0;
      right: 0;
      border-radius: 10%;
      transform: translateZ(${vres(-0.1)});
      background-color: rgba(darken(${black3}, 30), 0.75);
      filter: blur(${vres(0.35)});
    }
  `,
};

const CubeProps = cprops(0.25, 6, 0.125);

const Cube = styled.div`
  position: absolute;
  width: ${vres(0.25)};
  height: ${vres(0.25)};
  &:nth-of-type(1) {
    left: ${vres(0.5)};
    top: ${vres(0.5)};
  }
  &:nth-of-type(2) {
    right: ${vres(0.5)};
    top: ${vres(0.5)};
  }
  &:nth-of-type(3) {
    left: ${vres(0.5)};
    bottom: ${vres(0.5)};
  }
  &:nth-of-type(4) {
    right: ${vres(0.5)};
    bottom: ${vres(0.5)};
  }
`;

const TableLeg = () => (
  <Cube>
    <FrontFace {...CubeProps} styles={style.front} />
    <BackFace {...CubeProps} styles={style.back} />
    <RightFace {...CubeProps} styles={style.right} />
    <LeftFace {...CubeProps} styles={style.left} />
    <TopFace {...CubeProps} styles={style.top} />
    <BottomFace {...CubeProps} styles={style.bottom} />
  </Cube>
);

export default TableLeg;
