// instantiating an object
const adsSdk = require("facebook-nodejs-business-sdk");
const AdAccount = adsSdk.AdAccount;
const account = new AdAccount("act_<AD_ACCOUNT_ID>");
console.log(account.id); // fields can be accessed as properties

export { account };


