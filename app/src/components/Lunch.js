import React, { Component } from 'react';

import { List, ListItem, ListSubHeader, ListDivider, ListCheckbox } from 'react-toolbox/lib/list';
import Autocomplete from 'react-toolbox/lib/autocomplete';
import { Button } from 'react-toolbox/lib/button';
import { Link } from 'react-router';

// const Lunch = ({ users, lunches, addUserToLunch }) => {
const dataSourceConfig = {
  text: 'name',
  value: 'id',
};

class Lunch extends Component {

  state = { selectedUsers : this.props.lunches }

  onSelectUser(chosenRequest) {
    console.log(chosenRequest);
    this.props.addUserToLunch(chosenRequest);

    this.state.selectedUsers = chosenRequest;
  }

  parseUsers(users) {

      let usersObject = Object.keys(users).reduce((data, key) => {

            let user = users[key];
            data[key] = user.name;

            return data;

        }, {});

        console.log(usersObject);

      return usersObject;
  }

  render() {

    const { users, lunches, addUserToLunch } = this.props;

    const {selectedUsers } = this.state;

    return (<div>

            <h1>Create new lunch</h1>

             <Autocomplete
                direction="down"
                selectedPosition="above"
                label="Choose your colleagues"
                onChange={this.onSelectUser.bind(this)}
                source={this.parseUsers(users)}
                value={selectedUsers}
             />
             {this.state.selectedUsers.length}

             <Link to="/lunch/result">
              <Button label="Find Places" disabled={!this.state.selectedUsers.length}/>
             </Link>

          </div>);
  }

}

export default Lunch;
