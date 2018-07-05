function swapName(name) {
  return name.split(' ').reverse().join(', ');
}

swapName('Joe Roberts');    // "Roberts, Joe"
