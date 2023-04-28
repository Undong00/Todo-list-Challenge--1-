import { useParams } from "react-router-dom";

function Detail({ users }) {
  const { id } = useParams();
  const user = users && users.find((user) => user.id === parseInt(id));

  if (!user) {
    return <div>존재하지 않는 페이지입니다.</div>;
  }

  return (
    <div>
      <div>ID: {user.id}</div>
      <div>제목: {user.title}</div>
      <div>내용: {user.body}</div>
    </div>
  );
}

export default Detail;
