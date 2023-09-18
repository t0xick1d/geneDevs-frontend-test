import React from 'react';
import QuestionForm from 'components/QuestionForm/QuestionFormTest';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import QuestionList from 'components/QuestionList/QuestionList';

import style from './style.module.css';

export default function QuestionPage() {
  const [addTaskSwitch, setAddTaskSwitch] = useState(true);

  return (
    <div>
      <Link to="/topic" relative="path">
        <button className={style.button__delete}>back to Topic</button>
      </Link>
      {addTaskSwitch ? (
        <button
          className={style.button__delete}
          onClick={() => {
            setAddTaskSwitch(!addTaskSwitch);
          }}
        >
          Add question
        </button>
      ) : (
        <div>
          <QuestionForm />
          <button
            onClick={() => {
              setAddTaskSwitch(!addTaskSwitch);
            }}
            className={style.button__delete}
          >
            Cancel
          </button>
        </div>
      )}
      <QuestionList />
    </div>
  );
}
