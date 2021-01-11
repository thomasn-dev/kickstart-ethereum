import web3 from './web3';
import CampaignFactory from './build/CampaignFactory.json';

const instance = new web3.eth.Contract(
  JSON.parse(CampaignFactory.interface),
  '0x24b2b002b66AEFbd6237394C6B0393eacb5d84d6'
);

export default instance;
