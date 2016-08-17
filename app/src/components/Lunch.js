import React, { Component } from 'react';

import { List, ListItem, ListSubHeader, ListDivider, ListCheckbox } from 'react-toolbox/lib/list';
import Autocomplete from 'react-toolbox/lib/autocomplete';

// const Lunch = ({ users, lunches, addUserToLunch }) => {
const dataSourceConfig = {
  text: 'name',
  value: 'id',
};

class Lunch extends Component {

  state = { selectedUsers : [] }

  onSelectUser(chosenRequest) {
    console.log(chosenRequest);
    this.props.addUserToLunch(chosenRequest);
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

             <List>
              {lunches.map((user, i) => <ListItem key={i} caption={user} />)}
             </List>

          </div>);
  }

}

//   // places = ['mario', 'pippo'];
//   return {
//
//     onSelectUser(chosenRequest) {
//       addUserToLunch(chosenRequest.id);
//     },
//
//     parseUsers(users) {
//       return Object.keys(users).reduce((data, key) => {
//
//             let user = users[key];
//             data.push({ id: key, name: user.name})
//
//             return data;
//
//         }, []);
//   },
//
//     render() {
//       return (<div>
//
//         <h1>Create new lunch</h1>
//
//          <AutoComplete
//            floatingLabelText="Choose your colleagues"
//            filter={AutoComplete.caseInsensitiveFilter}
//            dataSource={this.parseUsers(users)}
//            dataSourceConfig={dataSourceConfig}
//            onNewRequest={this.onSelectUser}
//          />
//
//          <List>
//           {lunches.map((user, i) => <ListItem key={i} primaryText={user} />)}
//          </List>
//
//       </div>);
//     },
//   };
//
// };

export default Lunch;
