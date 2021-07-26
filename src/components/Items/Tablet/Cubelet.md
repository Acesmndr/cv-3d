import * as React from "react";
import styled, { css } from "styled-components";
import { cprops, vres } from "../../../mixin";
import {
  BackFace,
  BottomFace,
  FrontFace,
  LeftFace,
  RightFace,
  TopFace,
} from "../../Isometric/Cube";

const style = {
  front: css``,
  back: css``,
  right: css``,
  left: css``,
  top: css``,
  bottom: css``,
};

const CubeProps = cprops(3, 0.1, 1);

const Cube = styled.div`
  position: absolute;
  left: ${vres()};
  top: ${vres()};
  width: ${vres()};
  height: ${vres()};
  transform: ;
`;

const Component = () => (
  <Cube>
    <FrontFace {...CubeProps} styles={style.front} />
    <BackFace {...CubeProps} styles={style.back} />
    <RightFace {...CubeProps} styles={style.right} />
    <LeftFace {...CubeProps} styles={style.left} />
    <TopFace {...CubeProps} styles={style.top} />
    <BottomFace {...CubeProps} styles={style.bottom} />
  </Cube>
);

export default Component;
