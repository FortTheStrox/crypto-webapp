import { useState, useEffect } from 'react';

type coinAttr = {
    name : string
}

// gets coin information, coin attr taken in at App.tsx

const Coin: React.FunctionComponent<coinAttr> = (props : coinAttr) => {
    const initialValue = {
      name: 'Unknown',
      image: '',
      current_price : 0
    }
    const [coin, setValue] = useState(initialValue);
    useEffect(() => {
      fetch(
        'https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&ids=' + props.name,
        {
          method: "GET"
        }
      )
      .then(res => res.json())
      .then(response => {
        setValue({
          name : response[0].name,
          image : response[0].image,
          current_price : response[0].current_price
        })
      })
      .catch(error => console.log(error));
    }, [props.name])
    return (
      <tr>
        <td><img src={coin.image} alt="Cryptocurrency"/></td>
        <td>{coin.name}</td>
        <td>{coin.current_price}</td>
      </tr>
    )
}

export default Coin;