enum Gender {
  Female,
  Male,
}

let gender: Gender = Gender.Female;
console.log(gender);
console.log(Gender[1]);

enum Conntatus {
  OFFLINE = 1,
  ONLINE,
  DELETED,
}

let status: Conntatus = Conntatus.ONLINE;
console.log(status);

enum Color {
  Red = 'red',
  Green = 'green',
  Blue = 'blue',
}

let color: Color = Color.Red;
console.log(color);
