function ExampleConstructor() {}
console.log('prototype of ExampleConstructor: ', ExampleConstructor.prototype);
console.log('typeof ExampleConstructor: ', typeof ExampleConstructor);

var myFunction = new ExampleConstructor();
console.log('new ExampleConstructor: ', myFunction);
var instanceOfMyFunction = myFunction instanceof ExampleConstructor;
console.log('instanceof ExampleConstructor: ', instanceOfMyFunction);
