function digitList(number) {
  return String(number).split('').map( function(element) {
    return Number.parseInt(element, 10);
  })
}