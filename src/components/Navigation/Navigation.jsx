import React from 'react';
import PropTypes from "prop-types";
import * as S from "./Navigation.styles";
import Logo from '../../images/logo.png';
import { Link } from 'react-router-dom';

const Navigation = ({ links }) => {
  return (
    <S.Header>
      <S.Container>
      <S.Logo src={Logo} />
      
      {links && (
      <S.Nav>
      {links.map((link) => (
        <Link to={link.url}>{link.title}</Link>
      ))}
      </S.Nav>
      )}
    </S.Container>
  </S.Header>
  );
};

Navigation.propTypes = {
  links: PropTypes.arrayOf(
    PropTypes.shape({
      url: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
    })
  ),
};

export default Navigation;