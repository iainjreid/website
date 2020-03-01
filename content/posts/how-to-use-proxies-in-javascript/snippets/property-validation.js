const shape = new Proxy({}, {
  set: (obj, prop, value) => {
    if (prop === 'sides') {
      if (!(value > 0)) {
        throw Error('Property "sides" must be greater than zero');
      }
    }

    // Set the value
    obj[prop] = value;

    // Return success
    return true
  }
});

shape.sides = 4; // Works - 4

shape.sides = 0; // Error - Property "sides" must be greater than zero
