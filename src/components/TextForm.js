import React, {useState} from 'react'


export default function TextForm(props) {
    const handleUpClick=()=>{
        const newtext=text.toUpperCase();
        settext(newtext);
        props.showAlert("converted to UpperCase", "success");
    }

    const handleLoClick=()=>{
      const newtext=text.toLowerCase();
      settext(newtext);
      props.showAlert("converted to LowerCase", "success");
    }
    const handleClearClick = ()=>{ 
      let newText = '';
      settext(newText);
      props.showAlert("Text Cleared!", "success");
    }

    const handleOnChange=(event)=>{
      settext(event.target.value);
      
  }

      const handleCopy = () => {
        navigator.clipboard.writeText(text); 
        props.showAlert("Copied to Clipboard!", "success"); 
        }

        const handleExtraSpaces = () => {
          let newText = text.split(/[ ]+/);
          settext(newText.join(" "));
          props.showAlert("Extra spaces removed!", "success");
         }
          const [text, settext] = useState("");

  return (
    <>
    <div className="container" style={{color: props.mode==='dark'?'white':'black'}}>
    <div className="mb-3">
    <h1>{props.heading}</h1>
    <textarea className="form-control" id="mybox"rows="8" value={text} onChange={handleOnChange} style={{backgroundColor : props.mode==='dark'?'grey':'white', color:props.mode==='dark'?'white':'black'  }}></textarea>  
    <button className="btn btn-primary mx-2 my-1" onClick={handleUpClick}>Convert to uppercase</button>
    <button className="btn btn-primary mx-2 my-1" onClick={handleLoClick}>Convert to Lowercase</button>
    <button className="btn btn-primary mx-2 my-1" onClick={handleClearClick}>Clear text</button>
    <button className="btn btn-primary mx-2 my-1" onClick={handleCopy}>Copy text</button>
    <button className="btn btn-primary mx-2 my-1" onClick={handleExtraSpaces}>Remove extra space</button>
    </div>
    </div>
    <div className="container" style={{color: props.mode==='dark'?'white':'black'}}>
      <h2> Your text summary</h2>
      <p>{text.split(" ").filter((element)=> {return element.length!==0}).length} words and {text.length} Character</p>
      <p>{0.008 * text.split(" ").length} Minutes needed to read</p>
      <h2> Preview</h2> 
      <p>{text.length>0?text:"Enter something in the textbox above to preview it here"}</p>
    </div>
    </>
  )
}
