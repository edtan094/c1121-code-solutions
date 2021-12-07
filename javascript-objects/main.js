var student = {
  firstName: 'Edwin',
  lastName: 'Tan',
  age: 27
};

var fullName = student.firstName + student.lastName;
console.log('fullName:', fullName);

student.livesInIrvine = false;
student.previousOccupation = 'Account Manager';
console.log('student', student.livesInIrvine);
console.log('student', student.previousOccupation);

var vehicle = {
  make: 'Honda',
  model: 'Civic',
  year: 2013
};
vehicle['color'] = 'gray';
vehicle['isConvertible'] = false;
console.log('vehicle color', vehicle.color);
console.log('vehicle isConvertible', vehicle.isConvertible);
console.log('vehicle', vehicle);

var pet = {
  name: 'Odin',
  type: 'Dog'
};
delete pet.name;
delete pet.type;
console.log('pet:', pet);
