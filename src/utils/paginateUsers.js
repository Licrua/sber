export function paginateUsers(users, currentPage, usersPerPage) {
  const start = (currentPage - 1) * usersPerPage;
  return users.slice(start, start + usersPerPage);
}
