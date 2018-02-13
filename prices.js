var CoinMarketCap = require(".")

var options = {
	events: true,
	refresh: 60, // Refresh time in seconds (Default: 60)
	convert: "EUR" // Convert price to different currencies. (Default USD)
}
var coinmarketcap = new CoinMarketCap(options); 

//var price;

var Mycoins = ["BTC", "ETH", "IOTA", "BCH","XRP", "XMR"]
var price = [];

coinmarketcap.multi(coins => {
    
for(i = 0; i < Mycoins.length; i++) { 
    var current_coin = coins.get(Mycoins[i]).price_usd;

      price.push(current_coin); // push back 1 array--> fill in 1 more element
    
    
}

  console.log(Mycoins);
  console.log(price);
  


  
  //console.log(coins.get("ETH").price_usd); // Print price of ETH in USD
  //console.log(coins.get("IOTA").price_btc); // Print price of ETH in BTC
  
  //console.log(coins.get("BCH").price_btc); // Print price of ETH in BTC
  
  //console.log(coins.get("TRX").price_btc); // Print price of ETH in BTC
  
  //console.log(coins.get("XRP").price_btc); // Print price of ETH in BTC
  //console.log(coins.getTop(10)); // Prints information about top 10 cryptocurrencies
  
//consol.log is the print function!
  
  
    //console.log(coins);  //outputs info about ALL coins on coinmarketcap
  
});