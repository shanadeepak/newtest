// JavaScript Document
var os= require('os');
console.log("Hostname is %s",os.hostname());
console.log("Platform name is %s",os.platform());
console.log("Os type is %s",os.type());
console.log("OS architechure is %s",os.arch());
console.log("Release is %s",os.release());
console.log("Uptime is in seconds %d",os.uptime());
console.log("total amounut of system memory is %d bytes",os.totalmem());
console.log("temp dir is",os.tmpdir());
console.log("Information abt cpu");
console.log(os.cpus());
console.log("List of Network Interfaces");
console.log(os.networkInterfaces());