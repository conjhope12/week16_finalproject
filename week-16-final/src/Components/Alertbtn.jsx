
import { useState } from 'react';
import Alert from 'react-bootstrap/Alert';
import Button from 'react-bootstrap/Button';

export default function Alertbtn() {
    const [show, setShow] = useState(true);

  if (show) {
    return (
      <Alert className="alert-btn" variant="danger" onClose={() => setShow(false)} dismissible>
        <Alert.Heading>Do you have the force yet?</Alert.Heading>
        <hr />
        <p>
          If you don't have the force yet, push "X"
        </p>
      </Alert>
    );
  }
}

{/* <div class="alert alert-warning alert-dismissible fade show" role="alert">
        <strong>Do you have the force yet?</strong> <p>If you don't have the force yet, push "X" :0</p> 
        <button type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
    </div> */}