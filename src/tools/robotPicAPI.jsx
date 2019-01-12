var rp = require('request-promise');

var imageRetrieve = function(textForBot){
  
  var options = {
    url: `https://robohash.p.mashape.com/index.php?text=${textForBot}`,
    headers: {
      'X-Mashape-Key': 'rsmP8kcdBfmshtYeUFH15yOZ9LG9p1o9cqOjsntAqjSDseHnbQ',
      'Accept':'application/json'
    }
  };
   
  function callback(error, response, body) {
    if (!error && response.statusCode == 200) {
      var info = JSON.parse(body);
      return info;
    }
  }
   
  return rp(options, callback);
};

module.exports = {
  imageRetrieve
};