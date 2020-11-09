import * as React from 'react';
import './keys.scss';

const Keys = ({ incrementKeyCount, decrementKeyCount, keyCount }) => {
  return (
    <>
      <div className={`keys key-left ${keyCount === 0 && 'hide-key'}`} onClick={decrementKeyCount}>&larr;</div>
      <div className={`keys key-right ${keyCount === 14 && 'hide-key'}`} onClick={incrementKeyCount}>&rarr;</div>
    </>
  );
};

export default Keys;
