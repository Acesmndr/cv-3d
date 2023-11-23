import * as React from "react";
import styled, { css } from "styled-components";
import { cprops, vres } from "../../../mixin";
import IDCard from "../../../images/idcard.jpg";
import IDCard3 from "../../../images/idcard3.jpeg";
import {
  white3,
  white2,
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
    background-color: ${white2};
  `,
  back: css`
    background-color: ${white3};
  `,
  right: css`
    background-color: ${white3};
  `,
  left: css`
    background-color: ${white2};
  `,
  top: css`
  background-size: cover;
}`,
  bottom: css`
    background-color: ${white3};
  `,
};

const imageStyle = (hasTravelled, styles) => css`
  ${styles}
  background-image: url("${hasTravelled ? IDCard3 : IDCard}");
`;

const CubeProps = cprops(0.68, 0.012, 0.522);

const Cube = styled.div`
  position: absolute;
  left: ${vres(4)};
  top: ${vres(7)};
  width: ${vres(2)};
  height: ${vres(2.5)};
  transform: translateZ(${vres(7.05)}) rotateZ(-25deg);
`;

const IdentityCard = ({ currentIndex }) => (
  <Cube>
    <FrontFace {...CubeProps} styles={style.front} />
    <BackFace {...CubeProps} styles={style.back} />
    <RightFace {...CubeProps} styles={style.right} />
    <LeftFace {...CubeProps} styles={style.left} />
    <TopFace {...CubeProps} styles={imageStyle(currentIndex > 7, style.top)} />
    <BottomFace {...CubeProps} styles={style.bottom} />
  </Cube>
);

export default IdentityCard;
