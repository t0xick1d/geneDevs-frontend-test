import { Link } from 'react-router-dom';
import style from './style.module.css';
import DeleteIcon from '@mui/icons-material/Delete';
import IconButton from '@mui/material/IconButton';
import Tooltip from '@mui/material/Tooltip';

function ItemList({ id, topic, deleteTopic }) {
  return (
    <li key={id} className={style.item}>
      <Link to={`question/${id}`}>
        <div>{topic}</div>
      </Link>
      <Tooltip
        title="Delete"
        onClick={() => {
          deleteTopic(id);
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
