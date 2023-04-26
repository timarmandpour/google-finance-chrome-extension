// Copilot: Generate a function that can return the exchange a stock symbol is on from https://www.google.com/finance/quote/
//function getExchange(symbol) {
//    return 'NYSE';
//}

// OpenAI ChatGPT: Generate a function that can return the exchange a stock symbol is on from https://www.google.com/finance/quote/
async function getExchange(symbol) {
    const response = await fetch(`https://www.google.com/finance/quote/${symbol}`);
    const text = await response.text();
    const exchangeRegex = /Exchange:<\/span>\s+<span>(\w+)<\/span>/;
    const match = exchangeRegex.exec(text);
    if (match) {
      return match[1];
    } else {
      throw new Error(`Exchange not found for symbol ${symbol}`);
    }
  }