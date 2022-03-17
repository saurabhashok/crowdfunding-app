import web3 from './web3';
import CampaignFactory from './build/CampaignFactory.json';

const instance = new web3.eth.Contract(
  JSON.parse(CampaignFactory.interface),
  '0x5AED3461ef73Cd18F0FF9e3bb323579342D1ce56'
);

export default instance;
