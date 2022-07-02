import styled from "styled-components";

export const Button = styled.button`
background: linear-gradient(
    90deg, 
    rgb(0, 0, 0) 0%, 
    rgb(53, 51, 51) 100%);
border: 0.05rem solid black;
color: #fff;
padding: 1rem 1.75rem;
cursor: pointer;
font-family: 'Roboto', sans-serif;
text-transform: uppercase; 
&:hover,
  &:active {
    background: #878383;
  }
`;