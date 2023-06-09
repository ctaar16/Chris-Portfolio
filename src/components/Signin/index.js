import React from 'react';
import { useForm, ValidationError } from '@formspree/react';
import {
  Container,
  FormWrap,
  Form,
  Label,
  FormInput,
  FormButton,
} from "../Signin/SigninElements";

function ContactForm() {
  const [state, handleSubmit] = useForm("xleopwrv");
  if (state.succeeded) {
      return <p>Thanks for emailing me! I will be in contact soon!</p>;
  }
  return (
    
    <Container>
      <FormWrap>
      <Form onSubmit={handleSubmit}>
      <Label htmlFor="email">
        Email Me
      </Label>
      <FormInput
        id="email"
        type="email" 
        name="email"
        placeholder='Enter Your Email Address Here'style={{alignItems:'center'}}
      />
      <ValidationError 
        prefix="Email" 
        field="email"
        errors={state.errors}
      />
      <FormInput
        id="message"
        name="message"
        placeholder='Enter Your Message Here'style={{alignItems:'center'}}
      />
      <ValidationError 
        prefix="Message" 
        field="message"
        errors={state.errors}
      />
      <FormButton type="submit" disabled={state.submitting}>
        Submit
      </FormButton>
    </Form>

      </FormWrap>
    </Container>

  );
}
function App() {
  return (
    <ContactForm />
  );
}
export default App;

