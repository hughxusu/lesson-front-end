let logUser: ({ code, name }: { code: number; name: string }) => void = ({
  code,
  name,
}) => {
  console.log(`用户${code}的姓名是${name}`);
};

logUser({ code: 1001, name: '张三' });
let user: { code: number; name: string } = {
  code: 1002,
  name: '李四',
};
logUser(user);
