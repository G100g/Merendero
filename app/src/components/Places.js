import React from 'react';
import { List, ListItem, ListSubHeader, ListDivider, ListCheckbox } from 'react-toolbox/lib/list';

const Places = ({ places }) => {

console.log(places);

  let placesArr = [];

  for (let i in places) {
    placesArr.push(places[i].name);
  }

  // places = ['mario', 'pippo'];
  return {

    render() {
      return (<div>

        <h1>Places</h1>

        <List selectable ripple>
          <ListSubHeader caption='Place' />

          {placesArr.map((place, i) => <ListItem
            key={i}
            // avatar='https://dl.dropboxusercontent.com/u/2247264/assets/m.jpg'
            caption={place}
            // legend="Jonathan 'Jon' Osterman"
            // rightIcon='star'
          />) }

        </List>
      </div>);
    },
  };

};

export default Places;
