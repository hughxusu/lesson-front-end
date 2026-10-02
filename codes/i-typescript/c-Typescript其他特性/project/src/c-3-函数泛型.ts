function getIntersection<T>(arr1: T[], arr2: T[]): T[] {
  const set2 = new Set(arr2);
  return arr1.filter((item) => set2.has(item));
}

const listA = [1, 2, 3, 4];
const listB = [3, 4, 5, 6];
const intersection = getIntersection(listA, listB);
console.log(intersection);
