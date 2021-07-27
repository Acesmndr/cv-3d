import * as React from "react";
import styled, { css } from "styled-components";
import { cprops, vres } from "../../../mixin";
import WoodBg from "../../../images/wood-rotated.png";
import {
  white1,
  white2,
  black1,
  black2,
  black3,
  neon2,
  neon1,
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
    background-image: url(${WoodBg});
    background-color: #2b0d03;
    background-size: 32px;
  `,
  back: css``,
  right: css`
    background-image: url(${WoodBg});
    background-color: #2b0d03;
    background-size: 32px;
  `,
  left: css`
    background-image: url(${WoodBg});
    background-color: #2b0d03;
    background-size: 32px;
  `,
  top: css`
    background-image: url(${WoodBg});
    background-color: #2b0d03;
    background-size: 32px;
    &::before {
      content: "";
      position: absolute;
      width: 100%;
      height: 100%;
      background-image: linear-gradient(
        to bottom,
        rgba(${neon1}, 0.75),
        transparent
      );
    }
  `,
  bottom: css`
    background-image: url(${WoodBg});
    background-color: #2b0d03;
    background-size: 32px;
  `,
};

const CubeProps = cprops(8.9, 0.25, 0.74);

const Cube = styled.div`
  position: absolute;
  left: ${vres(17)};
  top: ${vres(1)};
  width: ${vres(9)};
  height: ${vres(0.5)};
  transform: translateZ(${vres(5)});
`;

const Shelf = () => (
  <Cube>
    <FrontFace {...CubeProps} styles={style.front} />
    <BackFace {...CubeProps} styles={style.back} />
    <RightFace {...CubeProps} styles={style.right} />
    <LeftFace {...CubeProps} styles={style.left} />
    <TopFace {...CubeProps} styles={style.top} />
    <BottomFace {...CubeProps} styles={style.bottom} />
  </Cube>
);

export default Shelf;
