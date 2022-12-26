//4-textform js
import React, { useState } from "react";

export default function TextForm(props) {
  const handleUpClick = () => {
    // console.log("uppercase was clicked" + text);
    let newText = text.toUpperCase();
    setText(newText);
    props.showAlert("Converted to UpperCase", "success")

  };
  const handleLoClick = () => {
    // console.log("uppercase was clicked" + text);
    let newText = text.toLowerCase();
    setText(newText);
    props.showAlert("Converted to LowerCase", "success")

  };
  const handleclrClick = () => {
    let newText =("");
    setText(newText);
    props.showAlert("Text Cleared", "success")

  };
  const  handlecopClick = () => {
    // console.log("i am copied");
    var text = document.getElementById("mybox");
    text.select();
    navigator.clipboard.writeText(text.value);
    props.showAlert("Copied to clipboard", "success")
  
  };
  // coding wala 
  const handlextraScpace = ()=> {
  let newText = text.split(/[ ]+/);
  setText(newText.join(" "))
  props.showAlert("Remove Extra Spaces", "success")

  }
  const handleOnChange = (event) => {
    console.log("On Change");
    setText(event.target.value);
  }; 

  const [text, setText] = useState("Enter text here");
  // text ="new text"; //wrong way to change the state
  // setText ("new text"); //wrong way to change the state

  return (
    <>
      <div className="container" style={{color: props.mode==='dark'?'white':'black'}}>
        <div className="mb-3">
          <h1>{props.heading} </h1>
          <textarea
            className="form-control"
            id="mybox"
            value={text}
            onChange={handleOnChange} style={{backgroundColor: props.mode==='dark'?'grey':'white',
            color: props.mode==='dark'?'white':'black'}}
            rows="8"
          ></textarea>
        </div>
        <button className="btn btn-primary" onClick={handleUpClick}>
          Convert to UpperCase
        </button>
        <button className="btn btn-primary mx-2" onClick={handleLoClick}>
          Convert to LowerrCase
        </button>
        <button className="btn btn-primary mx-2" onClick={handleclrClick}>
          Clear text
        </button>
        <button className="btn btn-primary mx-2" onClick={handlecopClick}>
          Copy text
        </button>
        <button className="btn btn-primary mx-2" onClick={handlextraScpace}>
          Cleared extra spaces
        </button>
      </div>
      <div className="container my-2" style={{color: props.mode==='dark'?'white':'black'}}>
        <h3>Your text summery</h3>
        <p>
          {text.split(" ").length} words and {text.length} characters
        </p>
        <p>{0.008 * text.split(" ").length} minuts read</p>
        <h3>Preview</h3>
        <p>{text.length>0?text:"Enter something to preview here"}</p>
      </div>
    </>
  );
}

