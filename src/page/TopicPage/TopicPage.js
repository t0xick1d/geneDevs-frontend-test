import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addTopic } from 'redux-store/topic/operations';
import { selectItem } from 'redux-store/topic/selectors';
import TopicList from '../../components/TopicList/TopicList';

import style from './style.module.css';

const TopicPage = () => {
  const [addTaskSwitch, setAddTaskSwitch] = useState(true);
  const item = useSelector(selectItem);
  const [name, setName] = useState('');
  const dispatch = useDispatch();

  const onSubmitForm = e => {
    e.preventDefault();

    const formTopic = e.currentTarget.topic.value;

    if (item.filter(e => e.name === formTopic).length !== 0) {
      alert(`${formTopic}is already in contacts.`);
      return;
    }
    const topicInfo = {
      topic: formTopic,
    };
    dispatch(addTopic(topicInfo));
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
        <button onClick={swithAddFunc}>Add test</button>
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
            <button type="submit" className={style.form__button}>
              Add test
            </button>
          </form>
          <button onClick={swithAddFunc} className={style.form__button}>
            Cancel
          </button>
        </div>
      )}

      <TopicList />
    </div>
  );
};

export default TopicPage;
