function cumulativeCountingSort(arr) {
  if (arr.length <= 1) return arr;

  const max = Math.max(...arr);
  const min = Math.min(...arr);
  const range = max - min + 1;

  const count = new Array(range).fill(0);
  for (const x of arr) count[x - min]++;

  const cum = new Array(range).fill(0);
  cum[0] = count[0];
  for (let i = 1; i < range; i++) {
    cum[i] = cum[i - 1] + count[i];
  }
  const output = new Array(arr.length);
  for (let i = arr.length - 1; i >= 0; i--) {
    const x = arr[i];
    const idx = x - min;
    const pos = cum[idx] - 1;
    output[pos] = x;
    cum[idx]--; 
  }

  return output;
}

console.log(cumulativeCountingSort([4, 2, 2, 8, 3, 3, 1]));