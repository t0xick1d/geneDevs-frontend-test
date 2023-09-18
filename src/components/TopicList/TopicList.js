import React from 'react';
import ItemList from './ItemList';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchItem, deleteTopic } from 'redux-store/topic/operations';
import Spinner from 'components/Spiner/Spiner';

import { selectItem, selectisLoading } from 'redux-store/topic/selectors';

import style from './style.module.css';

export default function TopicList() {
  const item = useSelector(selectItem);
  const isLoading = useSelector(selectisLoading);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchItem());
  }, [dispatch]);

  return (
    <>
      <div className={style.title}>Test</div>
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
                topic={e.topic}
                deleteTopic={() => {
                  dispatch(deleteTopic(e._id));
                }}
              />
            );
          })
        )}
      </ul>
    </>
  );
}
