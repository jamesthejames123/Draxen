const Discord = require('discord.js');
const client = new Discord.Client();
const { token, prefix } = require('./config.json');
const fs = require('fs');
var PastebinAPI = require('pastebin-js'),
    pastebin = new PastebinAPI({
      'api_dev_key' : '7e324469176ad145663b0af1ee9c7e96',
      'api_user_name' : 'gsdffdff',
      'api_user_password' : 'jamesthejames123'
    });
 

client.commands = new Discord.Collection();
    
fs.readdir("./commands/", (err, files) => {

    if(err) console.error(err);

    let jsfile = files.filter(f => f.split(".").pop() === "js");
    console.log(jsfile)
    if(jsfile.length <= 0) {
         return console.log("[LOGS] Couldn't Find Commands!");
    } 
    else console.log(jsfile.length + ' commands found')

    jsfile.forEach((f, i) => {
        var cmds = require(`./commands/${f}`);
        console.log(`Command ${f} loading...`);
        client.commands.set(cmds.config.command, cmds);
    })
})


client.on("message", async message => {
    var msg = message.content.toUpperCase();
    var cont = message.content.slice(prefix.length).split(" ")
    var args = cont.slice(1);

    if (!message.content.startsWith(prefix)) return;


    var cmd = client.commands.get(cont[0])
    if(cmd) cmd.run(client, message, args);
})
 
client.on('ready', () => {
    console.log("Ready!");
});
 
 
client.login(token);
