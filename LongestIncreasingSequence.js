const getBestSequenceForSubset = (arr, index, previousSequences) => {
  let subsequenceForIndex = [];
  let subsequenceEndValue = arr[index];

  let subArray = arr.slice(0, index);
  subArray.forEach((currentValue, subIndex) => {
    let bestSequenceAtSubIndex = previousSequences[subIndex];

    const isValidSequence = currentValue < subsequenceEndValue;
    const previousSubSequenceIsLonger = bestSequenceAtSubIndex.length > subsequenceForIndex.length;

    if(isValidSequence && previousSubSequenceIsLonger) {
      subsequenceForIndex = bestSequenceAtSubIndex;
    }
  });

  return subsequenceForIndex;
}

module.exports = (arr) => {
  let longestPartialSubsequences = [];
  

  arr.forEach((subSequenceEndValue, index) => {
    const bestSequenceBeforeIndex = getBestSequenceForSubset(arr, index, longestPartialSubsequences);

    longestPartialSubsequences[index] = [...bestSequenceBeforeIndex];
    longestPartialSubsequences[index].push(subSequenceEndValue);
  });

  return longestPartialSubsequences.sort((a, b) => b.length - a.length)[0].length;

};
