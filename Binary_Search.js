// Searches for an item inside an array and if present returns the index number.
// It starts searching from the middle of the list.
// Then if the guess is too low it moves one index up, and if it's too high it moves one index down, until it finds the item.
// If no item is found it returns null.
//
function binarySearch(list, item) {
  let low = 0;
  let high = list.length-1;

  while (low <= high) {
    let mid = Math.floor((low + high)/2);

    if (list[mid] === item) {
      return mid;
    } else if (list[mid] < item) {
      low = mid + 1;
    } else {
    high = mid -1;
    } 
  } 
  return -1;
}

binarySearch([1,3,5,7,9], 3);

console.log(binarySearch([1,3,5,7,9], 3))
