function cumulativeCountingSort(arr) {
    let max = Math.max(...arr);
    let count = new Array(max + 1).fill(0);
    for (let num of arr) {
        count[num]++;
    }

    for (let i = 1; i < count.length; i++) {
        count[i] += count[i - 1];
    }

    let output = new Array(arr.length);

    for (let i = arr.length - 1; i >= 0; i--) {
        let num = arr[i];
        count[num]--;
        output[count[num]] = num;
    }

    return output;
}
console.log(cumulativeCountingSort([4,2,2,8,3,3,1]));
