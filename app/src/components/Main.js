import React from 'react';
import { Link } from 'react-router';
import AppBar from 'react-toolbox/lib/app_bar';

const Main = ( props ) => {

  // let pp = places.slice(0)
console.log(props);
  return (
    <div>
      <AppBar flat>
          <Link to="/">Merendero</Link>
          {/* We use cloneElement here so we can auto pass down props */}
      </AppBar>

      <section>
      {React.cloneElement(props.children, props)}
      </section>

    </div>
  );
};

export default Main;
