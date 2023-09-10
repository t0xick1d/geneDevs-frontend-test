import React from 'react';
import { useParams } from 'react-router-dom';
import ItemList from './ItemList';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchItem, deleteQuestion } from 'redux-store/question/operations';
import Spinner from 'components/Spiner/Spiner';

import { selectItem, selectisLoading } from 'redux-store/question/selectors';

import style from './style.module.css';

const QuestionList = () => {
  const { idTopic } = useParams();
  const item = useSelector(selectItem);
  const isLoading = useSelector(selectisLoading);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchItem(idTopic));
  }, [dispatch, idTopic]);

  return (
    <div>
      <ul className={style.list}>
        {isLoading ? (
          <div className={style.title}>
            <Spinner />
          </div>
        ) : (
          item.map(e => {
            return (
              <ItemList
                key={e._id}
                id={e._id}
                question={e.question}
                answearList={e.answearList}
                deleteTopic={() => {
                  dispatch(deleteQuestion(e._id));
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
