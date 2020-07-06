module.exports = (arr) => {
  const sequences = [];
  arr.forEach((sequenceNumber) => {
    let existingSequence = false;
    sequences.forEach((sequence) => {
      if(sequence.previousNumber < sequenceNumber){
        sequence.previousNumber = sequenceNumber
        sequence.length++;
        existingSequence = true;
      }
    })


    if(!existingSequence){
      sequences.push({
        length: 1,
        previousNumber: sequenceNumber,
      });
    }
  });

  return Object.values(sequences).sort((a, b) =>  b.length - a.length)[0].length;
}
