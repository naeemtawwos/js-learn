const person = {
    firstName : 'Umar',
    lastName: 'Khathaab',
    age: '64',
    hobbies: ['justice', 'manhood'],
    address: {
        city: 'madeenah',
        state: 'hijaaz',
    },
    getQualities: function(){
        return this.hobbies
    }
}

let val;
val = person.firstName;
val = person['firstName']
val = person.hobbies[1]
val = person.address.state
val = person.getQualities()
console.log(val)
