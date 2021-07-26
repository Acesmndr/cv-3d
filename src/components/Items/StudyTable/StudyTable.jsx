import * as React from "react";
import styled from "styled-components";
import { vres } from "../../../mixin";
import Surface from "./Surface";
import TableLeg from "./TableFoot";

const Table = styled.div`
  position: absolute;
  left: ${vres(1)};
  top: ${vres(1)};
  width: ${vres(14)};
  height: ${vres(9)};
  transform: translateZ(${vres(0.5)});
  &::after {
    content: '';
    position: absolute;
    width: 100%;
    height: 100%;
    border-radius: 10%;
    background-color: #000;
    filter: blur(${vres(4)});
    transform: translateZ(0);
  }
`;

const StudyTable = () => (
  <Table>
    <Surface />
    <TableLeg />
    <TableLeg />
    <TableLeg />
    <TableLeg />
  </Table>
);

export default StudyTable;
