const { Message } = require('discord.js');
const fs = require('fs');
module.exports.run = async (client, message, args) => {
    const testFolder = `${process.cwd()}/commands/runner/`;
    const fs = require('fs');
    console.log(testFolder)

        fs.readdirSync(testFolder).forEach(file => {

        message.channel.send({embed:{
            title: `${file}`,
            description:`${file} has something in it`,
            color: 0x17a589
        }})
    });
    }

module.exports.config = {
command: "list"
}

