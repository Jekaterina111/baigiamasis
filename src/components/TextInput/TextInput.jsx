import React from "react";
import PropTypes from "prop-types";
import  * as S from "./TextInput.styles";

const TextInput = ({ type, label, placeholder }) => {
    return (
    <S.Container>
    <div>
    <S.Label htmlFor={label}>{label}</S.Label>
    <S.Input type={type} placeholder={placeholder} />
    </div>
    </S.Container>
    ); 
};

TextInput.propTypes = {
    type: PropTypes.oneOf(["text", "email", "password"]),
    label: PropTypes.string.isRequired,
    placeholder: PropTypes.string.isRequired,
};

TextInput.defaultProps = {
    type: "text",
    
};

export default TextInput;