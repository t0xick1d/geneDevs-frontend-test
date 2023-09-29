import React from 'react';
import QuestionForm from 'components/QuestionForm/QuestionForm';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import QuestionList from 'components/QuestionList/QuestionList';
import { Button } from '@mui/material';

import style from './style.module.css';

export default function QuestionPage() {
  const [addTaskSwitch, setAddTaskSwitch] = useState(true);

  return (
    <div>
      <div className={style.container}>
        {addTaskSwitch ? (
          <Button
            variant="outlined"
            // className={style.button__delete}
            onClick={() => {
              setAddTaskSwitch(!addTaskSwitch);
            }}
          >
            Add question
          </Button>
        ) : (
          <div>
            <QuestionForm />
            <Button
              variant="contained"
              onClick={() => {
                setAddTaskSwitch(!addTaskSwitch);
              }}
              // className={style.button__delete}
            >
              Cancel
            </Button>
          </div>
        )}
        <Link to="/topic" relative="path">
          <Button
            variant="contained"
            // className={style.button__delete}
          >
            back to Topic
          </Button>
        </Link>
      </div>
      <QuestionList />
    </div>
  );
}
