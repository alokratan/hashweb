const crypto = require('crypto');

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




const mertxn="ABC07650212";
const message = `100.00356shailaja.kashid@phicommerce.com9970064051shailajaT_20239${mertxn}0https://qa.phicommerce.com/pg/api/merchantSALE20231006030700`;
const key = "abc";

const result = hmacDigest(message, key);

console.log("securehash:", result,"mertxn:",mertxn);
