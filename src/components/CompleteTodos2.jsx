export const CompleteTodos2 = (props) => {
  const { completeTodos, onClickBack } = props;
  return (
    <div className="complete-area">
      <p className="title">完了のToDo</p>
      <ul>
        {completeTodos.map((todoed, index) => {
          return (
            <li key={todoed}>
              <div className="list-row">
                <p className="todo-item">{todoed}</p>
                <button onClick={() => onClickBack(index)}>戻す</button>
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
};
