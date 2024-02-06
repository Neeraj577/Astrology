import React,{useState } from 'react';
const EmojiAdder=()=>{
    const[text,setText]=useState('');
    const[emoji,setEmoji]=useState('');


    const addEmoji=()=>{

        if(text.toUpperCase().includes('HAPPY')){
            setEmoji(":)");
        }
    };
    return (

        <div>
    
                <h1></h1> 
                
                <input type="text" placeholder=""    
                value={text}
                onChange={(e)=>setText(e.target.value)}
                />
                  <button onClick={addEmoji}>Add Emoji/</button>   
                  <p>{emoji}</p>   
                        
         </div>
    )
};
export default EmojiAdder;