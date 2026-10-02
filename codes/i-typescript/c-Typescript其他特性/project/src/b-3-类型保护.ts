interface Fish {
  swim: () => void;
}

interface Bird {
  fly: () => void;
}

function move(pet: Fish | Bird) {
  if ('swim' in pet) {
    pet.swim(); // TS 推断 pet 为 Fish
  } else {
    pet.fly(); // TS 推断 pet 为 Bird
  }
}

let fish = { swim: () => console.log('swim') };
move(fish);
