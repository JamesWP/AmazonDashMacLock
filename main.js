//var button = '90:e7:c4:e5:4c:f6'; 
var button = '74:75:48:eb:97:da';
//warning this may trigger multiple times for one press
//...usually triggers twice based on testing for each press
dash_button = require('node-dash-button');

var exec = require('child_process').exec;
var dash = dash_button(button); //address from step above
dash.on("detected", function (){
  exec('./lock.sh', function callback(error, stdout, stderr){});
  exec('afplay lock.m4a', function callback(error, stdout, stderr){});

  
});
