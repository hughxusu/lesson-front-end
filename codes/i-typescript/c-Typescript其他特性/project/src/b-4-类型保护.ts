let users = [
  { id: 10012, name: '张三' },
  { id: 10023, name: '李四' },
  { id: 10034, name: '王五' },
];

function modifyArray(users: { id: number; name: string }[]) {
  if (users.length > 0) {
    users[0]!.name += '~~~~';
  }
}

console.log(users);
modifyArray(users);
console.log(users);
