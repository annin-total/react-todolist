import { useState } from "react";
import { InputTodo } from "./components/InputTodo";
import { IncompleteTodos } from "./components/IncompleteTodos";
import { CompleteTodos2 } from "./components/CompleteTodos2";
import "./styles.css";

export const Todo = () => {
  const [todoText, setTodoText] = useState("");
  const [incompleteTodos, setIncompleteTodos] = useState([]);
  const [completeTodos, setCompleteTodos] = useState([]);

  const onChangeTodoText = (event) => {
    // return event.target.value;
    setTodoText(event.target.value);
  };

  const onClickAdd = () => {
    if (todoText === "") {
      alert("何も入力されていません！");
    } else {
      // 入力された<input value={todoText}>をincompleteTodosに追加
      const newTodos = [...incompleteTodos, todoText];
      setIncompleteTodos(newTodos);
      // Todoを空に戻す
      setTodoText("");
    }
  };

  // 削除ボタンのところ：レンダリングは{}で囲まれたjsコードを全て実行するので、onClickイベントであってもループの数だけ{}の関数が実行されてしまう。
  // そこで、内に「() =>function」を使うことでレンダリング時のループ実行を防げる。
  const onClickDelete = (index) => {
    // alert(index);
    const newTodos = incompleteTodos.filter((todo, i) => i !== index);
    setIncompleteTodos(newTodos);
  };

  const onClickComplete = (index) => {
    // 未完了のTodoから削除
    const newIncompleteTodos = incompleteTodos.filter((todo, i) => i !== index);
    setIncompleteTodos(newIncompleteTodos);
    // 完了のTodoに追加
    const newConpleteTodos = [...completeTodos, incompleteTodos[index]];
    setCompleteTodos(newConpleteTodos);
  };

  const onClickBack = (index) => {
    const newCompleteTodos = completeTodos.filter((todo, i) => i !== index);
    setCompleteTodos(newCompleteTodos);
    const newInconpleteTodos = [...incompleteTodos, completeTodos[index]];
    setIncompleteTodos(newInconpleteTodos);
  };

  return (
    <>
      <div className="body-react">
        <h1>ToDoリスト</h1>
        <InputTodo
          todoText={todoText}
          onChange={onChangeTodoText}
          onClick={onClickAdd}
        />
        <IncompleteTodos
          incompleteTodos={incompleteTodos}
          onClickComplete={onClickComplete}
          onClickDelete={onClickDelete}
        />
        <CompleteTodos2
          completeTodos={completeTodos}
          onClickBack={onClickBack}
        />
      </div>
    </>
  );
};
