const upperCaseFirstLetters = (string) => {
  if (string === '') {
    return '';
  }
  var string = string.toLowerCase();
  var strArr = string.split(' ');
  var upperCaseArr = strArr.map(word => {
    return word[0].toUpperCase() + word.substring(1);
  })
  var result = upperCaseArr.join(' ');
  return result;
}

export default upperCaseFirstLetters;