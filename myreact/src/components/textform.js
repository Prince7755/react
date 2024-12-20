
import React, {useState} from 'react'



export default function TextForm(props) {
    const handleUpClick = ()=>{
        let newText = text.toUpperCase();
        setText(newText)
    }

    const handleDownClick = ()=>{
        let newText = text.toLowerCase();
        setText(newText)
    }

    const handleTitleClick = ()=>{
        let newText = text.to();
        setText(newText)
    }



    const handleOnChange = (event)=> {
        setText(event.target.value)

    }
    const[text, setText] = useState('Enter the Text here'); 
  return (
    <>
    <div className='container'>
<h1>{props.heading}</h1>
<div className="mb-3">
  
  <textarea className="form-control" value={text} onChange={handleOnChange} id="mybox" rows="8"></textarea>
</div>
<button className="btn btn-primary mx-2" onClick={handleUpClick}>Convert to Uppercase</button>
<button className='btn btn-primary mx-2' onClick={handleDownClick}>Convert to Lowercase</button>
    </div>
    <div className='container my-3'>
        <h2>your text summary</h2>
        <p>{text.split(" ").length} words and {text.length} characters</p>
        <p>{0.008*text.split(" ").length} Minutes read</p>
        <h2>Preview</h2>
        <p>{text}</p>
    </div>
    </>
  )
}
