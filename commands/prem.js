const { Message } = require('discord.js');
const fs = require('fs');
const { players } = require('../config.json');
module.exports.run = async (client, message, args) => {
    if(!players.includes(message.author.id)) return;
    fs.unlink(`${process.cwd()}/commands/private/${args[0]}.txt`, function(error) {
        if (error) {
            throw error;
        }
        message.channel.send({embed:{
            title: `${args[0]}.txt`,
            description:`${args[0]}.txt, has been removed!`,
            color: 15844367
        }})
    });
}

module.exports.config = {
command: "prem"
}

