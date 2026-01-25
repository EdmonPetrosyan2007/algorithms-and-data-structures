#include <stdio.h>

int binarySearch(int arr[], int n, int target) {
  int left = 0;
  int right = n - 1;

  while (left <= right) {
    int mid = ((left + right) / 2);

    if (arr[mid] == target) {
        return mid;
    }

    if (arr[mid] < target) {
        left = mid + 1;
    } else {
        right = mid - 1;
    }
  }
  return -1;
}

int main() {
    int arr[] = {11, 12, 22, 25, 34, 64, 90};
    int target = 22;
    int n = sizeof(arr) / sizeof(arr[0]);
    int index = binarySearch(arr, n, target);

    if (index == -1) {
        printf("Element not found\n");
    } else {
        printf("Element found at index %d\n", index);
    }

    return 0;
}