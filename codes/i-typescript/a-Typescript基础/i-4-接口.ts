interface Json {
  [key: string]: string | number | boolean | null | Json;
}

interface User extends Json {
  id: number;
  username: string;
}

let owner: User = {
  id: 10011,
  username: 'tom',
  password: '123456',
  email: 'tom@example.com',
  isAdmin: true,
  phone: '13800000000',
  address: null,
  area: {
    country: 'China',
    city: 'Beijing',
    district: 'Dongcheng',
  },
  favoriteSports: ['basketball', 'football'],
};

console.log(owner);
