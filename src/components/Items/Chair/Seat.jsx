import * as React from "react";
import styled, { css } from "styled-components";
import { cprops, vres } from "../../../mixin";
import { white2, black1, black2, black3, neon2} from "../../../palette";
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
    background-image: linear-gradient(to bottom, ${black2}, ${black3});
    &::before {
      content: "";
      position: absolute;
      width: 100%;
      height: 100%;
      background-image: linear-gradient(
        to bottom,
        rgba(${neon2}, 0.1),
        transparent
      );
    }
  `,
  top: css`
    background-image: linear-gradient(to right, ${black1}, ${black2});
    border-top: ${vres(0.1)} solid rgba(${white2}, 0.5);

    &::before {
      content: "";
      position: absolute;
      width: 100%;
      height: 100%;
      background-image: linear-gradient(
        to right,
        rgba(${neon2}, 0.25),
        transparent
      );
    }
  `,
  bottom: css`
    background-color: ${black3};
  `,
};

const CubeProps = cprops(4, 1, 2);

const Cube = styled.div`
  position: absolute;
  left: ${vres(0)};
  top: ${vres(1)};
  width: ${vres(6)};
  height: ${vres(4)};
`;

const Seat = () => (
  <Cube>
    <FrontFace {...CubeProps} styles={style.front} />
    <BackFace {...CubeProps} styles={style.back} />
    <RightFace {...CubeProps} styles={style.right} />
    <LeftFace {...CubeProps} styles={style.left} />
    <TopFace {...CubeProps} styles={style.top} />
    <BottomFace {...CubeProps} styles={style.bottom} />
  </Cube>
);

export default Seat;
