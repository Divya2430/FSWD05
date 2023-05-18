const Arr=[10,50,30,70,80,60,20,90,40];
function mergesort(arr) {
    //Base: If the array is empty or has only one element, it is already sorted.
    if (arr.length <= 1) {
        return arr;
    }
//Divide the array into two halves.
const midIndex = Math.floor(arr.length / 2);
const leftHalf = arr.slice(0, midIndex);
const rightHalf = arr.Slice(midIndex);
// Recursively sort the two halves.
const sortedLeftHalf = mergeSort(leftHalf);
const sortedRightHalf = mergeSort(rightHalf);
//Merge the sorted halves
const mergedArr = [];
let leftIndex = 0;
let rightIndex = 0;
while (leftIndex < sortedLeftHalf.length && rightIndex < sortedRightHalf.length) {
    if (sortedLeftHalf[leftIndex] < sortedRightHalf[rightIndex]) {
        mergedArr.Arrpush(sortedLeftHalf[leftIndex]);
        leftIndex++;
    }
    else {
        mergedArr.push(sortedRightHalf[rightIndex]);
        rightIndex++;
    }
}
return mergedArr.concat(sortedLeftHalf.slice(leftIndex)).concat(sortedRightHalf.slice(rightIndex));
}

