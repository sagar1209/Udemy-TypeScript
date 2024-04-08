type Combinable = number|string;
type ConversionDescriptor = 'as-Number' | 'as-text'


function combine(
  n1: Combinable,
  n2: Combinable,
  resultConversion: ConversionDescriptor  // enum datatype use
) {
  let result;
  if (
    (typeof n1 === "number" && typeof n2 === "number") ||
    resultConversion === "as-Number"
  ) {
    result = +n1 + +n2;
  } else {
    result = n1.toString() + n2.toString();
  }
  return result;
}

const combineAges = combine(23, 34, "as-Number");
console.log(combineAges);

const combineStringAges = combine("23", "34", "as-Number");
console.log(combineStringAges);

const combineNames = combine("sagar", "senjaliya", "as-text");
console.log(combineNames);
