// BUILT IN MODULES
// Using the built in os module
const os = require('os');

//  info abou current user
const user = os.userInfo();
console.log(user);


// method to return the system uptime in seconds
const uptime = os.uptime();
console.log(`${uptime} seconds`);


const currentOS = {
    name:os.type(),
    release:os.release(),
    totalMem:os.totalmem(),
    freeMem:os.freemem(),
}

console.log(currentOS);


