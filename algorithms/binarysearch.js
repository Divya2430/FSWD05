//O(nlogn)+O(logn)  // array is unsorted
//linearsearchO(n)

function binsearch(arr, search_term) {
    let beg, end, mid, result = -1;
    beg = 0;
    while (beg <= end) {  //[1 2 3 4 5 6 7 8] search_term=3 beg=0 end=7
        console.log("inside while");
        mid = Math.floor((beg + end) / 2);
        if (arr[mid] == search_term) {
            result = mid;
            break;
        }
        else {
            if (arr[mid] > search_term) {
                end = mid - 1;   //beg=0  end=2
            }
            else {
                beg = mid + 1;
            }
        }
    } //while loop ends
    if (result >= 0)
    console.log("Element found at position:" + result);
    else
    console.log("Element is found");
}
binsearch([1,2,3,4,5,6,7,8]);
