import { useState } from 'react';

import style from './style.module.css';

const QuestionForm = ({ onSubmitForm }) => {
  const [swithAddAnwear, setSwithAddAnwear] = useState(false);
  const [qestion, setQuestion] = useState('');
  const [answear, setAnswear] = useState('');

  const CreateAnswearComp = () => {
    return (
      <label>
        <input
          type="text"
          name="answear"
          value={answear}
          onChange={e => {
            setAnswear(e.target.value);
          }}
          className={style.input__form}
        />
        <input type="checkbox" />
        <button className={style.button__delete}>Add anwear</button>
        <button
          className={style.button__delete}
          onClick={() => {
            setSwithAddAnwear(!swithAddAnwear);
          }}
        >
          Cancel answear
        </button>
      </label>
    );
  };

  return (
    <form onSubmit={onSubmitForm} className={style.container}>
      <input
        type="text"
        name="question"
        required
        value={qestion}
        onChange={e => {
          setQuestion(e.target.value);
        }}
        className={style.input__form}
      />
      {swithAddAnwear ? (
        <button
          type="button"
          onClick={() => {
            setSwithAddAnwear(!swithAddAnwear);
          }}
          className={style.button__delete}
        >
          Add answear
        </button>
      ) : (
        <CreateAnswearComp />
      )}
      <button type="submit" className={style.button__delete}>
        Add test
      </button>
    </form>
  );
};

export default QuestionForm;
