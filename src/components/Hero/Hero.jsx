import React from "react";
import PropTypes from "prop-types";
import * as S from "./Hero.styles";

const Hero = ({ title, subtitle }) => {
  return (
    <S.Section>
      <S.Container>
          <h1 className="title">{title}</h1>
          <p className="subtitle">{subtitle}</p>
      </S.Container>
    </S.Section>
  );
};

Hero.propTypes = {
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string,
};

export default Hero;
