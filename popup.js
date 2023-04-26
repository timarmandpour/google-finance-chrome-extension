document.addEventListener('DOMContentLoaded', function() {
  var scrapeButton = document.getElementById('scrape');
  var symbolInput = document.getElementById('symbol');
  var resultDiv = document.getElementById('result');

  scrapeButton.addEventListener('click', function() {
    var symbol = symbolInput.value.toUpperCase();
    var exchange = 'NYSE';
    var url = 'https://www.google.com/finance/quote/' + symbol + ':' + exchange + '?hl=en';
   
    fetch(url)
      .then(response => response.text())
      .then(
        data => {
        var start = data.indexOf('<div class="YMlKec fxKbKc">') + '<div class="YMlKec fxKbKc">'.length;
        var end = data.indexOf('</div>', start);
        var quote = data.substring(start, end);
        resultDiv.innerHTML = 'The current price of ' + symbol + ' is ' + quote;
      })
  });
});
