// @flow
type User = { name: string };
type Users = Array<User>;

const renderUsers = (users: Users, index: number) => {
  return users[index]
}

renderUsers( [{name: 'Matt'}], 0 );

