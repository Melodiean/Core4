import React from 'react';

function Title(props) {
  return (
    <h1 className="hh">
      {props.greeting}, {props.title}
    </h1>
  );
}

export default Title;
