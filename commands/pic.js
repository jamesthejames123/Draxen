const { Message } = require('discord.js');

module.exports.run = async (Client, message, args) => {
    var fs = require('fs');
    var readme = fs.readFileSync(`${process.cwd()}/commands/runner/${args[0]}`, 'utf8');
    message.channel.send({
        files: [{
          attachment: readme,
          name: args[0]
        }]
      })
    
    }

module.exports.config = {
    command: "pic",
}



