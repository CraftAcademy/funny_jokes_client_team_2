import React from "react";
import { Button, Form, Input } from "semantic-ui-react";

const LoginForm = ({ submitFormHandler }) => {
  return (
    <div>
      <Form data-cy="login-form" onSubmit={submitFormHandler}>
        <Form.Input
          icon="user"
          iconPosition="left"
          label="email:"
          placeholder="Username"
          name="email"
          type="email"
          id="email"
          data-cy="email"
        />

        <Form.Input
          icon="lock"
          iconPosition="left"
          label="password:"
          type="password"
          name="password"
          id="password"
          data-cy="password"
        />

        <Button data-cy="button" id="Submit" content="Submit" primary />
      </Form>
    </div>
  );
};

export default LoginForm;
