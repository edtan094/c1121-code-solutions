function graduate(credentials) {
  return function innerFunction(fullName) {
    return fullName + ',' + credentials;
  };
}

const medicalSChool = graduate('M.D.');
const lawSchool = graduate('Esq.');

console.log(medicalSChool('Edwin Tan'));
console.log(lawSchool('Edwin Tan'));
