import { Link } from 'react-router-dom';
import style from './style.module.css';

function ItemList({ id, topic, deleteTopic }) {
  return (
    <li key={id} className={style.item}>
      <Link to={`question/${id}`}>
        <div>{topic}</div>
      </Link>
      <button
        className={style.button__delete}
        onClick={() => {
          deleteTopic(id);
        }}
      >
        {' '}
        Delete{' '}
      </button>
    </li>
  );
}

export default ItemList;
