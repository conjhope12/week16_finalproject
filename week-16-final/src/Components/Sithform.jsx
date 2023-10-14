import React from "react";
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import Button from 'react-bootstrap/Button';

// For this entire page, I used some components off of Bootstrap-React to create radios (in this case checkboxes) attached to several different forms.
//>> Form.Control allowed me to create react inputs.
//>> InputGroup.Checkbox allowed me to add checkboxes to my existing inputs. Once that input isselected, then it can be posted by using CRUD (in the future).

export default function Sithform() {
    return (
        <>
        <h1 className="sith-page-title">Build Your Own Sith!</h1>
        <label className="sith-page-form-labels">Sith Name:</label>
      <InputGroup className="mb-3">
        <Form.Control 
        className="sith-page-form-input-name"
        placeholder="Darth Jar Jar"
        aria-label="Text input with checkbox" 
        aria-describedby="basic-addon1"
        />
      </InputGroup>
        <h4 className="sith-page-form-title" >Now choose three attributes that your Sith will need the most:</h4>
        <h6 className="sith-page-form-labels">Lightsaber color:</h6>
      <InputGroup>
        <InputGroup.Checkbox aria-label="Checkbox button for following text input" />
        <Form.Control
        className="sith-page-form-inputs"
        placeholder="Red"
        aria-label="Text input with checkbox" 
        aria-describedby="basic-addon1" 
        />
      </InputGroup>
        <h6 className="sith-page-form-labels">Type of lightsaber:</h6>
      <InputGroup>
        <InputGroup.Checkbox aria-label="Checkbox button for following text input" />
        <Form.Control
        className="sith-page-form-inputs"
        placeholder="Cross gaurd"
        aria-label="Text input with checkbox" 
        aria-describedby="basic-addon1" 
        />
      </InputGroup>
        <h6 className="sith-page-form-labels">Robotic limbs:</h6>
      <InputGroup>
        <InputGroup.Checkbox aria-label="Checkbox button for following text input" />
        <Form.Control
        className="sith-page-form-inputs"
        placeholder="Left eyeball, right arm, and left leg"
        aria-label="Text input with checkbox" 
        aria-describedby="basic-addon1" 
        />
      </InputGroup>
        <h6 className="sith-page-form-labels">Main force ability:</h6>
      <InputGroup>
        <InputGroup.Checkbox aria-label="Checkbox button for following text input" />
        <Form.Control
        className="sith-page-form-inputs"
        placeholder="Force lightning"
        aria-label="Text input with checkbox" 
        aria-describedby="basic-addon1" 
        />
      </InputGroup>
        <h6 className="sith-page-form-labels">Pet:</h6>
      <InputGroup>
        <InputGroup.Checkbox aria-label="Checkbox button for following text input" />
        <Form.Control
        className="sith-page-form-inputs"
        placeholder="Ewok"
        aria-label="Text input with checkbox" 
        aria-describedby="basic-addon1" 
        />
      </InputGroup>
      <Button className="sith-submit-btn" variant="outline-success">Submit</Button>{' '}
    </>
    )
}