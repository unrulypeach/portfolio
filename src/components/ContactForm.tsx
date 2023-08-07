import { styled } from 'styled-components';

const FormWrapper = styled.form`
  background: #3c3f58;
  display: flex;
  flex-direction: column;
  margin: auto;
  width: 200px;
  padding-top: 100px;
  padding-bottom: 50px;
`;

// const FormLabel = styled.label``;

const LabelSpan = styled.span`
  margin-left: 2px;
  margin-top: 2px;
  z-index: 2;
  color: #a6e3d6;
  font-family: 'Oswald 300';
  user-select: none;
  position: relative;
  top: 1.6em;
  left: 0.25em;
`;

const FormInput = styled.input`
  width: 100%;
  height: 2em;
  border: solid 2px #2e3047;
  border-radius: 10px;
  background-color: transparent;
`;

const FormTextarea = styled.textarea`
  border: solid 2px #2e3047;
  border-radius: 10px;
  background-color: transparent;
`;

const ContactForm = () => {
  return (
    <FormWrapper action="submit">
      <label htmlFor="name">
        <LabelSpan>Name</LabelSpan>
        <FormInput type="text" />
      </label>
      <label htmlFor="email">
        <LabelSpan>Email</LabelSpan>
        <FormInput type="email" />
      </label>
      <label htmlFor="message">
        <LabelSpan>Message</LabelSpan>
        <FormTextarea name="message" id="message" cols={28} rows={8} />
      </label>
    </FormWrapper>
  );
};

export default ContactForm;
