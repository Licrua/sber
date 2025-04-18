import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router';
import { fetchUsers } from '../store/slices/usersSlice';
import { fetchCommentsByUser } from '../store/slices/commentsSlice';
import styled from 'styled-components';

const Comment = styled.div`
  background: #fff;
  padding: 10px;
  margin-bottom: 10px;
  border-radius: 6px;
`;

const ReturnCross = styled.button `
	all: unset;
	font-size: 20px;
	position: absolute;
	top: 10px;
	right: 20px;
`


function UserPage() {
  const navigate = useNavigate();
  const { id } = useParams();
  const dispatch = useDispatch();
  const user = useSelector((state) =>
    state.users.list.find((u) => u.id === Number(id))
  );
  const {
    list: comments,
    loading,
    error,
  } = useSelector((state) => state.comments);

  useEffect(() => {
    if (!user) dispatch(fetchUsers());
    dispatch(fetchCommentsByUser(id));
  }, [dispatch, id]);

	
  return (
    <div>
      <h1>Профиль пользователя</h1>
      {user && (
        <div>
          <p>
            <strong>Имя:</strong> {user.name}
          </p>
          <p>
            <strong>Телефон:</strong> {user.phone}
          </p>
          <p>
            <strong>Сайт:</strong> {user.website}
          </p>
          <p>
            <strong>Адрес:</strong> {user.address.city}, {user.address.street}
          </p>
        </div>
      )}
      <button onClick={() => dispatch(fetchCommentsByUser(id))}>
        Обновить комментарии
      </button>
      <ReturnCross onClick={() => navigate(-1)}>✗</ReturnCross>
      <h2>Комментарии</h2>
      {loading && <p>Загрузка...</p>}
      {error && <p>Ошибка: {error}</p>}
      {comments.map((comment) => (
        <Comment key={comment.id}>
          <p>
            <strong>{comment.name}</strong>
          </p>
          <p>{comment.body}</p>
        </Comment>
      ))}
    </div>
  );
}

export default UserPage;
