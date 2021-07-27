import * as React from "react";
import Photo from "./Photo";
import CosplayImg from "../../../images/cosplay.jpg";
import AssociateProducerImg from "../../../images/producer.jpg";
import Plank from "./Plank";
import styled from "styled-components";

const PhotoHolder = styled.div`
  position: relative;
`

const Photos = () => (
  <>
    <Plank top={true} />
    <PhotoHolder>
      <Photo image={CosplayImg} />
      <Photo image={AssociateProducerImg} />
    </PhotoHolder>
  </>
);

export default Photos;
