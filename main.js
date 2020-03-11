const args = process.argv;

function main() {
  const inValue = parseInt(args[args.length - 1], 10);
  let val = inValue;

  const alphabet = 'ZABCDEFGHIJKLMNOPQRSTUVWXY';

  let outValue = '';


  while (val >= 26) {
    const rest = val % 26;
    outValue = alphabet[rest] + outValue;
    val = Math.floor((val - 1) / 26);
  }

  if (val > 0) {
    outValue = alphabet[val] + outValue;
  }

  return outValue;
}

console.log(main());

