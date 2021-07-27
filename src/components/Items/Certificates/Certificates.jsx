import React from 'react';
import ACEExam from '../../../images/ace.jpeg';
import Degree from '../../../images/degree.jpg';
import Ideathon from '../../../images/ideathon.jpg';

import Certificate from './Certificate';

const Certificates = () => <>
  <Certificate fromLeft={16} image={ACEExam} />
  <Certificate fromLeft={19.5} image={Degree} />
  <Certificate fromLeft={23} image={Ideathon} />
</>;

export default Certificates;
