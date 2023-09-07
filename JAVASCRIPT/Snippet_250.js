const person = {
    fullName: function(city, country) {
      return this.firstName + " " + this.lastName + "," + city + "," + country;
    }
  }
  const person1 = {
    firstName:"John",
    lastName: "Doe"
  }
  let test = person.fullName.call(person1, "Oslo", "Norway");// This example calls the fullName method of person, using it on person1