// Exclusive OR

function isXor(arg1, arg2) {
  var truthy1 = !!arg1;
  var truthy2 = !!arg2;

  if ((truthy1 && !truthy2) || !truthy1 && truthy2) {
    return true;
  }

  return false;
}