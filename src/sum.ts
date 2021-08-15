export default function sum(...numbers: number[]) {
  return numbers.reduce((previousValue, currentValue) => previousValue + currentValue, 0)
}
