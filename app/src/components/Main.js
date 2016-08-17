import React from 'react';
import { Link } from 'react-router';
import AppBar from 'react-toolbox/lib/app_bar';

const Main = ( props ) => {

  // let pp = places.slice(0)
console.log(props);
  return (
    <div>
    <AppBar fixed flat>
        <Link to="/">Merendero</Link>
    </AppBar>
    {props.lunches}

    {/* We use cloneElement here so we can auto pass down props */}
    {props.children}

    </div>
  );
};

export default Main;
