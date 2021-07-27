import * as React from "react";
import styled from "styled-components";
import { vres } from "../../../mixin";
import HorizontalFrame from "./HorizontalFrame";
import VerticalFrame from "./VerticalFrame";
import WindowPanel from "./WindowPanel";

const Cube = styled.div`
  position: absolute;
  left: ${vres(1)};
  top: ${vres(3)};
  width: ${vres(0.125)};
  height: ${vres(6)};
  transform: translateZ(${vres(8.5)});
`;

const Window = () => (
  <Cube>
    <HorizontalFrame left={true} />
    <HorizontalFrame />
    <VerticalFrame />
    <VerticalFrame top={true} />
    <WindowPanel />
  </Cube>
);

export default Window;
