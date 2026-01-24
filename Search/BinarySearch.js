function binarySearch(arr, target) {
    let n = arr.length;
    let start = 0;
    let end = n - 1;
    
    while (start <= end) {
        let mid = Math.floor((start + end) / 2);

        if (arr[mid] === target) {
            return mid;
        }

        if (arr[mid] < target) {
            start = mid + 1;
        }

        else {
            end = mid - 1;
        }
    }
    return -1;
}

let array = [2, 3, 4, 10, 40];
let target = 10;
console.log(binarySearch(array, target));
