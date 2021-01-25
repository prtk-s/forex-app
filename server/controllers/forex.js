const forexService = require("../services/forex");

class ForexController {
  constructor(forexService) {
    this.forexService = forexService;

    this.getCurrencyList = this.getCurrencyList.bind(this);
    this.getCurrencyRate = this.getCurrencyRate.bind(this);
  }

  async getCurrencyList(req, res) {
    try {
      const response= await this.forexService.getCurrencyList();
      return res.status(200).json({data: response});
    } catch (error) {
      console.error("Forex -> controller -> error",error);
      res.status(500).send("Something went wrong");
    }
  }

  async getCurrencyRate(req, res) {
    try {
      const { base } = req.params;
      const baseSymbols= {
        INR: true,
        AUD:true,
        CAD: true,
        JPY: true,
      };
      const response= await this.forexService.getCurrencyRate({base, symbols: Object.keys(baseSymbols).join()});
      return res.status(200).json({data: response.data});
    } catch (error) {
      res.status(500).send("Something went wrong");
    }
  }
}

module.exports = new ForexController(forexService);
