const { Message } = require('discord.js');
const { players } = require('../config.json');
module.exports.run = async (client, message, args) => {
    if(!players.includes(message.author.id)) return;
    var fs = require('fs');
    var join = args.slice(1).join(" ")
    var readme = fs.writeFileSync(`${process.cwd()}/commands/private/${args[0]}.txt`, join);
    message.delete()
    message.channel.send("Created File!")
    message.delete({timeout: 2000})
    }

module.exports.config = {
    command: "prec",
}
