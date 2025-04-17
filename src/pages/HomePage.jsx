import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchUsers } from '../store/slices/usersSlice.js';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const UserList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

const SortButton = styled.button`
  margin-bottom: 15px;
`;

function HomePage() {
  const dispatch = useDispatch();
  const { list, loading, error } = useSelector((state) => state.users);
  const [sorted, setSorted] = useState(false);

  useEffect(() => {
    dispatch(fetchUsers());
  }, [dispatch]);

  const sortedUsers = [...list].sort((a, b) =>
    sorted ? a.name.localeCompare(b.name) : 0,
  );

  return (
    <div>
      <h1>Пользователи</h1>
      <SortButton onClick={() => setSorted(!sorted)}>
        Сортировать по имени
      </SortButton>
      {loading && <p>Загрузка...</p>}
      {error && <p>Ошибка: {error}</p>}
      <UserList>
        {sortedUsers.map((user) => (
          <Link key={user.id} to={`/${user.id}`}>
            {user.name} ({user.email}) — {user.address.city}
          </Link>
        ))}
      </UserList>
    </div>
  );
}

export default HomePage;
