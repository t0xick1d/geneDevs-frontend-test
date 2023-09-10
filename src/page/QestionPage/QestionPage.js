import React from 'react';
import QuestionForm from 'components/QuestionForm/QuestionFrom';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import QuestionList from 'components/QuestionList/QuestionList';

import style from './style.module.css';

export default function QuestionPage() {
  const [addTaskSwitch, setAddTaskSwitch] = useState(true);
  // const item = useSelector(selectItem);

  const onSubmitForm = e => {
    e.preventDefault();
  };

  return (
    <div>
      QuestionPage
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
          <QuestionForm onSubmitForm={onSubmitForm} />
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
