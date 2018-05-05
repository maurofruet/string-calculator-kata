import add from "./string-calculator/string-calculator";

const args = process.argv.slice(2);

if (args.length === 1) {
  const numbers = args[0];
  let sum = add(numbers);
  console.log(`The sum of numbers '${numbers}' is ${sum}`);
} else {
  console.error("You have to specify exactly one parameter");
}
