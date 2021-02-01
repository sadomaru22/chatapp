import React, { useState } from 'react';
import { TextField } from '@material-ui/core';

import { pushMessage } from '../firebase';


const MessageField = ({ inputEL, name, setText, text }) => {
   const [isComposed, setIsComposed] = useState(false);
   
   return <TextField 
   autoFocus
   fullWidth={true}
   inputRef={inputEL}
   onChange={(e) => setText(e.target.value)}

   onKeyDown={(e) => {
      if (isComposed === true) return;  //以降の処理は行わない(編集中だから)            
       
      const text = e.target.value;
      if (text === '') return;

      if (e.key === 'Enter') {
         // console.log('push message sa firebase')
         pushMessage({ name, text });
         setText('');
         e.preventDefault();
      }
   }}
   onCompositionStart={() => {setIsComposed(true)}}
   onCompositionEnd={() => {setIsComposed(false)}}
   value={text}    //valueはいつも抽象的であるため、text,nameなど指定する必要がある→そうすることでEnter押すたびtextを初期化できる
  />
};

export default MessageField;
