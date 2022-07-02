import React from 'react';
import * as S from "./Navigation.styles";

const Navigation = ({ children }) => {
  return (
    <S.Header>
      <S.Container>
      <S.Logo 
      src="../public/images/logo.png"
      alt="logo"/>
      <S.Nav>
      <a href='#'>About</a>
      <a href='#'>Meniu</a>
      <a href='#'>Register</a>
      <a href='#'>Login</a>
      </S.Nav>
      </S.Container>
    </S.Header>
  );
};

export default Navigation;