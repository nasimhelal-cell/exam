function binarySearch(Array, searchElement) {
  let low = 0,
    high = Array.length - 1;
  let mid = Math.floor((low + high) / 2);

  while (low <= high) {
    if (Array[mid] === searchElement) return mid;
    else if (Array[mid] > searchElement) {
      low = mid + 1;
    } else {
      high = mid - 1;
    }
  }
  return -1;
}
let unsortedArray = [2, 4, 6, 8, 11, 15, 18, 19, 21, 90];
console.log(binarySearch(unsortedArray, 11));

//time complexity for average case O(log n)
//time complexity for best case O(1)
