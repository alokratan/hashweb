const axios = require('axios');

// Define the API endpoint URL
const url = 'https://sandbox.cashfree.com/pg/easy-split/vendors';

// Define the headers you want to include in the request
const headers = {
    "x-client-id": "CF10024374CK6O1VE57PQLHIR5ENHG",
    "x-client-secret": "1981ad1ec26e2e39b3095ef2561381aa45fd85c8",
    "x-api-version": "2023-08-01",
    "Content-Type": "application/json"
};


const data = {
    "vendor_id": "TestAccount11",
    "status": "ACTIVE",
    "name": "customer",
    "email": "johndoe@cashfree.com",
    "phone": "9876543210",
    "verify_account": true,
    "dashboard_access": true,
    "bank": {
        "account_number": "026291800001191",
        "account_holder": "JOHN DOE",
        "ifsc": "YESB0000262"
    },
    "kyc_details": {
        "account_type": "BUSINESS",
        "business_type": "NBFC",
        "uidai": "625365263277",
        "gst": "11AAAAA1111A1Z0",
        "cin": "L00000Aa0000AaA000000",
        "pan": "AFDHK1234F"
    }
};

// Send a POST request with headers and data
axios.post(url, data, headers)
    .then(response => {
        if (response.status === 200) {
            const response_data = response.data;
            console.log(response_data);
        } else {
            // Handle errors or other status codes
            console.log("Some error", response);
        }
    })
    .catch(error => {
        console.error(error);
    });
