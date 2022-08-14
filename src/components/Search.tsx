import React, {useState, useEffect} from 'react';
import Coin from './Coin';
import axios from "axios";
    
export const Search = () => {

  const [coins, setCoins] = useState<any[]>([])
  const [search, setSearch] = useState('')
    
  useEffect(() => {
    axios.get("https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=200&page=1&sparkline=false")
    .then(res => {
      setCoins(res.data)
    }).catch(error => console.log(error))
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value)
  }

  const filteredCoins = coins.filter(coin => coin.name.toLowerCase().includes(search.toLowerCase() ))

  type Coins = {
    id: number;
    name: string;
    image: string;
    symbol: string;
    price: string;
    volume: string;
    priceChange: string;
    marketcap: string;
  }

  return <div className="coin-app">
          <div className="coin-search">
            <h1 className="coin-text">Cryptocurrency Prices</h1>
            <form>
              <input type="text" className="coin-input" placeholder="Search" onChange={handleChange}/>
            </form>
          </div> 
          {filteredCoins.map(coin => {
            return <Coin
              key={coin.id} 
              name={coin.name} 
              image={coin.image}
              symbol={coin.symbol}
              volume={coin.total_volume}
              price={coin.current_price}
              priceChange={coin.price_change_percentage_24h}
              marketcap={coin.market_cap}
              />
          })}
        </div>;
    
}

  
    
export default Search;