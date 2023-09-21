import { useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import { Formik, Field, Form, ErrorMessage, FieldArray } from 'formik';
import { addQuestion } from 'redux-store/question/operations';
import * as Yup from 'yup';

import style from './style.module.css';

const QuestionForm = () => {
  const dispatch = useDispatch();
  const { idTopic } = useParams();

  const initialValues = {
    question: '',
    topicId: idTopic,
    answearList: [
      {
        answer: '',
        isRight: false,
      },
    ],
  };

  const validationSchema = Yup.object({
    question: Yup.string().required('Required'),
    topicId: Yup.string().required('Required'),
    answearList: Yup.array()
      .of(
        Yup.object().shape({
          answer: Yup.string(),
          isRight: Yup.boolean(),
        })
      )
      .required('Required'),
  });

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={(values, actions) => {
        console.log(values);
        dispatch(addQuestion(values));
        actions.resetForm();
      }}
    >
      {({ values }) => (
        <Form>
          <label htmlFor="Question" className={style.title}>
            Question
          </label>
          <Field
            id="question"
            name="question"
            placeholder="Write question"
            className={style.input__form}
          />
          <FieldArray name="answearList">
            {({ insert, remove, push }) => (
              <div>
                {values.answearList.length > 0 &&
                  values.answearList.map((answear, index) => (
                    <div className="row" key={index}>
                      <div className="col">
                        <label
                          htmlFor={`answearList.${index}.answer`}
                          className={style.title}
                        >
                          Answear
                        </label>
                        <Field
                          name={`answearList.${index}.answer`}
                          placeholder="Writen answear"
                          type="text"
                          className={style.input__form}
                        />
                        <ErrorMessage
                          name={`answearList.${index}.answer`}
                          component="div"
                          className="field-error"
                        />
                      </div>
                      <div className="col">
                        <label
                          htmlFor={`answearList.${index}.isRight`}
                          className={style.title}
                        >
                          Right answear
                        </label>

                        <Field
                          type="checkbox"
                          name={`answearList.${index}.isRight`}
                        />
                      </div>
                      <div className="col">
                        <button
                          type="button"
                          className={style.button__delete}
                          onClick={() => remove(index)}
                        >
                          Remove question
                        </button>
                      </div>
                    </div>
                  ))}
                <button
                  type="button"
                  className={style.button__delete}
                  onClick={() =>
                    push({
                      answer: '',
                      isRight: false,
                    })
                  }
                >
                  Add answear
                </button>
              </div>
            )}
          </FieldArray>
          <button type="submit" className={style.button__delete}>
            Add question
          </button>
        </Form>
      )}
    </Formik>
  );
};

export default QuestionForm;
