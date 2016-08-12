import React from 'react';
import RaisedButton from 'material-ui/RaisedButton';
import { Link } from 'react-router';

const Home = () => {

  return {

    render() {
      return (<div>

        <h1>Home</h1>

        <Link to="/places">
          <RaisedButton label="Places" fullWidth={true} />
        </Link>
        <Link to="/people">
          <RaisedButton label="People" fullWidth={true} />
        </Link>

      </div>);
    },
  };

};

export default Home;
