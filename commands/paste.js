const { Message } = require('discord.js');
const { players } = require('../config.json');
module.exports.run = async (Client, message, args) => {
    if(!players.includes(message.author.id)) return;
    console.log(args[0])
    var PastebinAPI = require('pastebin-js'),
    pastebin = new PastebinAPI({
      'api_dev_key' : '7e324469176ad145663b0af1ee9c7e96',
      'api_user_name' : 'gsdffdff',
      'api_user_password' : 'jamesthejames123'
    });
    pastebin
    .createPasteFromFile({
        filename: `${process.cwd()}/commands/runner/${args[0]}.txt`,
        title: "Public text file listed under my username",
        format: null,
        privacy: 3,
        expiration: '10M'
    })
    .then(function (data) {
        // we have succesfully pasted it. Data contains the id
        message.channel.send(data);
    })
    .fail(function (err) {
        console.log(err);
    });
    }

module.exports.config = {
    command: "paste",
}
