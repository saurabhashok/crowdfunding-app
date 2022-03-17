import  Web3 from 'web3';

let web3;
// we are checking if web3 and window exists then metamask is running get the provider if not then create a provider
// We are in the browser
if(typeof window!=="undefined" && typeof window.ethereum !=="undefined"){
  window.ethereum.request({method:"eth_requestAccounts"});
  web3 = new Web3(window.ethereum);
} else {
  // We  are on the server or the user is not  running  metamask so we need to set our own provider
  const provider = new Web3.providers.HttpProvider(
    //url of the  remote  node we have access to
    "https://ropsten.infura.io/v3/ad08e91868434a0faddff5c1c3fee219"
  );
  //Creating our own instance of web3
  web3 = new Web3(provider);
}


export default web3;
