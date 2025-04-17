import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchUsers } from '../store/slices/usersSlice.js';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { Title } from '../styles/Container.js';
import { paginateUsers } from '../utils/paginateUsers.js';
import { sortUsers } from '../utils/sortedUser.js';

const UserList = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 20px;
`;

const User = styled.article`
  display: flex;
  flex-direction: column;
  background-color: #ffffffdd;
  border-radius: 16px;
  background-image: url('/img/user-profile-icon-abstract-digital-design-blue-background-isolated-172062850.webp');
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  padding: 20px;
  backdrop-filter: blur(5px);
  transition: transform 0.2s ease, box-shadow 0.2s ease;

  &:hover {
    transform: translateY(-4px);
    box-shadow: 0 6px 16px rgba(0, 0, 0, 0.15);
  }

  div {
    margin-bottom: 10px;
  }

  a {
    align-self: flex-end;
    margin-top: auto;
    font-weight: bold;
    color: red;
    &:hover {
      color: orange;
    }
  }
`;

const SortButton = styled.button`
  margin-bottom: 15px;
`;

const Pagination = styled.div`
  margin-top: 20px;
  display: flex;
  justify-content: center;
  gap: 8px;
`;

function HomePage() {
  const dispatch = useDispatch();
  const { list, loading, error } = useSelector((state) => state.users);
  const [sorted, setSorted] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const usersPerPage = 2;
  const totalPages = Math.ceil(sortedUsers.length / usersPerPage);
  const sortedUsers = sortUsers(list, sorted);
  const paginatedUsers = paginateUsers(sortedUsers, currentPage, usersPerPage);

  useEffect(() => {
    dispatch(fetchUsers());
  }, [dispatch]);

  return (
    <div style={{ textAlign: 'center' }}>
      <Title>Пользователи</Title>
      <SortButton onClick={() => setSorted(!sorted)}>
        Сортировать по имени
      </SortButton>
      {loading && <p>Загрузка...</p>}
      {error && <p>Ошибка: {error}</p>}
      <UserList>
        {paginatedUsers.map((user) => (
          <User key={user.id}>
            <div>
              <strong>Name:</strong> <em>{user?.name}</em>
            </div>
            <div>
              <strong>Email:</strong> <em>{user?.email}</em>
            </div>
            <div>
              <strong>City:</strong> <em>{user?.address?.city}</em>
            </div>
            <div>
              <Link to={`/${user.id}`}>Подробнее &#10142;</Link>
            </div>
          </User>
        ))}
      </UserList>

      <Pagination>
        {[...Array(totalPages)].map((_, i) => (
          <button
            key={i + 1}
            onClick={() => setCurrentPage(i + 1)}
            style={{
              backgroundColor: currentPage === i + 1 ? '#0254b3' : '#0366d6',
            }}
          >
            {i + 1}
          </button>
        ))}
      </Pagination>
    </div>
  );
}

export default HomePage;
