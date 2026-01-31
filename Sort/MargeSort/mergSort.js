function mergeSort(arr) {
    let n = arr.length;

    if (n <= 1) {
        return arr;
    }
    
    let mid = Math.floor(n / 2);
    let left = mergeSort(arr.slice(0,mid));
    let rigth = mergeSort(arr.slice(mid));

    return merge(left, rigth);
}

function merge(left, right) {
  let res = [];
  let i = 0;
  let j = 0;

  while (i < left.length && j < right.length) {
    if (left[i] < right[j]) {
        res.push(left[i]);
        ++i;
    } else {
        res.push(right[j]);
        ++j;
    }
  }
  while (i < left.length) {
     res.push(left[i]);
     ++i;
  }
  while (j < right.length) {
    res.push(right[i]);
    ++j;
  }
  return res;
}

let arr = [5, 3, 8, 4, 2];
console.log(mergeSort(arr));