import React from 'react'
import Dropdown from 'react-bootstrap/Dropdown';


export default function Dropdownmenu() {
    return (
        <Dropdown>
      <Dropdown.Toggle variant="outline-info" id="dropdown-basic">
        More Info
      </Dropdown.Toggle>

      <Dropdown.Menu>
        <Dropdown.Item variant="outline-success" href="#/action-1">About</Dropdown.Item>
        <Dropdown.Item variant="outline-success" href="#/action-2">Contact Us</Dropdown.Item>
        <Dropdown.Item variant="outline-success" href="#/action-3">Newsletter</Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
    )
}