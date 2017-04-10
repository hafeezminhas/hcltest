

  'use strict';

  var http = require('http');
  var debug = require('debug')('hcltest:server');

  var app = require('./api');

  var portconfig = {
    dev: '3200',
    prod: '3200',
    test: '3200'
  };

  var env = process.env.NODE_ENV || 'dev';
  var port = parseInt(portconfig[env]) || 3200;

  app.set('port', port);


  var apiServer = http.createServer(app);
  apiServer.listen(port);

  apiServer.on('error', function(err){
    if(error.syscall !== 'listen') throw error;

    if(error.code === 'EACCES')
        console.error(port + 'requires extented previlages');

    if(error.code === 'EADDRINUSE')
        console.error(port + 'already in use');
  });

  apiServer.on('listening', function(){
    process.stdout.write('\x1Bc');
    console.log('\n------------------------------------------------------');
    console.log('  HCL TEST Project (Guess a number in range)');
    console.log('------------------------------------------------------');
    console.log("Server started on port: " + apiServer.address().port);
    console.log('------------------------------------------------------');
  });