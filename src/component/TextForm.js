import React, { useState } from 'react';
import Form from 'react-bootstrap/Form';

export default function TextForm(props) {
    const [text, setText] = useState("");

    const handleUpClick = () => {
        console.log("UpperCase was Clicked"+text)
        let newText = text.toUpperCase()
        setText(newText)
    }

    const handleLoClick = () => {
      console.log("Lowercase was Clicked"+text)
      let newText = text.toLowerCase()
      setText(newText)
  }

    const handleOnChange = (event) => {
        console.log("Change was made")
        setText(event.target.value)
    }

  return (
    <>


    <div className="container my-4">
    <h1>Enter your text to analyze</h1>
    </div>
   
      <div className="container">
       
      <Form>
      <Form.Group className="mb-3" controlId="myBox">
        {/* <Form.Label>Example textarea</Form.Label> */}
        <Form.Control value={text} onChange={handleOnChange} as="textarea" rows={8} />
      </Form.Group>
    </Form>

    <button className="btn btn-primary mx-2" onClick={handleUpClick}>"Convert to UpperCase"</button>
    <button className="btn btn-primary mx-2" onClick={handleLoClick}>"Convert to UpperCase"</button>
    </div>
    
    <div className="container my-3 ">
    <h2>Your Text Summary</h2>
    <p>{text.split(" ").length} words and    {text.length} characters</p>
    <p>{0.008 * text.split(" ").length} min read</p>
    <h3>Preview</h3>
    <p>{text}</p>
    </div>
    </>
  )
};
