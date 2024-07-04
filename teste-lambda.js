const AWS = require('aws-sdk');

// Configurando a AWS SDK para apontar para o LocalStack
const lambda = new AWS.Lambda({
  endpoint: 'http://localhost:4566',
  region: 'us-east-1'
});

const params = {
  FunctionName: 'StockDataDownloader',
  Payload: JSON.stringify({
    symbol: 'AAPL'
  })
};

lambda.invoke(params, (err, data) => {
  if (err) {
    console.error('Erro ao invocar a função Lambda:', err);
  } else {
    console.log('Resposta da função Lambda:', JSON.parse(data.Payload));
  }
});
