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

const Main = ({ name }) => {　　//nameが渡ってくるのでここで引数として受け取っておく
   const classes = useStyles();
  return <div className={classes.rootey}>
     <MessegeList />
     <MessegeInputField name={name}/>
  </div>;
}

export default Main;