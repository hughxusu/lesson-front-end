interface IResponse {
  code: number;
  msg: string;
  [prop: string]: any;
}

let response: IResponse = {
  code: 200,
  msg: 'success',
  data: [
    { id: 10011, username: 'tom' },
    { id: 10012, username: 'jerry' },
  ],
};

console.log(response);
