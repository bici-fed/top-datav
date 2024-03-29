export var reviver = function reviver(key, value) {
  if (typeof value === 'string' && value.indexOf('function') !== -1) {
    var functionTemplate = "(".concat(value, ")");
    return eval(functionTemplate);
  }

  return value;
};
export var replacer = function replacer(key, value) {
  // if we get a function, give us the code for that function
  if (typeof value === 'function') {
    return value.toString();
  }

  return value;
};