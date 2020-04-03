//I read your book its just awesome....
//Actually this program was not giving the correct output now i solved the issue ...its working fine now.
//Thanks

function findSumBetter(arr, weight) {
  var hashtable = {};

  for (var i = 0, arrLength = arr.length; i < arrLength; i++) {
    var currentElement = arr[i],
      difference = weight - currentElement;

    // check the right one already exists
    if (hashtable[difference] != undefined) {
      return [i, hashtable[weight - currentElement]];
    } else {
      // store index
      hashtable[currentElement] = i;
    }
  }
  return -1;
}

console.log("Result is:" + findSumBetter([1, 2, 3, 4, 5], 9));  //Result is:4,3
