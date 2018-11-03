// arguments object no longer bound with arrow functions

const add = (a, b) => {
    // console.log(arguments);
    return a + b;
}
console.log(add(55, 1));

// this keyword - no longer bound

const user = {
    name: 'Adam',
    cities: ['Chicago', 'Denver'],
    printPlacesLived() {
        return this.cities.map((city) => this.name + ' has lived in ' + city);

        // this.cities.forEach((city) => {
        //     console.log(this.name + ' has lived in ' + city)
        // });
    }
};

// user.printPlacesLived()
console.log(user.printPlacesLived());


// Challenge

const multiplier = {
    numbers: [1, 2, 3],
    multiplyBy: 2,
    multiply() {
        return this.numbers.map((number) => number * this.multiplyBy);
    }
    // multiplyBy - single number
    // multiply - return a new array where the numbers have been multiplied
};

console.log(multiplier.multiply()); // [1, 2, 3] 2 [2, 4, 6]