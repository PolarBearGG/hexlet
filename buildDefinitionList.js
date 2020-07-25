/* eslint no-restricted-syntax: ["off", "ForOfStatement"] */

// BEGIN (write your solution here)
const buildDefinitionList = (arr) => {
    const array = [];
    if (arr.length === 0) {
      return '';
    }
    array.push('<dl>');
    for (let i = 0; i < arr.length; i += 1) {
      array.push(`<dt>${arr[i][0]}</dt><dd>${arr[i][1]}</dd>`);
    }
    array.push('</dl>');
    return array.join('');
  };
  export default buildDefinitionList;
  // END
  