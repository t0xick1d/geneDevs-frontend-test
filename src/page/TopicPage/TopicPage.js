import { useState } from 'react';
import TopicList from '../../components/TopicList/TopicList';
import {
  useAddTopicMutation,
  useGetTopicQuery,
} from 'redux-store/topic/topicApi';

import style from './style.module.css';

const TopicPage = () => {
  const [addTaskSwitch, setAddTaskSwitch] = useState(true);
  const [name, setName] = useState('');

  const { data } = useGetTopicQuery();
  const [addTopic] = useAddTopicMutation();

  const onSubmitForm = e => {
    e.preventDefault();

    const formTopic = e.currentTarget.topic.value;

    if (data.filter(e => e.topic === formTopic).length !== 0) {
      alert(`${formTopic} is already in topic.`);
      return;
    }
    const topicInfo = {
      topic: formTopic,
    };
    addTopic(topicInfo);
    reset();
  };
  const reset = () => {
    setName('');
  };

  const swithAddFunc = () => {
    setAddTaskSwitch(!addTaskSwitch);
  };
  return (
    <div>
      {addTaskSwitch ? (
        <button onClick={swithAddFunc} className={style.button__delete}>
          Add test
        </button>
      ) : (
        <div>
          <form onSubmit={onSubmitForm} className={style.container}>
            <input
              type="text"
              name="topic"
              required
              value={name}
              onChange={e => {
                setName(e.target.value);
              }}
              className={style.input__form}
            />
            <button type="submit" className={style.button__delete}>
              Add test
            </button>
          </form>
          <button onClick={swithAddFunc} className={style.button__delete}>
            Cancel
          </button>
        </div>
      )}

      <TopicList />
    </div>
  );
};

export default TopicPage;
