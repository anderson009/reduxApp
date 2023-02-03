import React, { useState } from "react";
import { useGetTodosQuery, useGetTodoQuery } from "./store/apis/TodoApi";

const TodoApp = () => {
  // const {data = [], isLoading} = useGetTodosQuery()
  const [page, setPage] = useState(1);
  const { data, isLoading } = useGetTodoQuery(page);

  const y = () => {
    setPage( page + 1)
  }

  const t = () => {
    setPage( page - 1)
    console.log(page);
  }


  return (
    <>
      <h1>todos - RTK query</h1>
      <hr />
      <h4>isLoading{isLoading ? "true" : "false"}</h4>
      <pre>{JSON.stringify(data)}</pre>
      {/* <ul>
        {data.map( e => (
            <li>{e.title}</li>
        ))}
      </ul> */}
      <button onClick={() => y()}>Next todo</button>

      <button onClick={() => t()}>Prev todo</button>
    </>
  );
};

export default TodoApp;
