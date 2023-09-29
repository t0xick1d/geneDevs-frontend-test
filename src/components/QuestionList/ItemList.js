import style from './style.module.css';
import DeleteIcon from '@mui/icons-material/Delete';
import IconButton from '@mui/material/IconButton';
import Tooltip from '@mui/material/Tooltip';

function ItemList({ id, question, answearList = [], deleteQuestion }) {
  return (
    <li key={id} className={style.item}>
      <div>{question}?</div>

      {answearList.map((e, i) => {
        return (
          <div key={i}>
            {i + 1}, {e.answer}
          </div>
        );
      })}
      <Tooltip
        title="Delete"
        onClick={() => {
          deleteQuestion(id);
        }}
      >
        <IconButton>
          <DeleteIcon />
        </IconButton>
      </Tooltip>
    </li>
  );
}

export default ItemList;
