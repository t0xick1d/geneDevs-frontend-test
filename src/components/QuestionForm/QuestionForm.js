import { useParams } from 'react-router-dom';
import { useAddQuestionMutation } from 'redux-store/question/questionApi';
import { Formik, Field, Form, ErrorMessage, FieldArray } from 'formik';
import * as Yup from 'yup';
import { Button, TextField, Checkbox } from '@mui/material';

import style from './style.module.css';

const QuestionForm = () => {
  const { idTopic } = useParams();
  const [addQuestion] = useAddQuestionMutation();

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

  const onSubmitAddQuestionorm = (values, actions) => {
    console.log(values);
    addQuestion(values);
    actions.resetForm();
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={onSubmitAddQuestionorm}
    >
      {({ values }) => (
        <Form>
          <div className={style.container}>
            <label htmlFor="Question" className={style.title}>
              Question
            </label>
            <div className={style.container2}>
              <Field
                as={TextField}
                id="question"
                name="question"
                label="Add question"
                variant="standard"
                fullWidth
                color="primary"
                placeholder="Write question"
                className={style.input__form}
              />
              <Button
                type="submit"
                variant="outlined"
                // className={style.button__delete}
              >
                Add question
              </Button>
            </div>
          </div>

          <FieldArray name="answearList">
            {({ insert, remove, push }) => (
              <div>
                {values.answearList.length > 0 &&
                  values.answearList.map((answear, index) => (
                    <div className="row" key={index}>
                      <div className={style.conteiner2}>
                        <label
                          htmlFor={`answearList.${index}.answer`}
                          className={style.title}
                        >
                          Answear
                        </label>
                        <Field
                          as={TextField}
                          label="Add answear"
                          name={`answearList.${index}.answer`}
                          placeholder="Writen answear"
                          type="text"
                          variant="standard"
                          fullWidth
                          color="primary"
                          className={style.input__form}
                        />
                        <ErrorMessage
                          name={`answearList.${index}.answer`}
                          component="div"
                          className="field-error"
                        />
                      </div>
                      <div className={style.conteiner2}>
                        <Field
                          as={Checkbox}
                          type="checkbox"
                          name={`answearList.${index}.isRight`}
                        />
                        <label
                          htmlFor={`answearList.${index}.isRight`}
                          className={style.title}
                        >
                          Right answear
                        </label>
                        <Button
                          type="button"
                          className={style.button__delete}
                          onClick={() => remove(index)}
                        >
                          Remove answear
                        </Button>
                      </div>
                    </div>
                  ))}
                <Button
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
                </Button>
              </div>
            )}
          </FieldArray>
        </Form>
      )}
    </Formik>
  );
};

export default QuestionForm;
