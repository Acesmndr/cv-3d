import * as React from "react";
import styled, { css } from "styled-components";
import { cprops, vres } from "../../mixin";
import { neon1, neon2, white1, white2, white3, white4 } from "../../palette";
import {
  BackFace,
  BottomFace,
  FrontFace,
  LeftFace,
  RightFace,
  TopFace,
} from "../Isometric/Cube";

const style = {
  front: css`
    background-image: linear-gradient(to bottom, ${white3}, ${white2});
  `,
  back: css`
    background-color: ${white3};
  `,
  right: css`
    background-image: linear-gradient(to bottom, #8d4e0f, #dbaf8f 20%, #b43636);
    &::before {
      content: "";
      position: absolute;
      bottom: 0;
      width: 100%;
      height: ${vres(0.75)};
      background-image: linear-gradient(to bottom, ${white2}, ${neon2});
      border-top: vres(0.1) solid ${white4};
      border-bottom: vres(0.1) solid ${white4};
    }
    &::after {
      content: "";
      position: absolute;
      width: 100%;
      height: 100%;
      background-image: linear-gradient(
        to bottom,
        rgba(${neon1}, 0.35),
        transparent 30%,
        transparent 70%,
        rgba(${neon2}, 0.35)
      );
    }
  `,
  left: css`
    background-color: ${white1};
  `,
  top: css`
    background-color: ${white1};
  `,
  bottom: css`
    background-color: ${white3};
  `,
};

const CubeProps = cprops(1, 20, 13.5);

const Cube = styled.div`
  position: absolute;
  left: ${vres(0)};
  top: ${vres(0)};
  width: ${vres(1)};
  height: ${vres(27)};
  transform: translateZ(${vres(0.5)});
`;

const LeftWall = () => (
  <Cube>
    <FrontFace {...CubeProps} styles={style.front} />
    <BackFace {...CubeProps} styles={style.back} />
    <RightFace {...CubeProps} styles={style.right} />
    <LeftFace {...CubeProps} styles={style.left} />
    <TopFace {...CubeProps} styles={style.top} />
    <BottomFace {...CubeProps} styles={style.bottom} />
  </Cube>
);

export default LeftWall;
