import React from 'react';
import { IconButton } from '@material-ui/core/';  //coreからIconButtonをimportする
import SendIcon from '@material-ui/icons/Send';

import { pushMessage } from '../firebase';


const MessageSummitButton = ({ name, setText, text }) => {
   return (
   <IconButton disabled={text === ''} onClick={() => {
      pushMessage({name, text });
      setText(''); //初期化
   }}>
     <SendIcon />
   </IconButton>
   );
};

export default MessageSummitButton;