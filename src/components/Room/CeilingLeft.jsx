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
import { neon1, white1, white2, white3 } from "../../palette";

const style = {
  front: css`background-color: ${white3}`,
  back: css`background-color: ${white3}`,
  right: css`background-image: linear-gradient(
    to right,
    ${white3},
    ${white2},
    ${white3}
  );

  &::before {
    content: "";
    position: absolute;
    width: 100%;
    height: 100%;
    bottom: 0;
    border-bottom: ${vres(0.1)} solid rgba(${white1}, 0.75);
    background-image: linear-gradient(
      to top,
      rgba(${neon1}, 0.35),
      transparent
    );
  }`,
  left: css`background-color: ${white1}`,
  top: css`background-image: linear-gradient(to top, ${white2}, ${white1});`,
  bottom: css`background-color: ${white3}`,
};

const CubeProps = cprops(2, 0.75, 13.5);

const Cube = styled.div`
  position: absolute;
  left: ${vres(0)};
  top: ${vres(0)};
  width: ${vres(2)};
  height: ${vres(27)};
  transform: translateZ(${vres(20.5)});
`;

const CeilingLeft = () => (
  <Cube>
    <FrontFace {...CubeProps} styles={style.front} />
    <BackFace {...CubeProps} styles={style.back} />
    <RightFace {...CubeProps} styles={style.right} />
    <LeftFace {...CubeProps} styles={style.left} />
    <TopFace {...CubeProps} styles={style.top} />
    <BottomFace {...CubeProps} styles={style.bottom} />
  </Cube>
);

export default CeilingLeft;
