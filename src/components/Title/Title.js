import React from 'react';

import './Title.css';

const Title = function (props) {
  return (
    <h1 className="title">{props.children}</h1>
  );
};

export default Title;