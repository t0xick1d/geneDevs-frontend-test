import { useState } from 'react';
import TopicList from '../../components/TopicList/TopicList';
import {
  useAddTopicMutation,
  useGetTopicQuery,
} from 'redux-store/topic/topicApi';

import style from './style.module.css';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';

import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';
import { Container } from '@mui/material';

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
        <Button onClick={swithAddFunc} variant="outlined">
          Add test
        </Button>
      ) : (
        <Container
          fixed
          sx={{
            width: 300,
            alignItems: 'center',
          }}
        >
          <Stack
            spacing={{ xs: 1, sm: 1 }}
            direction="column"
            useFlexGap
            flexWrap="wrap"
          >
            <form onSubmit={onSubmitForm} className={style.container}>
              {/* <Item> */}
              <TextField
                id="outlined-basic"
                label="Add topic"
                variant="outlined"
                type="text"
                name="topic"
                className={style.input__form}
                required
                value={name}
                onChange={e => {
                  setName(e.target.value);
                }}
              />
              <Button
                type="submit"
                variant="outlined"
                className={style.button__delete}
              >
                Add test
              </Button>
              {/* </Item> */}
            </form>
            <Button variant="contained" onClick={swithAddFunc}>
              Cancel
            </Button>
          </Stack>
        </Container>
      )}

      <TopicList />
    </div>
  );
};

export default TopicPage;
