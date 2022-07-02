import React, { useState } from 'react';
import Proptypes from "prop-types";
import TextInput from '../TextInput/TextInput';
import Button from '../Button/Button';
import Hero from '../Hero/Hero';
import Section from '../Section/Section';


const LoginForm = ({ handleSubmit }) => {
  const [loginValues, updateLoginValues ] = useState();

  return (
  <>
    <Hero title="Login" />
    <Section>
      <form
      onSubmit={(e) => {
        e.preventDefault();

        handleSubmit(loginValues);
      }}
      >
        <TextInput
         type="email"
         label="Email" 
         placeholder='info@example.com'
         handleChange={(emailValue) =>
        updateLoginValues({ ...loginValues, email: emailValue }) 
      }
          />
        <TextInput 
        type="password" 
        label="Password" 
        placeholder='Password'
        handleChange={(passwordValue) =>
          updateLoginValues({ ...loginValues, password: passwordValue })
        }
        />
        <Button type="submit">Login</Button>
      </form>
    </Section>
  </>
);
};

LoginForm.propTypes = {
  handleSubmit: Proptypes.func.isRequired,
};

export default LoginForm;