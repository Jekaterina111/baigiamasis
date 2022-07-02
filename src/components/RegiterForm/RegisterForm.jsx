import React, { useState } from 'react';
import Proptypes from "prop-types";
import TextInput from '../TextInput/TextInput';
import Button from '../Button/Button';
import Hero from '../Hero/Hero';
import Section from '../Section/Section';


const RegisterForm = ({ handleSubmit }) => {
  const [registerValues, updateRegisterValues ] = useState();

  return (
  <>
    <Hero title="Register" />
    <Section>
      <form
      onSubmit={(e) => {
        e.preventDefault();

        handleSubmit(registerValues);
      }}
      >
         <TextInput
         type="text"
         label="Name" 
         placeholder='Vardenis'
         handleChange={(nameValue) =>
        updateRegisterValues({ ...registerValues, name: nameValue }) 
         }
        />

        <TextInput
         type="email"
         label="Email" 
         placeholder='info@example.com'
         handleChange={(emailValue) =>
        updateRegisterValues({ ...registerValues, email: emailValue }) 
      }
          />
        <TextInput 
        type="password" 
        label="Password" 
        placeholder='Password'
        handleChange={(passwordValue) =>
          updateRegisterValues({ ...registerValues, password: passwordValue })
        }
        />
        <Button type="submit">Register</Button>
      </form>
    </Section>
  </>
);
};

RegisterForm.propTypes = {
  handleSubmit: Proptypes.func.isRequired,
};

export default RegisterForm;