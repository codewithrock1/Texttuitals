import React, { useState } from 'react'

export default function TextForm(props) {
const handleOnChange=(e)=>{
setText(e.target.value)
}
const handleOnClick=()=>{

let newtext=Text.toUpperCase()
  setText(newtext)

}
// for lowcreas
const handleOnLower=()=>{
  let mytext =Text.toLocaleLowerCase()
  setText(mytext)
}
// how to copy text
const handleOnCopy=()=>{
let text=document.getElementById("copytext")
text.select();
navigator.clipboard.writeText(text.value);
}
// TO REMOVE EXTRA SPACEAS
const handleOnRemove=()=>{
let newText=Text.split(/[ ]+/);
setText(newText.join(" "))
}


 const [Text,setText]=useState("enter your text");
//  const []=useState();
     return (
    <div>
<div className= "container" my-3 >
  <h1 style={{color:props.mode==="light"? "black":"white"}}>Enter your text here</h1>
  <textarea class="form-control"  value={Text} onChange={handleOnChange} id="copytext" rows="3" style={{backgroundColor:props.mode==="light"? "white":"grey"
,
color:props.mode==="light"? "black":"white"}}></textarea>
  <button onClick={handleOnClick} className={`btn btn-${props.mode==="light"? "dark":"light"} mx-3`}  >UPCREASE</button>
  <button onClick={handleOnLower} className={`btn btn-${props.mode==="light"? "dark":"light"} mx-3 my-3`} >Lowcrease</button>
  <button onClick={handleOnCopy} className={`btn btn-${props.mode==="light"? "dark":"light"} mx-3`} >Copy Text</button>
  <button onClick={handleOnRemove} className={`btn btn-${props.mode==="light"? "dark":"light"} mx-3`} >Remove spaces</button>


</div>
<div className="container">
  <h1>your text summary</h1>
  <p>"total characters"{Text.length} and "total words"{Text.split (" ").length} </p>
</div>


    </div>
  )
}
