import { useState } from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import CreateAnswear from './QuestionFormTest';

import style from './style.module.css';

const QuestionForm = () => {
  const [swithAddAnwear, setSwithAddAnwear] = useState(true);

  const formik = useFormik({
    initialValues: {
      question: '',
      // answearInput: '',
      // rightAnswear: false,
      answearList: [
        {
          answear: '',
          isRight: false,
        },
      ],
    },
    validationSchema: Yup.object({
      question: Yup.string().required('Required'),
      answearInput: Yup.string(),
      rightAnswear: Yup.boolean().required('Required'),
      answearList: Yup.array()
        .of(
          Yup.object().shape({
            dayOfWeek: Yup.string(),
            checked: Yup.boolean(),
          })
        )
        .required('Required'),
    }),
    onSubmit: (values, { resetForm }) => {
      console.log(values);
      // dispatch(logIn(values));

      resetForm();
    },
  });

  const addAnswerFunk = values => {
    formik.values.answearList = values;
    console.log(formik.values);
    formik.resetForm({ answearInput: '', rightAnswear: false });
  };

  return (
    <form
      onSubmit={formik.handleSubmit}
      className={style.container}
      autoComplete="off"
    >
      <label htmlFor="question">Question</label>
      <input
        id="question"
        type="text"
        name="question"
        required
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        value={formik.values.question}
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
        <CreateAnswear
          listAnswear={formik.values.answearList}
          addAnswerFunk={addAnswerFunk}
        />
      )}
      <button type="submit" className={style.button__delete}>
        Add question
      </button>
    </form>
  );
};

export default QuestionForm;


// (
//         <div>
//           <label htmlFor="answearInput">Answear</label>
//           <input
//             id="answearInput"
//             type="text"
//             name="answearInput"
//             onChange={formik.handleChange}
//             onBlur={formik.handleBlur}
//             value={formik.values.answearInput}
//             className={style.input__form}
//           />

//           <input
//             type="checkbox"
//             name="rightAnswear"
//             value={formik.values.rightAnswear}
//             onChange={formik.handleChange}
//           />
//           <button
//             onClick={addAnswerFunk}
//             type="button"
//             className={style.button__delete}
//           >
//             Add anwear
//           </button>
//           <button
//             type="button"
//             onClick={() => {
//               setSwithAddAnwear(!swithAddAnwear);
//             }}
//             className={style.button__delete}
//           >
//             Cancel answear
//           </button>
//         </div>
//       )