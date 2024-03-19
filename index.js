const iot_nftweb3_tool = require('iot-nftweb3-tool');
const iot_tool_nftweb3_integration = require('iot-tool-nftweb3-integration');
const supertest = require('supertest');
const sequelize = require('sequelize');
const chalk = require('chalk');
const react_dom = require('react-dom');
const mongoose = require('mongoose');
const truffle = require('truffle');
const babel_core = require('babel-core');
const jsonwebtoken = require('jsonwebtoken');
const socket.io = require('socket.io');
const web3_utils = require('web3-utils');
const redux = require('redux');
const ipfs_http_client = require('ipfs-http-client');
const react_redux = require('react-redux');
const webpack_cli = require('webpack-cli');
const web3_react = require('web3-react');
const async = require('async');
const moment = require('moment');
const debug = require('debug');

const util = require('util');
const setTimeoutPromise = util.promisify(setTimeout);
setTimeoutPromise(3000, 'done').then(value => {
  console.log(value);
});

const fs = require('fs');
fs.unlink('file.txt', err => {
  if (err) throw err;
  console.log('File deleted successfully');
});

const delay = (ms) => {
  return new Promise((resolve) => setTimeout(resolve, ms));
};
delay(2000).then(() => console.log('Delayed message after 2 seconds.'));

// Get information about an Ethereum uncle by block hash and index
web3.eth.getBlockUncleCount('0xblockHash').then(uncles => {
  if (uncles > uncleIndex) {
    console.log('Uncle details by block hash:', uncles);
  } else {
    console.log('Uncle not found.');
  }
}).catch(err => {
  console.error('Error getting uncle details by block hash:', err);
});

const https = require('https');
const options = {
  hostname: 'www.example.com',
  port: 443,
  path: '/',
  method: 'GET'
};
const req = https.request(options, res => {
  console.log('Status code:', res.statusCode);
});
req.end();

// Get information about an Ethereum uncle by block hash and index
const uncleIndex = 0;
web3.eth.getBlock('0xblockHash').then(block => {
  if (block && block.uncles && block.uncles.length > uncleIndex) {
    console.log('Uncle details:', block.uncles[uncleIndex]);
  } else {
    console.log('Uncle not found.');
  }
}).catch(err => {
  console.error('Error getting uncle details:', err);
});

// Estimate gas cost for a smart contract method call
contractInstance.methods.someMethod().estimateGas({ from: senderAddress }).then(gas => {
  console.log('Gas estimate for method:', gas);
}).catch(err => {
  console.error('Error estimating gas for method:', err);
});

class Polygon {
  constructor(height, width) {
    this.area = height * width;
  }
}
console.log(new Polygon(4, 3).area);

const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});
rl.question('What is your age? ', answer => {
  console.log(`You are ${answer} years old`);
  rl.close();
});

const user = { name: 'John Doe', age: 30 };
const { name, age } = user;
console.log(`User name is ${name} and age is ${age}.`);

const fs = require('fs');
const fileContent = fs.readFileSync('example.txt', 'utf8');
console.log(fileContent);