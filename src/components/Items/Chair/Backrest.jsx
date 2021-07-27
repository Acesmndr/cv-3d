import * as React from "react";
import styled, { css } from "styled-components";
import { cprops, vres } from "../../../mixin";
import {
  white2,
  black1,
  black2,
  black3,
  black4,
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
    background-color: ${black2};
  `,
  back: css`
    background-image: linear-gradient(
      to bottom,
      ${black3},
      ${black4}
    );
  `,
  right: css`
    background-image: linear-gradient(to bottom, ${black2}, ${black3});
  `,
  left: css`
    background-image: linear-gradient(to bottom, ${black3}, ${black2});
  `,
  top: css`
    background-image: linear-gradient(to right, ${black1}, ${black2});
    border-bottom: ${vres(0.1)} solid rgba(${white2}, 0.5);

    &::before {
      content: "";
      position: absolute;
      width: 100%;
      height: 100%;
      background-image: linear-gradient(
        to right,
        rgba(${neon2}, 0.5),
        transparent
      );
    }
  `,
  bottom: css`
    background-color: ${black3};
  `,
};

const CubeProps = cprops(4, 6.5, 0.125);

const Cube = styled.div`
  position: absolute;
  left: ${vres(0)};
  top: ${vres(4.5)};
  width: ${vres(1)};
  height: ${vres(1)};
  transform-origin: right;
  transform: rotateX(-15deg);
`;

const Backrest = () => (
  <Cube>
    <FrontFace {...CubeProps} styles={style.front} />
    <BackFace {...CubeProps} styles={style.back} />
    <RightFace {...CubeProps} styles={style.right} />
    <LeftFace {...CubeProps} styles={style.left} />
    <TopFace {...CubeProps} styles={style.top} />
    <BottomFace {...CubeProps} styles={style.bottom} />
  </Cube>
);

export default Backrest;
