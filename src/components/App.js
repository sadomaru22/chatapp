import React, { useState } from 'react';

import Main from './Main';
import SignIn from './SignIn';
import config from '../coonfig.json';

export default () => {
  const [name, setName] = useState('');

  if (name === '' && config.signInEnabled) {
    return <SignIn setName={setName} />;  //1個目のページ
  } else {
    return <Main name={name} />;　//chatapp側のページ
  }
};
