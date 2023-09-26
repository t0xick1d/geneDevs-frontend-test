import React from 'react';
import ItemList from './ItemList';
import Spinner from 'components/Spiner/Spiner';
import {
  useGetTopicQuery,
  useDeleteTopicMutation,
} from 'redux-store/topic/topicApi';

import style from './style.module.css';

export default function TopicList() {
  const [deleteTopic] = useDeleteTopicMutation();
  const { data, isLoading } = useGetTopicQuery();

  return (
    <>
      <div className={style.title}>Test</div>
      <ul className={style.list}>
        {isLoading ? (
          <div className={style.title}>
            <Spinner />
          </div>
        ) : (
          data.map(e => {
            return (
              <ItemList
                key={e._id}
                id={e._id}
                topic={e.topic}
                deleteTopic={() => {
                  deleteTopic(e._id);
                }}
              />
            );
          })
        )}
      </ul>
    </>
  );
}
