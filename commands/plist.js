const { players } = require('../config.json');
module.exports.run = async (client, message, args) => {
    if(!players.includes(message.author.id)) return;
    const testFolder = `${process.cwd()}/commands/private/`;
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
    command: "plist",
}