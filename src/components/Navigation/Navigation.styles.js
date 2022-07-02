import styled from "styled-components";

export const Header = styled.header`
background-color: rgb(95, 86, 86);
`;

export const Container = styled.header`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 1rem 0;
    max-width: 50rem;
    margin: 0 auto;
`;

export const Logo = styled.img`
width: 5rem;
`;

export const Nav = styled.nav`
& > a{
    color: #fff;
    padding: 0.25rem 0;
    margin: 0 1rem;
    text-decoration: none;
    cursor: pointer;
    &:hover,
    &:active {
    border-bottom: 0.125rem solid rgb(255, 255, 255);
    transition: 0.5s;
    }
  }
`;