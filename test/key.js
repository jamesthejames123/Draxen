const { Message } = require('discord.js');
const fs = require('fs');
module.exports.run = async (client, message, args) => {
    const chars = [..."ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789"];
    const randomStr = [...Array(10)].map(i=>chars[Math.random()*chars.length|0]).join``;
    keys = [randomStr, randomStr, randomStr].join(',')
    text = fs.readFileSync(`${process.cwd()}/commands/runner/test.txt`, 'utf8').toString()
    const textToReplace = text.split('keys = ""').join(`keys = "${randomStr}"`)
    var readme = fs.writeFileSync(`${process.cwd()}/commands/runner/test.txt`, textToReplace);
    message.channel.send("Did it!")
    console.log(randomStr)
}
 
module.exports.config = {
command: "key"
}