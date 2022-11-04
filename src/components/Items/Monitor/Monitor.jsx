import * as React from "react";
import styled, { css } from "styled-components";
import { cprops, vres } from "../../../mixin";
import { black3 } from "../../../palette";
import HiImage from "../../../images/hi.jpg";
import ProjectsImage from "../../../images/projects.jpg";

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
    background-color: black;
    background-size: cover;
    border: ${vres(0.125)} solid ${black3};
    &::before {
      content: "";
      position: absolute;
      width: 100%;
      height: 100%;
      background-size: contain;
      background-repeat: no-repeat;
      background-position: bottom;
      filter: drop-shadow(0px 0px 1px #212121);
    }
  `,
  back: css`
    display: flex;
    justify-content: center;
    align-items: center;
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
const CubeProps = cprops(8, 5, 0.25);

const Cube = styled.div`
  position: absolute;
  left: ${vres(4)};
  top: ${vres(1.5)};
  width: ${vres(8)};
  height: ${vres(0.5)};
  transform: translateZ(${vres(9)});
`;

const frontStyle = (currentIndex, styles) => css`
  ${styles}
  background-image: url(${currentIndex > 7 ? ProjectsImage : HiImage});
`;

const Monitor = ({ currentIndex }) => (
  <Cube>
    <FrontFace {...CubeProps} styles={frontStyle(currentIndex, style.front)} />
    <BackFace {...CubeProps} styles={style.back} />
    <RightFace {...CubeProps} styles={style.right} />
    <LeftFace {...CubeProps} styles={style.left} />
    <TopFace {...CubeProps} styles={style.top} />
    <BottomFace {...CubeProps} styles={style.bottom} />
  </Cube>
);

export default Monitor;
