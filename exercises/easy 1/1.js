for (var i = 1; i <= 99; i += 2) {
  console.log(i);
}

for (var i = 1; i < 100; i++) {
  if (i % 2 == 0) {
    continue;
  } else {
    console.log(i);
  }
}