import { useState } from "react";
import React from "react";
import { Link } from "react-router-dom";
function Home() {
  const [users, setUsers] = useState([
    { id: 1, title: "투두챌린지", body: "투두", isDone: false },
  ]);
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");

  const titlechange = (e) => {
    setTitle(e.target.value);
  };

  const bodychange = (e) => {
    setBody(e.target.value);
  };

  const addBtn = () => {
    const newUsers = {
      id: users.length + 1,
      title: title,
      body: body,
      isDone: false,
    };
    setUsers([...users, newUsers]);
    setTitle("");
    setBody("");
  };

  const delBtn = (id) => {
    const delUser = users.filter((user) => user.id !== id);
    setUsers(delUser);
  };

  const toggleBtn = (id, isDone) => {
    const updateUser = users.map((user) =>
      user.id === id ? { ...user, isDone: !isDone } : user
    );
    setUsers(updateUser);
  };

  return (
    <div>
      <div>Todo Chellenge</div>
      <div>
        제목
        <input type="text" value={title} onChange={titlechange} />
      </div>
      <div>
        내용
        <input type="text" value={body} onChange={bodychange} />
      </div>
      <button onClick={addBtn}>추가하기</button>
      <div>
        <h1>working</h1>
        {users
          .filter((user) => user.isDone === false)
          .map((user) => {
            return (
              <div key={user.id}>
                <Link to={`/detail/${user.id}`}>상세보기</Link>
                <div>제목 : {user.title}</div>
                <div>내용 : {user.body}</div>
                <button onClick={() => delBtn(user.id)}>삭제하기</button>
                <button onClick={() => toggleBtn(user.id, user.isDone)}>
                  {user.isDone ? "취소하기" : "완료하기"}
                </button>
              </div>
            );
          })}
      </div>
      <div>
        <h1>Done</h1>
        {users
          .filter((user) => user.isDone === true)
          .map((user) => {
            return (
              <div key={user.id}>
                <Link to={`/detail/${user.id}`}>상세보기</Link>
                <div>제목 : {user.title}</div>
                <div>내용 : {user.body}</div>
                <button onClick={() => delBtn(user.id)}>삭제하기</button>
                <button onClick={() => toggleBtn(user.id, user.isDone)}>
                  {user.isDone ? "취소하기" : "완료하기"}
                </button>
              </div>
            );
          })}
      </div>
    </div>
  );
}

export default Home;
