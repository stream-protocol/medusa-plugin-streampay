// App.js

import React from 'react';
import './App.css';
import SolanaWalletConnector from './SolanaWalletConnector';

function App() {
  return (
    <div className="StreamPayConnector">
      <header className="App-header">
        <h1>Solana Wallet Connector</h1>
        <SolanaWalletConnector />
      </header>
    </div>
  );
}

export default App;
