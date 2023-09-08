const express = require("express");
const bodyParser = require("body-parser");

const app = express();
const port = process.env.PORT || 3000;

// Middleware to parse JSON request bodies
app.use(bodyParser.json());

// Sample cryptocurrency data (replace with your actual data source)
const currencies = [
    { id: 1, name: "Solana (SOL)", symbol: "SOL", price: 150.00 },
    { id: 2, name: "Stream Token (STRM)", symbol: "STRM", price: 0.02 },
    { id: 3, name: "StreamPay (SPAY)", symbol: "SPAY", price: 1.00 },
    { id: 4, name: "USD Coin (USDC)", symbol: "USDC", price: 1.00 },
    { id: 5, name: "Euro Coin (EURC)", symbol: "EURC", price: 1.00 },
];

// Define blockchain routes
app.get("/api/mainnet/currency", (req, res) => {
    // You can replace this with real data from the Solana mainnet
    res.json(currencies);
});

app.get("/api/mainnet/currency/:id", (req, res) => {
    const productId = parseInt(req.params.id);
    const currency = currencies.find((c) => c.id === productId);

    if (!currency) {
        res.status(404).json({ error: "Currency not found on mainnet" });
    } else {
        res.json(currency);
    }
});

app.get("/api/testnet/currency", (req, res) => {
    // You can replace this with real data from the Solana testnet
    res.json(currencies);
});

app.get("/api/testnet/currency/:id", (req, res) => {
    const productId = parseInt(req.params.id);
    const currency = currencies.find((c) => c.id === productId);

    if (!currency) {
        res.status(404).json({ error: "Currency not found on testnet" });
    } else {
        res.json(currency);
    }
});

app.get("/api/devnet/currency", (req, res) => {
    // You can replace this with real data from the Solana devnet
    res.json(currencies);
});

app.get("/api/devnet/currency/:id", (req, res) => {
    const productId = parseInt(req.params.id);
    const currency = currencies.find((c) => c.id === productId);

    if (!currency) {
        res.status(404).json({ error: "Currency not found on devnet" });
    } else {
        res.json(currency);
    }
});

// Start the server
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});