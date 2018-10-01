import React from 'react';
import PropTypes from 'prop-types';
import { Button } from 'component-library';

import '../assets/stylesheets/base.scss';


const App = ({ name }) => {
  return (
    <div>
      <Button
        bgColor="orange"
        hoverColor="darkOrange"
        size="small"
      >Click me</Button>
      <Button
        bgColor="pink"
        hoverColor="darkPink"
        size="medium"
      >Click me</Button>
      <Button
        bgColor="blue"
        hoverColor="darkBlue"
        size="large"
      >Click me</Button>
    </div>
  );
};

App.propTypes = {
  name: PropTypes.string,
};

export default App;
