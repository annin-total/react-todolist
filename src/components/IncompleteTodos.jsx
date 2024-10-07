export const IncompleteTodos = (props) => {
  const { incompleteTodos, onClickComplete, onClickDelete } = props;
  return (
    <div className="incomplete-area">
      <p className="title">未完了のToDo</p>
      <ul>
        {incompleteTodos.map((todo, index) => {
          return (
            // keyはreactのDOM生成時に差分だけをレンダリングできるような識別子となるもの。
            // この場合は同じテキストを打つと一意のkeyにならなくなるため本当はあまり良くない
            <li key={todo}>
              <div className="list-row">
                <p className="todo-item">{todo}</p>
                <button onClick={() => onClickComplete(index)}>完了</button>
                <button onClick={() => onClickDelete(index)}>削除</button>
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
};
