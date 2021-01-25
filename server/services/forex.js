const config = require("../config");
const axios= require('axios');
const currencyModel= require('../models/currency');

class ForexServices {
  constructor(baseUrl) {
    this.baseUrl = baseUrl;

    this.getCurrencyList = this.getCurrencyList.bind(this);
    this.getCurrencyRate = this.getCurrencyRate.bind(this);
  }

  async getCurrencyList() {
    try {
     return await currencyModel.find({});
    } catch (error) {
      console.error(error);
      throw error;
    }
  }

  async getCurrencyRate({base, symbols}) {
    try {
      return await axios.get(`${config.forexBaseUrl}?base=${base}&symbols=${symbols}`);
    } catch (error) {
      console.error(error);
      throw error;
    }
  }
}

module.exports = new ForexServices(config.forexBaseUrl);
