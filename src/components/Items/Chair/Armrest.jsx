import * as React from "react";
import styled, { css } from "styled-components";
import { cprops, vres } from "../../../mixin";
import {
  white1,
  white2,
  black1,
  black2,
  black3,
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
    background-image: linear-gradient(to bottom, ${black2}, ${black3});
  `,
  back: css`
    background-image: linear-gradient(
      to bottom,
      ${black3},
      darken(${black3}, 20)
    );
  `,
  right: css`
    background-color: ${black3};
  `,
  left: css`
    background-image: linear-gradient(to bottom, ${black2}, ${black3});
  `,
  top: css`
    background-image: linear-gradient(to right, ${black1}, ${black3});
    border-bottom: ${vres(0.1)} solid rgba(${white1}, 0.5);

    &::before {
      content: "";
      position: absolute;
      width: 100%;
      height: 100%;
      background-image: linear-gradient(
        to right,
        rgba(${neon2}, 0.75),
        transparent
      );
    }
  `,
  bottom: css`
    background-color: ${black3};
  `,
};

const CubeProps = cprops(0.35, 2, 0.75);

const Cube = styled.div`
  position: absolute;
  left: ${(props) => vres(props.left ? 4 : -0.25)};
  top: ${vres(2.5)};
  width: ${vres(6)};
  height: ${vres(1)};
  transform: rotateX(-5deg) translateZ(${vres(0.125)});
`;

const Armrest = ({ left }) => (
  <Cube left={left}>
    <FrontFace {...CubeProps} styles={style.front} />
    <BackFace {...CubeProps} styles={style.back} />
    <RightFace {...CubeProps} styles={style.right} />
    <LeftFace {...CubeProps} styles={style.left} />
    <TopFace {...CubeProps} styles={style.top} />
    <BottomFace {...CubeProps} styles={style.bottom} />
  </Cube>
);

export default Armrest;
