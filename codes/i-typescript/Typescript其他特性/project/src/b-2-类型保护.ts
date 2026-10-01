class Dog {
  bark() {
    console.log('Woof!');
  }
}
class Cat {
  meow() {
    console.log('Meow!');
  }
}

function makeSound(animal: Dog | Cat) {
  if (animal instanceof Dog) {
    animal.bark();
  } else {
    animal.meow();
  }
}

let dog = new Dog();
makeSound(dog);
