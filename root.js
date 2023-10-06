const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const path = require('path');
const axios = require('axios');
const crypto = require('crypto');

const app = express();
const router = express.Router();

app.use(bodyParser.json());
app.use(cors());
app.use(express.static(path.join(__dirname, 'public')));

const fakeUser = {
  username: 'alok',
  password: 'alok',
};

const initiateSale = async (result,mertxn) => {
  const requestBody = {
    merchantId: "T_20239",
    merchantTxnNo: mertxn,
    amount: "100.00",
    currencyCode: "356",
    payType: "0",
    customerEmailID: "shailaja.kashid@phicommerce.com",
    transactionType: "SALE",
    returnURL: "https://qa.phicommerce.com/pg/api/merchant",
    txnDate: "20231006030700",
    customerMobileNo: "9970064051",
    customerName: "shailaja",
    secureHash: result,
  };

  try {
    const response = await axios.post(
      "https://qa.phicommerce.com/pg/api/v2/initiateSale",
      requestBody
    );
    console.log("API Response:", response.data);
    return response.data;
  } catch (error) {
    console.error("Error:", error);
  }
};

app.post('/login', (req, res) => {
  const { username, password } = req.body;

  if (username === fakeUser.username && password === fakeUser.password) {
    res.json({ message: 'Login successful' });
  } else {
    res.status(401).json({ message: 'Authentication failed' });
  }
});


function hmacDigest(msg, keyString) {
  try {
    const key = Buffer.from(keyString, 'utf-8');
    const msgBuffer = Buffer.from(msg, 'ascii');
    const hmacObj = crypto.createHmac('sha256', key);
    hmacObj.update(msgBuffer);
    const digest = hmacObj.digest();
    const hexDigest = digest.toString('hex');
    return hexDigest;
  } catch (error) {
    console.error("Error:", error);
    return null;
  }
}


app.post('/initiateSale', async (req, res) => {
const mertxn=req.body.merchantTxnId;
console.log("mertxn ",mertxn );

const message = `100.00356shailaja.kashid@phicommerce.com9970064051shailajaT_20239${mertxn}0https://qa.phicommerce.com/pg/api/merchantSALE20231006030700`;
const key = "abc";

const result = hmacDigest(message, key);

console.log("securehash:", result, "mertxn:", mertxn);

  try {
    const abcd = await initiateSale(result,mertxn);
    console.log("print", abcd);
    res.json({ message: 'Sale initiated successfully!', value: abcd });
  } catch (error) {
    res.status(500).json({ message: 'Internal Server Error' });
  }
});



const PORT = 8000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
