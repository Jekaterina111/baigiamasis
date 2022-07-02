import React, { useState } from 'react';
import PropTypes from "prop-types";
import * as S from "./ListItem.styles";


const ListItem = ({ task, date, onCheked }) => {
  const [checked, setCheked] = useState(false);

  const handleChange = (checkboxValue) => {
    setCheked(checkboxValue);
    onCheked(checkboxValue);
  };

  return (
  <S.ListItem>
    <label>
    <S.Checkbox
     type="checkbox" 
     checked={checked}
     onChange={(e) => handleChange(!checked)}
     />
    {task}
    </label>
    <S.ItemDate>{new Date(date).toLocaleDateString("lt")}</S.ItemDate>
 </S.ListItem>
 );
};

ListItem.propTypes = {
    task: PropTypes.string.isRequired,
    date: PropTypes.number.isRequired,
};

export default ListItem;