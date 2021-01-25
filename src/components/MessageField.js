import React, { useState } from 'react';
import { TextField } from '@material-ui/core';


const MessageField = ({ name, setText, text }) => {
   const [isComposed, setIsComposed] = useState(false);
   console.log({ text });

   return <TextField 
   fullWidth={true}
   onChange={(e) => setText(e.target.value)}
   
   onKeyDown={(e) => {
      if (isComposed === true) return;  //以降の処理は行わない(編集中だから)            
       
      const text = e.target.value;
      if (text === '') return;

      if (e.key === 'Enter') {
         console.log('push message sa firebase')
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
