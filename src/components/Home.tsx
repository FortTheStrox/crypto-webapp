import { useState } from 'react';
import CoinTable from './CoinTable';

import './../style/App.css';
import './../style/Navigation.css';

function Home() {

  return (
    <div className="box">
        <body>
            <div className="content grid">
            <CoinTable number="one" coin1="bitcoin" coin2="ethereum" />
            <CoinTable number="three" coin1="chainlink" coin2="monero" />
            <CoinTable number="four" coin1="cardano" coin2="ripple" />
            <CoinTable number="five" coin1="litecoin" coin2="stellar" />
            <CoinTable number="six" coin1="cosmos" coin2="usd-coin" />
            <CoinTable number="seven" coin1="polkadot" coin2="dai" />
            <CoinTable number="eight" coin1="uniswap" coin2="nem" />
            </div>
        </body>
    </div>
  );
}

export default Home;
