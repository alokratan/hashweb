const axios = require('axios');

// Define the API endpoint URL
const url = 'https://cac-gamma.cashfree.com/cac/v1/vendors';

// Define the headers you want to include in the request
const headers = {
  'Content-Type': 'application/json',
  'Authorization': 'Bearer hj9JCN4MzUIJiOicGbhJCLiQ1VKJiOiAXe0Jye.wy0XOzkzMwUjN5YTM6ICc4VmIsISNzEjLzcTMuYjNuITNiojIwlmIsAjOis2Ylh2QlJXd0Fmbnl2ciwSO3UzMwUjN5YTM6ICdhlmIsIyRI5UR1IVSIxUUQdTNFZVMPZzSDRzNzQjMwATMGNkI6ICZJRnbllGbjJye.L3hPFP4NFzVFnEKPDwucc2uubiav2cc0LreUhsodDHJETALHc2LfgCYfnjK4BexU4x'
};

// Define the payload data as an object
const payload = {
  id: '102',
  name: 'aadi',
  email: 'aad2@gmail.com',
  phone: '90383784739',
  status: 'ACTIVE',
  bank: {
    accountNumber: '5302028317',
    accountHolder: 'shruti',
    ifsc: 'CITI0000005'
  }
};

// Send a POST request with headers and data
axios.post(url, payload, { headers })
  .then((response) => {
    // Check if the request was successful (status code 200)
    if (response.status === 200) {
      // Parse and work with the response data (assuming it's JSON)
      console.log(response);
    } else {
      // Handle errors or other status codes
      console.log("error",response);
    }
  })
  .catch((error) => {
    // Handle any errors from the request
    console.error(error);
  });
