import * as React from "react";
import styled, { css } from "styled-components";
import { cprops, vres } from "../../mixin";
import {
  BackFace,
  BottomFace,
  FrontFace,
  LeftFace,
  RightFace,
  TopFace,
} from "../Isometric/Cube";
import { neon2, white1, white2, white3, white4 } from "../../palette";

const style = {
  front: css`
    background: linear-gradient(
      90deg,
      rgba(90, 83, 210, 1) 0%,
      rgba(0, 212, 255, 1) 100%
    );
    &::after {
      content: "";
      position: absolute;
      bottom: 0;
      width: 100%;
      height: ${vres(0.75)};
      background-image: linear-gradient(to bottom, ${white3}, ${neon2});
      border-top: ${vres(0.01)} solid ${white4};
      border-bottom: ${vres(0.1)} solid ${white4};
    }
  `,
  back: css`
    background-color: ${white3};
  `,
  right: css`
    background-image: linear-gradient(
      to bottom,
      ${white4},
      ${white3},
      ${white4}
    );
  `,
  left: css`
    background-color: ${white2};
  `,
  top: css`
    background-color: ${white1};
  `,
  bottom: css`
    background-color: ${white3};
  `,
};

const CubeProps = cprops(26, 20, 0.5);

const Cube = styled.div`
  position: absolute;
  left: ${vres(1)};
  top: ${vres(0)};
  width: ${vres(26)};
  height: ${vres(1)};
  transform: translateZ(${vres(0.5)});
`;

const RightWall = () => (
  <Cube>
    <FrontFace {...CubeProps} styles={style.front} />
    <BackFace {...CubeProps} styles={style.back} />
    <RightFace {...CubeProps} styles={style.right} />
    <LeftFace {...CubeProps} styles={style.left} />
    <TopFace {...CubeProps} styles={style.top} />
    <BottomFace {...CubeProps} styles={style.bottom} />
  </Cube>
);

export default RightWall;
