const { Message } = require('discord.js');
const discord = require('discord.js')
const { players } = require('../config.json');
module.exports.run = async ( client, message, args ) => {
    if(!players.includes(message.author.id)) return;
    var fs = require('fs');
    var readme = fs.readFileSync(`${process.cwd()}/test/private/${args[0]}.txt`, 'utf8');
    message.channel.send(readme)
    
    }

module.exports.config = {
    command: "prun",
}
