const { Message } = require('discord.js');
const fs = require('fs');
module.exports.run = async (client, message, args) => {
    const testFolder = `${process.cwd()}/commands/`;
    const fs = require('fs');
    console.log(testFolder)


        message.channel.send({embed:{
            color: 0x17a589,
            title: `Commands!`,
            description:`Heres a list of commands!`,
            fields: [{
                name: "Create",
                value: "<create filename context>--use this to create a readable file"
              },
              {
                name: "Ping",
                value: "Pong!"
              },
              {
                name: "run",
                value: "<Run filename>--opens a file that you, orsomeone else, created!"
              },
              {
                name: "list",
                value: "Shows a list of all files."
              },
              {
                name: "Delta",
                value: "Checks if the mentioned user's account is older than or less than 100 days old."
              },
              {
                name: "Dm",
                value: "Makes the bot direct message another user whatever you set."
              },
              {
                name: "rem",
                value: "admin only--Allows you to delete a file--"
              }
            ]
        }})
    }

module.exports.config = {
command: "cmds"
}

