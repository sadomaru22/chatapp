import React, { useState } from 'react';

import Main from './Main';
import SignIn from './SignIn';
import config from '../coonfig.json';

export default () => {
  const [name, setName] = useState('');
  console.log({name});

  if (name === '' && config.signInEnabled) {
    return <SignIn setName={setName} />;
  } else {
    return <Main name={name} />;
  }
};
