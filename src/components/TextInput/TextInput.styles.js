import styled from "styled-components";

export const Input = styled.input`
  box-sizing: border-box;
  width: 100%;
  padding: 0.5rem 0;
  font-size: 1.1rem;
  border: 0;
  border-bottom: 0.125rem solid rgb(0, 0, 0);
  ::placeholder,
  ::-webkit-input-placeholder {
    color:  rgba(0, 0, 0, 0.2);
  }
`;
export const Container = styled.div`
    padding: 0.75rem 0;

  ${Input}:focus & {
  border-color: rgba(0, 0, 0, 0.5);
  transition: border-color 1s;
  outline: 0;
  }
`;

export const Form = styled.form`
   width: 100%;
`;

export const Label = styled.label`
font-weight: bold;
`