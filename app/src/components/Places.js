import React from 'react';


const Places = ({ places }) => {

console.log(places);

  // places = ['mario', 'pippo'];
  return {

    render() {
      return (<div>

        <h1>Places</h1>

        {places.map((place, i) => <div key={i}>{place}</div>) }

      </div>);
    },
  };

};

export default Places;
