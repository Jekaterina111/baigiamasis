import React from "react";
import PropTypes from "prop-types";
import * as S from "./Section.styles";

const Section = ({ children }) => {
  return (
    <S.Section>
      <S.Title>{children}</S.Title>
    </S.Section>
  );
};

Section.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Section;
