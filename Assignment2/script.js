const mergeSort = (arr) => {
  const length = arr.length;
  const half = Math.ceil(length / 2);
  let leftArr = arr.slice(0, half);
  let rightArr = arr.slice(half);
  let sorted = [];
  if (length > 2) leftArr = mergeSort(leftArr);
  if (length > 2) rightArr = mergeSort(rightArr);
  let i = 0,
    j = 0;
  for (k = 0; k < length; k++) {
    if (!rightArr[j] || leftArr[i] < rightArr[j]) {
      sorted[k] = leftArr[i];
      i += 1;
    } else if (!leftArr[i] || rightArr[j] < leftArr[i]) {
      sorted[k] = rightArr[j];
      j += 1;
    }
  }
  return sorted;
};

console.log(mergeSort([22, 18, 12, -4, 58, 7, 31, 42]));
