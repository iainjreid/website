const dog = defaultProperties({
  breed: 'Dachshund',
  name: 'Sam',
  age: 3
}, 'empty');

console.log(dog.name) // 'Sam'

console.log(dog.foodBowl) // 'Empty'

function defaultProperties(target, fallback) {
  return new Proxy(target, {
    get(obj, prop) {
    	return prop in obj
      	? obj[prop]
        : fallback;
  	}
  })
}
