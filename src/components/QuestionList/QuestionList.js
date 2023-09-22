import React from 'react';
import { useParams } from 'react-router-dom';
import ItemList from './ItemList';
import {
  useGetQuestionQuery,
  useDeleteQuestionMutation,
} from 'redux-store/question/questionApi';
import Spinner from 'components/Spiner/Spiner';

import style from './style.module.css';

const QuestionList = () => {
  const { idTopic } = useParams();

  const { data, isLoading } = useGetQuestionQuery(idTopic);
  const [deleteContact] = useDeleteQuestionMutation();

  return (
    <div>
      <ul className={style.list}>
        {isLoading ? (
          <div className={style.title}>
            <Spinner />
          </div>
        ) : (
          data &&
          data.map(e => {
            return (
              <ItemList
                key={e._id}
                id={e._id}
                question={e.question}
                answearList={e.answearList}
                deleteTopic={() => {
                   deleteContact(e._id);
                }}
              />
            );
          })
        )}
      </ul>
    </div>
  );
};

export default QuestionList;
