import React from 'react';
import AppBar from 'material-ui/AppBar';

const Main = ( props ) => {

  // let pp = places.slice(0)

  return (
    <div>
    <AppBar
       title="Il Merendero"
       iconClassNameRight="muidocs-icon-navigation-expand-more"
     />
     {/* We use cloneElement here so we can auto pass down props */}
     { React.cloneElement(props.children, props) }

    </div>
  );
};

export default Main;
