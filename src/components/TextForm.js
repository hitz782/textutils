import React, {useState} from 'react'


export default function TextForm(props) {
    const handleUpClick=()=>{
        const newtext=text.toUpperCase();
        settext(newtext);
    }

    const handleLoClick=()=>{
      const newtext=text.toLowerCase();
      settext(newtext);
      alert("text updated to lowercase");
  }
    const handleOnChange=(event)=>{
      console.log("On change");
      settext(event.target.value);
  }
    const [text, settext] = useState("");
  return (
    <>
    <div className="container">
    <div className="mb-3">
    <h1>{props.heading}</h1>
    <textarea className="form-control" id="mybox"rows="8" value={text} onChange={handleOnChange}></textarea>  
    <button className="btn btn-primary mx-2" onClick={handleUpClick}>Convert to uppercase</button>
    <button className="btn btn-primary mx-2" onClick={handleLoClick}>Convert to Lowercase</button>
    </div>
    </div>
    <div className="container">
      <h2> Your text summary</h2>
      <p>{text.split(" ").length} words and {text.length} Character</p>
      <p>{0.008 * text.split(" ").length} Minutes needed to read</p>
      <h2> Preview</h2> 
      <p>{text}</p>
    </div>
    </>
  )
}
