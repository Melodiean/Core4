import React, { useState, useEffect } from 'react';

function Title(props) {
  return (
    <h1>
      {props.greeting}, {props.title}
    </h1>
  );
}

export default Title;
