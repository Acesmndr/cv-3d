import * as React from "react";
import styled from "styled-components";
import { vres } from "../../../mixin";
import { black3 } from "../../../palette";
import Armrest from "./Armrest";
import Backrest from "./Backrest";
import Pedestal from "./Pedestal";
import Seat from "./Seat";
import Stand from "./Stand";

const Cube = styled.div`
  position: absolute;
  left: ${vres(7)};
  top: ${vres(9)};
  width: ${vres(3)};
  height: ${vres(6)};

  transform: translateZ(${vres(4.25)}) rotateZ(-5deg);

  &::before {
    content: "";
    position: absolute;
    top: 0%;
    left: 0%;
    width: 160%;
    height: 80%;
    background-color: rgba(${black3}, 0.85);
    filter: blur(${vres(0.75)});
    transform: translateZ(${vres(-3.75)});
  }
`;

const Chair = ({ currentIndex }) => {
  if ([2, 3, 4, 5, 9, 10].indexOf(currentIndex) >= 0) {
    return null;
  }
  return <Cube>
    <Seat />
    <Armrest left={true}/>
    <Armrest />
    <Backrest />
    <Pedestal left={true} />
    <Pedestal />
    <Stand />
  </Cube>;
};

export default Chair;
