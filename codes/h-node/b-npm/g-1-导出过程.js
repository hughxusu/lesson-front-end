const PI = 3.1415926;

function getArea(radius) {
  return PI * radius * radius;
}

for (let i = 1; i < 4; i++) {
  console.log(getArea(i));
}

export default getArea;
