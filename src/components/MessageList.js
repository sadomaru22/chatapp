import React, { useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';

import { messagesRef } from '../firebase';

const useStyles = makeStyles({
   root: {
      gridRow: 1,
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
　　   .limitToLast(3)
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
   
   return <div className={classes.root}>MessageList</div>
};

export default MessageList;