export function sortUsers(users, sorted) {
  return [...users].sort((a, b) => (sorted ? a.name.localeCompare(b.name) : 0));
}
