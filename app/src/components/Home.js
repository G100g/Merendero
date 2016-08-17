import React from 'react';
import { Link } from 'react-router';
import { Button } from 'react-toolbox/lib/button';

const Home = () => {

  return {

    render() {
      return (<div>
<br />
<br />
<br />
        <Link to="/places">
          <Button label="Places" />
        </Link>
        <Link to="/lunch">
          <Button label="Lunch" />
        </Link>

      </div>);
    },
  };

};

export default Home;
