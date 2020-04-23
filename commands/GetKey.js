const { Message } = require('discord.js');
const fs = require('fs');
const readline = require("readline")
const lineReader = require('line-reader');
const lineByLine = require('n-readlines');
const { createContext } = require('vm');
const liner = new lineByLine(`${process.cwd()}/commands/runner/test.txt`);

module.exports.run = async (client, message, args) => {
        let rawdata = fs.readFileSync(`${process.cwd()}/commands/logs/test.json`);
        let user = JSON.parse(rawdata);
if(user.hasOwnProperty(message.author.id)){
    message.reply("Sent Key In Dms")
    return message.author.send(`Password: \`${user[message.author.id]}\``)
} else
var myRawFile = fs.readFileSync(`${process.cwd()}/commands/runner/test.txt`);
var myFile = String(myRawFile);
const chars = [..."ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789"];
const randomStr = [...Array(10)].map(i=>chars[Math.random()*chars.length|0]).join``;
// resolves any CRLF/LF issues
var lines = myFile.split('\r\n').join('\n').split('\n');
lines
lines[57] = lines[57].slice(0, -5) + ` or tex.Text == "${randomStr}" then`;
myFile = lines.join('\n');
fs.writeFileSync(`${process.cwd()}/commands/runner/test.txt`, myFile);
message.author.send(`Key: \`${randomStr}\``)
var myRawFile = fs.readFileSync(`${process.cwd()}/commands/logs/test.json`);
var myFile = JSON.parse(myRawFile);
myFile[message.author.id] = randomStr;
fs.writeFileSync(`${process.cwd()}/commands/logs/test.json`, JSON.stringify(myFile, null, 2));
message.channel.send("Sent New Key In Dms")
}
 
module.exports.config = {
command: "test"
}