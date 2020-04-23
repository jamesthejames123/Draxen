const { Message } = require('discord.js');

module.exports.run = async (Client, message, args) => {
    var fs = require('fs');
    var readme = fs.readFileSync(`${process.cwd()}/commands/runner/${args[0]}.txt`, 'utf8');
    message.channel.send(readme)
    
    }

module.exports.config = {
    command: "run"
}
