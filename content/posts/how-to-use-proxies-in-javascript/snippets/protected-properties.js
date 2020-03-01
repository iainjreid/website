const dog = {
  breed: 'Labrador',
  name: 'Jed',
  age: 7
};

const dogCopy = protectProperties(dog);

dog.breed = 'Poodle'; // Success - We've now got a Poodle

dogCopy.breed = 'Beagle'; // Error - This object is protected


function protectProperties(target) {
  return new Proxy(target, {
    set() {
      throw Error('This object is protected');
    }
  })
}
