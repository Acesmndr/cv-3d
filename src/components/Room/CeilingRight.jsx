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
  front: css`background-image: linear-gradient(
    to right,
    ${white4},
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
      rgba(${neon2}, 0.25),
      transparent
    );
  }`,
  back: css`background-color: ${white3};`,
  right: css`background-color: ${white4};`,
  left: css`background-color: ${white2}};`,
  top: css`background-image: linear-gradient(to left, ${white2}}, $white-1);`,
  bottom: css`background-color: ${white3};`,
};

const CubeProps = cprops(25, 0.75, 1);

const Cube = styled.div`
  position: absolute;
  left: ${vres(2)};
  top: ${vres(0)};
  width: ${vres(25)};
  height: ${vres(1)};
  transform: translateZ(${vres(20.5)});
`;

const CeilingRight = () => (
  <Cube>
    <FrontFace {...CubeProps} styles={style.front} />
    <BackFace {...CubeProps} styles={style.back} />
    <RightFace {...CubeProps} styles={style.right} />
    <LeftFace {...CubeProps} styles={style.left} />
    <TopFace {...CubeProps} styles={style.top} />
    <BottomFace {...CubeProps} styles={style.bottom} />
  </Cube>
);

export default CeilingRight;
