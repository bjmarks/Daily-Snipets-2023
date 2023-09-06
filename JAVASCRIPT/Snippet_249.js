const person = {
    fullName: function(city, country) {
      return `${this.firstName} ${this.lastName}, ${city}, ${country}`;
    }
  }
  const person1 = {
    firstName:"John",
    lastName: "Doe"
  }
let test = person.fullName.apply(person1, ["Oslo", "Norway"]);// In this example the fulllName method of person is applied on person1