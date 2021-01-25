const config = {
  development: {
    forexBaseUrl: 'https://api.exchangeratesapi.io/latest',
    mongo: '',
    prefix: 'forex',
    app: {
      port: '8081'
    },
    db: {
      uri: 'mongodb://localhost:27017/forex'
    }
  }
}

const environment= process.env.NODE_ENV || 'development';

module.exports= config[environment];