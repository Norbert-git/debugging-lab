
function getKittens() {

  const numberOfKittens = Math.floor(math.random() * 10) + 2;
  const kittens = [];

  for (let i = 0; i < numberOfKittens; i++) {
    const width = (Math.floor(Math.random() * 5) + 1) * 100;
    const height = (Math.floor(Math.random() * 5) + 1) * 100;
    kittens.push({
      id: i,
      src: `https://placekitten.com/${width}/${height}`
    });
  }

  return kittens;
}

