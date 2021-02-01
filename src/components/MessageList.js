import React, { useEffect, useState } from 'react';
import { List } from '@material-ui/core';

import { makeStyles } from '@material-ui/core/styles';
import MessageItem from './MessageItem';
import { messagesRef } from '../firebase';
import { Autorenew } from '@material-ui/icons';

const useStyles = makeStyles({
   root: {
      gridRow: 1,
      overflow: 'auto',
      width: '100%'
   },
});

// key: -MSR_HGb7N-aP-1QMw1d, value: {name: "sado", text: "ポーお"}
// {key: -MSR_HGb7N-aP-1QMw1d, name: "sado", text: "ポーお"}  一つのオブジェクトとして管理したい

const MessageList = () => {
   const [messages, setMessages] = useState([]);
   const classes = useStyles();
   
   useEffect(() => {
　　   　messagesRef
　　   .orderByKey()
　　   .limitToLast(15)
　　   .on('value', (snapshot) => {
　　    const messages = snapshot.val();
       if (messages === null) return;  //こうすることで最初の段階でfirebaseの方で起きるエラーを防ぐ     

　　    const entries = Object.entries(messages);
　　    const newMessages = entries.map(entry => {
　　       const [key, nameAndtext] = entry;  //一回名前付きで取り出してから、それらを格納する方が可読性が高い 
　　       return { key, ...nameAndtext };  //ここで矯正する
　　    });
　　    setMessages(newMessages);
　　   });
　　}, []);
   
   return <List className={classes.root}>
      {
         messages.map(({ key, name, text }) => {
            return <MessageItem key={key} name={name} text={text}>item</MessageItem>;
         })
      }

   </List>
};

export default MessageList;