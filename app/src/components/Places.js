import React from 'react';
import { Link } from 'react-router';
import { List, ListItem, ListSubHeader, ListDivider, ListCheckbox } from 'react-toolbox/lib/list';
import { Button } from 'react-toolbox/lib/button';

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

        <Link to="/places/single">
          <Button icon='add' floating />
        </Link>
      </div>);
    },
  };

};

export default Places;
