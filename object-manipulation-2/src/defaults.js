/* exported defaults */
// function: defaults
// argument: target - any javascript object
//          source - nay javascript object
// return: This function does not return anything, but it does modify target.
// function will: Assigns properties of source object to the target object for all properties that are not defined on target.

// take the source object and put the the property keys and values into an a new array. each property key and value will be its own separate item
// if the property key does not equal undefined when paired with the target object, add this property key and value to the target object
// do not return anything. the target object will be modified

function defaults(target, source) {
  for (var propInSource in source) {
    if (source[propInSource] !== target[propInSource]) {
      target[propInSource] = source[propInSource];
    }
  }
  return target;

}

// function defaults(target, source) {
//   for (var propInSource in source) {
//     for (var propInTarget in target) {
//       if (source[propInSource] !== target[propInSource] && propInSource !== propInTarget) {
//         target[propInSource] = source[propInSource];
//       }
//     }

//   }
//   return target;

// }
