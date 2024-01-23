import React, { useState } from 'react';
import Form from 'react-bootstrap/Form';

export default function TextForm(props) {
    const [text, setText] = useState("Enter the text");

    const handleClick = () => {
        console.log("UpperCase was Clicked"+text)
        let newText = text.toUpperCase()
        setText(newText)
    }

    const handleOnChange = (event) => {
        console.log("Change was made")
        setText(event.target.value)
    }
  return (
    <div>
        <h1>{props.heading}</h1>
      <Form>
      <Form.Group className="mb-3" controlId="myBox">
        {/* <Form.Label>Example textarea</Form.Label> */}
        <Form.Control value={text} onChange={handleOnChange} as="textarea" rows={8} />
      </Form.Group>
    </Form>

    <button className="btn btn-primary" onClick={handleClick}>"Convert to UpperCase"</button>
    </div>
  )
};
