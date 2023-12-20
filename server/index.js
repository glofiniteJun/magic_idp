const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const { Magic } = require('@magic-sdk/admin');
const { ThirdwebSDK } = require('@thirdweb-dev/sdk');

require('dotenv').config();

// Initialize Magic and thirdweb SDK
const magic = new Magic(process.env.MAGIC_SECRET_KEY);
const sdk = new ThirdwebSDK("ethereum");

const app = express();
app.use(cors());
app.use(bodyParser.json());

app.post('/login', async (req, res) => {
    try {
        const { magicToken } = req.body;
        await magic.token.validate(magicToken);
        const metadata = await magic.users.getMetadataByToken(magicToken);

        // Create or load a wallet
        const wallet = sdk.getWalletByOwner(metadata.issuer);

        res.status(200).json({ message: 'User logged in successfully', user: metadata, wallet });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));