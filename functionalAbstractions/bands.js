var bands = [
  { name: 'sunset rubdown', country: 'UK', active: false },
  { name: 'women', country: 'Germany', active: false },
  { name: 'a silver mt. zion', country: 'Spain', active: true },
];

function processBands(data) {
  return data.map( function(band) {
    return {
      name: formatBandName(band.name),
      country: 'Canada',
      active: band.active,
    }
  })
}

function formatBandName(name) {
  name = name.replace(/\./g, '');
  return name.split(' ').map ( function(word) {
    return word[0].toUpperCase() + word.slice(1);
  }).join(' ');
}

processBands(bands);

// returns:
[
  { name: 'Sunset Rubdown', country: 'Canada', active: false },
  { name: 'Women', country: 'Canada', active: false },
  { name: 'A Silver Mt Zion', country: 'Canada', active: true },
]
