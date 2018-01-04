// DO NOT EDIT async function that gets the first word and passes it to its callback
function getFirstWord(callback) {
  setTimeout(function() {
    callback('Async ');
  }, 90);
};

// DO NOT EDIT async function that gets the second word and passes it to its callback
function getSecondWord(callback) {
  setTimeout(function() {
    callback('is ');
  }, 30);
};

// DO NOT EDIT async function that gets the third word and passes it to its callback
function getThirdWord(callback) {
  setTimeout(function() {
    callback('awesome.');
  }, 60);
};

// use the above functions to complete the sentence and pass it to this function's callback
function getSentence(callback) {
  // CODE HERE
  getFirstWord(function(err, callback) {
    getSecondWord(function(err, callback) {
      getThirdWord(function(err, callback) {
        console.log('callback', callback);
      })
    })
  })
}

module.exports = getSentence;