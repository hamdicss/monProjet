import React, { useState } from "react";


import { useDispatch } from "react-redux";
import { login } from "../redux/actions/action";
import { Form,Button } from "react-bootstrap";


const SignIn = () => {


  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  
  const dispatch = useDispatch();

  const handelSubmit = (e) => {
    e.preventDefault();
    dispatch(login({  name, password }));
  };

  return (

<div>
    
<Form>
  <Form.Group className="mb-3" controlId="formBasicEmail">
    <Form.Label>name</Form.Label>
    <Form.Control type="name" placeholder="name" />
    <Form.Text className="text-muted">
      We'll never share your email with anyone else.
      onChange={(e) => setName(e.target.value)}
    </Form.Text>
  </Form.Group>

  <Form.Group className="mb-3" controlId="formBasicPassword">
    <Form.Label>Password</Form.Label>
    <Form.Control type="password" placeholder="Password" />
  </Form.Group>
  <Form.Group className="mb-3" controlId="formBasicCheckbox">
  onChange={(e) => setPassword(e.target.value)}
    <Form.Check type="checkbox" label="Check me out" />
  </Form.Group>
  <Button variant="primary" type="submit" onClick={handelSubmit}>
    Submit
  </Button>
</Form>
    </div>
  
    
  )
};

export default SignIn;
