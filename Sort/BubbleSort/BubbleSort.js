function bubbleSort(arr) {
    let size = arr.length;
    for (let i = 0; i < size - 1; ++i) {
        for (let j = 0; j < size - i - 1; ++j) {
            if (arr[j] > arr[j + 1]) {
                let temp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = temp;
            }   
        }
    }
}


let array = [64, 34, 25, 12, 22, 11, 90];
console.log("original array: " + array);
bubbleSort(array);
console.log("corrected array: " + array);