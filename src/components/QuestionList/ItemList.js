import style from './style.module.css';

function ItemList({ id, question, answearList = [], deleteTopic }) {
  return (
    <li key={id} className={style.item}>
      <div>{question}?</div>

      {answearList.map((e, i) => {
        return (
          <div>
            {i + 1}, {e.answer}
          </div>
        );
      })}
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
