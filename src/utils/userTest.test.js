import { describe, it, expect } from 'vitest';
import { sortUsers } from './sortedUser';
import { paginateUsers } from './paginateUsers';

describe('sortUsers', () => {
  const users = [{ name: 'Charlie' }, { name: 'Alice' }, { name: 'Bob' }];

  it('sorts users alphabetically when sorted = true', () => {
    const sorted = sortUsers(users, true);
    expect(sorted.map((u) => u.name)).toEqual(['Alice', 'Bob', 'Charlie']);
  });

  it('returns unsorted array when sorted = false', () => {
    const unsorted = sortUsers(users, false);
    expect(unsorted.map((u) => u.name)).toEqual(['Charlie', 'Alice', 'Bob']);
  });
});

describe('paginateUsers', () => {
  const users = Array.from({ length: 5 }, (_, i) => ({ id: i + 1 }));

  it('returns correct users for page 1', () => {
    const paged = paginateUsers(users, 1, 2);
    expect(paged).toEqual([{ id: 1 }, { id: 2 }]);
  });

  it('returns correct users for page 2', () => {
    const paged = paginateUsers(users, 2, 2);
    expect(paged).toEqual([{ id: 3 }, { id: 4 }]);
  });

  it('returns correct users for page 3', () => {
    const paged = paginateUsers(users, 3, 2);
    expect(paged).toEqual([{ id: 5 }]);
  });
});
