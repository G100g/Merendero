import React, { Component } from 'react';

import { Button } from 'react-toolbox/lib/button';
import { Link, browserHistory } from 'react-router';
import Input from 'react-toolbox/lib/input';

class SinglePlace extends Component {

  constructor(props) {
    super(props);
    this.state = { name: '' };
  }

  handleChange(name, value) {
       this.setState({...this.state, [name]: value});
  }

  onSaveClick(value) {
       this.props.addPlace(this.state.name);
       browserHistory.push('/places');
  }

  render() {
    return (
          <section>
              <Input type='text' label='Name' name='name' value={this.state.name} onChange={this.handleChange.bind(this, 'name')} />

              <Link to="/places">
                <Button label="Back" onClick={this.onSaveClick.bind(this)} />
              </Link>
              <Button label="Save" primary  raised onClick={this.onSaveClick.bind(this)} />
          </section>);
  }

}

export default SinglePlace;
