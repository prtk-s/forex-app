const mongoose = require("mongoose");
const config = require("../config");
const currencyModel= require('../models/currency');

module.exports = () => {
  mongoose.connect(config.db.uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  }).then(async ()=>{
      const records= await currencyModel.find();
      if (!records || (records && !records.length)) {
        await currencyModel.insertMany([
        {
          name: 'Indian Rupee (INR)',
          code: 'INR'
        },{
          name: 'Canadian Dollar (CAD)',
          code: 'CAD'
        },{
          name: 'Japanese Yen (JPY)',
          code: 'JPY'
        },{
          name: 'Australian Dollar (AUD)',
          code: 'AUD' }
        ])
      }
  });
};
