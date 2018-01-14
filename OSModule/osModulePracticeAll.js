var os= require('os');

//Returns the operating system's default directory for temp files.
console.log(os.tmpdir());

console.log(os.hostname());

//Returns the hostname of the operating system.
//console.log();

console.log(os.release());
//Returns the operating system release
console.log(os.type());
//Returns the operating system name.
console.log(os.platform());
//Returns the operating system platform.
console.log(os.arch());
//Returns the operating system CPU architecture. Possible values are "x64", "arm" and "ia32".

console.log(os.uptime());

//Returns the system uptime in seconds.
console.log(os.loadavg());

//Returns an array containing the 1, 5, and 15 minute load averages.

console.log(os.totalmem());

//Returns the total amount of system memory in bytes.

console.log(os.freemem());

//Returns the amount of free system memory in bytes.
console.log(os.cpus());
console.log(os.networkInterfaces());
