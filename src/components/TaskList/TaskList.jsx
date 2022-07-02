import React from 'react';
import PropTypes from 'prop-types';
import * as S from './TaskList.styles';
import ListItem from '../ListItem/ListItem';
import { Checkbox } from '../ListItem/ListItem.styles';

const TaskList = ({ tasks }) => {
  return (
    <S.TaskList>
        {tasks &&
          tasks.map((task) => (
          <ListItem 
          task={task.task} 
          date={task.date}
         onCheked={(checkboxValue) => {
           //  
          }}
          />
          ))}
    </S.TaskList>
  );
};

TaskList.propTypes = {
    tasks: PropTypes.arrayOf(
    PropTypes.shape({
        task: PropTypes.string.isRequired,
        date: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default TaskList;