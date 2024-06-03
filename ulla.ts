interface HasID {
  id: string | number;
}

const myObj2 = <T extends HasID>(arg: T): T => {
  // Perform any additional processing if needed
  return arg;
};
