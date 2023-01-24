let firstArray = [1, 4, 5, 7, 8, 10];
let secondArray = [2, 3, 5, 7, 14, 18];
//coherrence maker function
function coherrence(firstArray, secondArray) {
  let coherrenceArray = [];

  for (let i = 0; i < firstArray.length; i++) {
    if (i >= 2 && i <= 3) i += 2;
    coherrenceArray.push(firstArray[i]);
  }
  for (let i = 0; i < secondArray.length; i++) {
    if (i >= 2 && i <= 3) i += 2;
    coherrenceArray.push(secondArray[i]);
  }
  return coherrenceArray;
}
console.log(coherrence(firstArray, secondArray));
//time complexity O(n)
//space complexity O(n)

//bubble sort

function bubbleSort(a) {
  for (i = 0; i < a.length; i++) {
    for (j = 0; j < a.length - 1 - i; j++) {
      if (a[j] > a[j + 1]) {
        [a[j + 1], a[j]] = [a[j], a[j + 1]];
      }
    }
  }
  return a;
}
//in here time complexity is O(n^2)
//in here space complexity is O(n)
console.log(bubbleSort(coherrence(firstArray, secondArray)));
