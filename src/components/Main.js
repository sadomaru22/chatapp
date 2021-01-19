import { Divider } from '@material-ui/core';
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

import MessegeInputField from './MessageInputField';
import MessegeList from './MessageList';

const useStyles = makeStyles({
   rootey: {
      display: 'grid',
      height: '100vh',
      gridTemplateRows: '1fr auto',
   },
});

const Main = () => {
   const classes = useStyles();
  return <div className={classes.rootey}>
     <MessegeList />
     <MessegeInputField />
  </div>;
}

export default Main;