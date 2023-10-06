const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors'); // Import the cors middleware
const path = require('path');

const app = express();

app.use(bodyParser.json());

// Use cors middleware to allow all origins
app.use(cors());

// Define your API routes here

const fakeUser = {
  username: 'alok',
  password: 'alok',
};

app.post('/login', (req, res) => {
  const { username, password } = req.body;

  // Replace this with actual user authentication logic
  if (username === fakeUser.username && password === fakeUser.password) {
    res.json({ message: 'Login successful' });
  } else {
    res.status(401).json({ message: 'Authentication failed' });
  }
});
app.use(express.static(path.join(__dirname, 'public')));


const axios = require("axios");

const router = express.Router();



const initiateSale = async () => {
  const requestBody = {
    merchantId: "T_20239",
    merchantTxnNo: "ABC07650237",
    amount: "100.00",
    currencyCode: "356",
    payType: "0",
    customerEmailID: "shailaja.kashid@phicommerce.com",
    transactionType: "SALE",
    returnURL: "https://qa.phicommerce.com/pg/api/merchant",
    txnDate: "20231004030700",
    customerMobileNo: "9970064051",
    customerName: "shailaja",
    secureHash:"dbe1735db054c06526ad2b7ba05aa55d0222ccab2e2483629daa57c1471ae2c4",
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


app.get('/initiateSale', async (req, res) => {
		

    try {
        const abcd=await initiateSale();
console.log(initiateSale());
		console.log("print",abcd);
        res.json({ message: 'Sale initiated successfully!',value:abcd });
    } catch (error) {
        res.status(500).json({ message: 'Internal Server Error' });
    }
});
const PORT = 8000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
