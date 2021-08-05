import React, { useState } from "react";

import { useDispatch } from "react-redux";
import { register } from "../redux/actions/action";
import { Form, Button } from "react-bootstrap";

const SignUp = () => {
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");

  const dispatch = useDispatch();

  const handelSubmit = (e) => {
    console.log(name);
    e.preventDefault();
    dispatch(register({ name, password }));
  };

  return (
    <div>
      <h1>

      Register Serveur
      </h1>
      <Form>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>name</Form.Label>
          <Form.Control
            type="name"
            placeholder="name"
            onChange={(e) => setName(e.target.value)}
            value ={name}
          />
          <Form.Text className="text-muted">
            We'll never share your email with anyone else.
          </Form.Text>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            placeholder="Password"
            onChange={(e) => setPassword(e.target.value)}
            value ={password}
          
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicCheckbox">
          <Form.Check type="checkbox" label="Check me out" />
        </Form.Group>
        <Button variant="primary" type="submit" onClick={handelSubmit}>
          Submit
        </Button>
      </Form>
    </div>
  );
};

export default SignUp;
